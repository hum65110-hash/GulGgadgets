import { useNavigate } from "react-router-dom";
import {
  getCart,
  saveCart,
  getWishlist,
  saveWishlist,
  isInWishlist,
} from "../utils/storage";
import toast from "react-hot-toast";
export default function ProductCard({ product, onClick }) {

  const navigate = useNavigate();

  const {
    id: productId,
    brand,
    name,
    image,
    specs = [],
    category,
    variants,
  } = product;

  const defaultVariant = variants[0];

  const {
    id: variantId,
    price,
    originalPrice,
    numericPrice,
    specs: variantSpecs = [],
  } = defaultVariant;

  const finalSpecs =
    variantSpecs.length ? variantSpecs : specs;

  // ====================================================
  // 🔗 PRODUCT CLICK
  // ====================================================

  const handleProductClick = () => {
    if (onClick) onClick();

    navigate(`/product/${productId}`);
  };

  // ====================================================
  // 🛒 ADD TO CART
  // ====================================================

  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const cart = getCart();

    const existing = cart.find(
      (item) =>
        item.productId === productId &&
        item.variantId === variantId
    );

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        productId,
        variantId,
        category,
        name,
        brand,
        image,
        specs: finalSpecs,
        price,
        numericPrice,
        qty: 1,
      });
    }

    saveCart(cart);
    toast.success("Added to cart");

  };


  const inWishlist = isInWishlist(
    productId,
    variantId
  );


  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const wishlist = getWishlist();

    const existsIndex = wishlist.findIndex(
      (w) =>
        w.productId === productId &&
        w.variantId === variantId
    );

    let updated;

    if (existsIndex !== -1) {
      // REMOVE only this one
      updated = wishlist.filter(
        (_, i) => i !== existsIndex
      );

      toast("Removed from wishlist 💔");
    } else {
      // ADD once
      updated = [
        ...wishlist,
        {
          productId,
          variantId,
          category,
          name,
          brand,
          image,
          specs: finalSpecs,
          price,
          numericPrice,
        },
      ];

      toast.success("Added to wishlist ❤️");
    }

    saveWishlist(updated);
  };


  // ====================================================
  // 🖥️ UI (UNCHANGED)
  // ====================================================

  return (
    <div
      onClick={handleProductClick}
      className="cursor-pointer group bg-surface-dark rounded-xl overflow-hidden border border-border-dark hover:border-primary/30 hover:-translate-y-1 transition"
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/3] bg-background-dark/50 p-6 flex items-center justify-center">

        {/* Wishlist */}
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-dark/80 hover:bg-white hover:text-primary text-white flex items-center justify-center transition z-10"
        >
          <span className="material-symbols-outlined text-[18px]">
            {inWishlist ? "favorite" : "favorite_border"}
          </span>
        </button>

        <img
          src={image}
          alt={name}
          className="object-contain max-h-full group-hover:scale-105 transition"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-3">

        <div className="text-xs uppercase text-text-secondary">
          {brand}
        </div>

        <h3 className="font-bold text-lg text-white group-hover:text-primary transition">
          {name}
        </h3>

        {/* SPECS */}
        <div className="flex gap-2 flex-wrap">
          {finalSpecs.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] bg-background-dark border border-steel-blue px-2 py-0.5 rounded text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* PRICE + CART */}
        <div className="flex justify-between items-end pt-2">

          <div>
            {originalPrice && (
              <p className="text-text-secondary text-xs line-through">
                {originalPrice}
              </p>
            )}
            <p className="text-primary text-xl font-bold">
              {price}
            </p>
          </div>

          <button
            onClick={addToCart}
            className="bg-primary p-2 rounded-lg hover:bg-opacity-90 transition"
          >
            <span className="material-symbols-outlined text-background-dark">
              shopping_bag
            </span>
          </button>

        </div>
      </div>
    </div>
  );
}

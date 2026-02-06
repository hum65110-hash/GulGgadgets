import { useNavigate } from "react-router-dom";

export default function ProductCard({
  id, // 👈 accept real id if exists
  brand,
  name,
  image,
  specs = [],
  originalPrice,
  price,
  category = "products",
  onClick
}) {
  const navigate = useNavigate();

  // =========================================================
  // 🆔 PRODUCT ID (fallback generator)
  // =========================================================

  const productId =
    id ||
    `${brand.toLowerCase().replace(/\s+/g, "-")}-${name
      .toLowerCase()
      .replace(/\s+/g, "-")}`;

  // =========================================================
  // 📦 MINIMAL PRODUCT OBJECT
  // (Only what UI needs instantly)
  // =========================================================

  const productPreview = {
    id: productId,
    brand,
    name,
    image,
    price,
    originalPrice,
    category
  };

  // =========================================================
  // 💾 STORAGE HELPERS
  // =========================================================

  const getStorage = (key) =>
    JSON.parse(localStorage.getItem(key)) || [];

  const saveStorage = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));

  // =========================================================
  // 🔗 PRODUCT CLICK
  // =========================================================

  const handleProductClick = () => {
    // Store ONLY ID (clean architecture)
    localStorage.setItem(
      "selectedProductId",
      productId
    );

    if (onClick) onClick(productPreview);

    navigate(`/product/${productId}`);
  };

  // =========================================================
  // 🛒 ADD TO CART
  // =========================================================

  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let cart = getStorage("cart");

    const existing = cart.find(
      (item) =>
        item.id === productId &&
        item.variantIndex === 0
    );

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: productId,
        variantIndex: 0,
        qty: 1
      });
    }

    saveStorage("cart", cart);
    window.dispatchEvent(new Event("cartUpdated"));

    alert("Added to Cart 🛒");
  };

  // =========================================================
  // ❤️ ADD TO WISHLIST
  // =========================================================

  const addToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let wishlist = getStorage("wishlist");

    const exists = wishlist.find(
      (item) => item.id === productId
    );

    if (!exists) {
      wishlist.push({ id: productId });
      saveStorage("wishlist", wishlist);
      alert("Added to Wishlist ❤️");
    } else {
      alert("Already in Wishlist");
    }
  };

  // =========================================================
  // 🖥️ UI
  // =========================================================

  return (
    <div
      onClick={handleProductClick}
      className="cursor-pointer group bg-surface-dark rounded-xl overflow-hidden border border-border-dark hover:border-primary/30 hover:-translate-y-1 transition"
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/3] bg-background-dark/50 p-6 flex items-center justify-center">

        {/* Wishlist */}
        <button
          onClick={addToWishlist}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-dark/80 hover:bg-white hover:text-primary text-white flex items-center justify-center transition z-10"
        >
          <span className="material-symbols-outlined text-[18px]">
            favorite
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
          {specs.map((tag, i) => (
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

import { useEffect, useState } from "react";
import productData from "../data/products";
import { getCart, saveCart } from "../utils/storage";
import toast from "react-hot-toast";

/* ---------------- HELPERS ---------------- */

const getAllProducts = () => [
  ...productData.laptops,
  ...productData.smartphones,
  ...productData.wearables,
  ...productData.audio,
];

const getProductById = (id) =>
  getAllProducts().find((p) => p.id === id);

const getStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) || [];

const saveStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

/* ---------------- COMPONENT ---------------- */

export default function StickyBuyBar() {
  const [product, setProduct] = useState(null);
  const [variantIndex, setVariantIndex] =
    useState(0);

  /* ---------- LOAD FROM STORAGE ---------- */

  useEffect(() => {
    const id =
      localStorage.getItem("selectedProductId");

    const storedVariant =
      localStorage.getItem(
        "selectedVariantIndex"
      );

    if (storedVariant)
      setVariantIndex(
        parseInt(storedVariant)
      );

    if (!id) return;

    const found = getProductById(id);
    if (found) setProduct(found);
  }, []);

  if (!product) return null;

  /* ---------- NORMALIZE ---------- */

  const hasVariants =
    product.variants?.length > 0;

  const activeVariant = hasVariants
    ? product.variants[variantIndex]
    : null;

  const specs = hasVariants
    ? activeVariant.specs
    : product.specs || [];

  const price = hasVariants
    ? activeVariant.price
    : product.price;

  /* ---------- ADD TO CART ---------- */

const addToCart = () => {
  const cart = getCart();

  const variant = product.variants[variantIndex];

  const existing = cart.find(
    (item) =>
      item.productId === product.id &&
      item.variantId === variant.id
  );

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      productId: product.id,
      variantId: variant.id,
      category: product.category,
      name: product.name,
      brand: product.brand,
      image: product.image,
      specs: variant.specs,
      price: variant.price,
      numericPrice: variant.numericPrice,
      qty: 1,
    });
  }

  saveCart(cart);

  window.dispatchEvent(
    new Event("cartUpdated")
  );

  toast.success("Added to cart");
};

  /* ---------- UI ---------- */

  return (
    <div className="fixed bottom-0 inset-x-0 bg-surface-light dark:bg-surface-dark border-t border-divider-light py-3 px-6 z-40">

      <div className="max-w-[1440px] mx-auto flex justify-between items-center">

        {/* PRODUCT INFO */}
        <div>
          <p className="font-bold text-white">
            {product.name}
          </p>

          {specs.length > 0 && (
            <p className="text-text-muted-light text-sm">
              {specs.join(" • ")}
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-6">

          <p className="text-primary font-bold text-lg">
            {price}
          </p>

          <button
            onClick={addToCart}
            className="bg-primary px-8 rounded-lg text-white font-bold h-12 hover:bg-opacity-90 transition"
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

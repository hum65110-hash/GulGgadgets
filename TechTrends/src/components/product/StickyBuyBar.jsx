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

export default function StickyBuyBar({
  product,
  variantIndex,
  onAddToCart
}) {
  if (!product) return null;

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

  return (
    <div className="fixed bottom-0 inset-x-0 bg-surface-light dark:bg-surface-dark border-t border-divider-light py-3 px-6 z-40">

      <div className="max-w-[1440px] mx-auto flex justify-between items-center">

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

        <div className="flex items-center gap-6">

          <p className="text-primary font-bold text-lg">
            {price}
          </p>

          <button
            onClick={onAddToCart}
            className="bg-primary px-8 rounded-lg text-white font-bold h-12 hover:bg-opacity-90 transition"
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}


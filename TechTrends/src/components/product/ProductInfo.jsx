import { useEffect, useState } from "react";
import productData from "../data/products.js";

/* ---------------- HELPERS ---------------- */

const getAllProducts = () => [
  ...productData.laptops,
  ...productData.smartphones,
  ...productData.wearables,
  ...productData.audio,
];

const getProductById = (id) =>
  getAllProducts().find((p) => p.id === id);

/* ---------------- COMPONENT ---------------- */

export default function ProductInfo({
  onVariantChange, // 👈 send variant to parent
  inStock: propInStock = true
}) {
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] =
    useState(0);

  /* ---------- LOAD PRODUCT ---------- */

  useEffect(() => {
    const storedId =
      localStorage.getItem("selectedProductId");

    if (!storedId) return;

    const found = getProductById(storedId);
    if (found) setProduct(found);
  }, []);

  if (!product) return null;

  const hasVariants =
    product.variants?.length > 0;

  const activeVariant = hasVariants
    ? product.variants[selectedVariant]
    : null;

  const price = hasVariants
    ? activeVariant.price
    : product.price;

  const originalPrice = hasVariants
    ? activeVariant.originalPrice
    : product.originalPrice;

  const inStock =
    product.inStock ?? propInStock;

  /* ---------- HANDLE VARIANT CLICK ---------- */

  const handleVariantClick = (index) => {
    setSelectedVariant(index);

    // Save selected variant globally
    localStorage.setItem(
      "selectedVariantIndex",
      index
    );

    // Inform parent (ProductDetails / StickyBar)
    if (onVariantChange)
      onVariantChange(index);
  };

  /* ---------- UI ---------- */

  return (
    <div>
      {/* BRAND */}
      <div className="text-sm uppercase text-text-secondary mb-2">
        {product.brand}
      </div>

      {/* NAME */}
      <h1 className="text-4xl font-bold text-white">
        {product.name}
      </h1>

      {/* STOCK */}
      <p
        className={`font-bold mt-3 ${
          inStock
            ? "text-primary"
            : "text-red-500"
        }`}
      >
        {inStock
          ? "In Stock"
          : "Out of Stock"}
      </p>

      {/* PRICE */}
      <div className="flex items-center gap-4 mt-4">
        <span className="text-3xl font-bold text-primary">
          {price}
        </span>

        {originalPrice !== price && (
          <span className="line-through text-text-secondary">
            {originalPrice}
          </span>
        )}
      </div>

      {/* ---------------- VARIANT SELECTOR ---------------- */}

      {hasVariants && (
        <div className="mt-6 space-y-2">
          <p className="text-sm text-text-secondary">
            Select Variant
          </p>

          <div className="flex gap-2 flex-wrap">
            {product.variants.map(
              (variant, i) => (
                <button
                  key={i}
                  onClick={() =>
                    handleVariantClick(i)
                  }
                  className={`px-3 py-2 border rounded-lg text-sm transition ${
                    selectedVariant === i
                      ? "border-primary text-primary"
                      : "border-border-dark text-text-secondary hover:border-primary"
                  }`}
                >
                  {variant.specs.join(" / ")}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

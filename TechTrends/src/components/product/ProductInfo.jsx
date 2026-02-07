import { useEffect, useState } from "react";
import { normalizedProductData }
  from "../data/products";

/* ---------------- HELPERS ---------------- */

const getAllProducts = () =>
  Object.values(normalizedProductData).flat();

const getProductById = (id) =>
  getAllProducts().find((p) => p.id === id);


/* ---------------- COMPONENT ---------------- */

export default function ProductInfo({
  product,
  variantIndex,
  onVariantChange,
  inStock: propInStock = true
}) {

  if (!product) return null;

  const hasVariants =
    product.variants?.length > 0;

  const activeVariant = hasVariants
    ? product.variants[variantIndex]
    : null;

  const price = hasVariants
    ? activeVariant.price
    : product.price;

  const originalPrice = hasVariants
    ? activeVariant.originalPrice
    : product.originalPrice;

  const inStock =
    product.inStock ?? propInStock;

  const handleVariantClick = (index) => {
    localStorage.setItem(
      "selectedVariantIndex",
      index
    );

    if (onVariantChange)
      onVariantChange(index);
  };

  return (
    <div>

      <div className="text-sm uppercase text-text-secondary mb-2">
        {product.brand}
      </div>

      <h1 className="text-4xl font-bold text-white">
        {product.name}
      </h1>

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
                    variantIndex === i
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

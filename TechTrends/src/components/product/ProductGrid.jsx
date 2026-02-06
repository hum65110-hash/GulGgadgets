import ProductCard from "./ProductCard";
import { normalizedProductData } from "../data/products";

export default function ProductGrid({
  category = "laptops",
  priceRanges = [],
}) {

  const products =
    normalizedProductData[category] ||
    normalizedProductData.laptops;

  // ---------------- PRICE FILTER ----------------

  const filteredProducts =
    priceRanges.length === 0
      ? products
      : products.filter((product) => {

          const cheapestVariant =
            product.variants.reduce(
              (min, v) =>
                v.numericPrice < min
                  ? v.numericPrice
                  : min,
              Infinity
            );

          return priceRanges.some(
            (range) =>
              cheapestVariant >= range.min &&
              cheapestVariant < range.max
          );
        });

  // ---------------- EMPTY STATE ----------------

  if (filteredProducts.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-24 text-center">

        <span className="material-symbols-outlined text-[64px] text-text-secondary mb-4">
          search_off
        </span>

        <h3 className="text-xl font-bold text-white">
          No products found
        </h3>

        <p className="text-text-secondary mt-2">
          Try adjusting your price filters.
        </p>

      </div>
    );
  }

  // ---------------- GRID ----------------

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}

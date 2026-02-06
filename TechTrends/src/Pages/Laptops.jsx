import { useState } from "react";
import FilterSidebar from "../components/filters/FilterSidebar";
import ProductGrid from "../components/product/ProductGrid";

export default function Laptops() {

  const [priceRanges, setPriceRanges] =
    useState([]);

  return (
    <main className="flex-1 w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row bg-background-dark">

      <FilterSidebar
        onPriceChange={setPriceRanges}
      />

      <section className="flex-1 flex flex-col p-6 lg:p-10">

        {/* Header */}
        <div className="mb-10 space-y-6">

          <nav className="flex gap-2 text-sm">
            {["Home", "Electronics"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-text-secondary hover:text-primary transition"
              >
                {item}
              </a>
            ))}
            <span className="text-white">
              High-Performance Laptops
            </span>
          </nav>

          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-white">
                High-Performance Laptops
              </h1>
              <p className="text-text-secondary">
                Showing results for gaming & professional workstations
              </p>
            </div>
          </div>

        </div>

        <ProductGrid
          category="laptops"
          priceRanges={priceRanges}
        />

      </section>
    </main>
  );
}

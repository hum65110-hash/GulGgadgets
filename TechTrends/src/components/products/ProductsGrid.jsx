import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {[...Array(6)].map((_, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
}

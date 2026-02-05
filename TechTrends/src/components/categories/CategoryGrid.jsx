import CategoryCard from "./CategoryCard";

const categories = [
  "Smartphones",
  "Tablets",
  "Audio",
  "Laptops",
  "Smart Home",
  "Wearables",
  "Gaming",
  "Cameras",
];

export default function CategoryGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {categories.map((c) => (
        <CategoryCard key={c} title={c} />
      ))}
    </div>
  );
}

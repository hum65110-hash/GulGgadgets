import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  const categories = [
    {
      title: "Smartphones",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
      productCount: 245,
      icon: "smartphone",
      link: "/smartphones"
    },
    {
      title: "Laptops",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
      productCount: 124,
      icon: "laptop_mac",
      link: "/laptops"
    },
    {
      title: "Audio",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
      productCount: 189,
      icon: "headphones",
      link: "/audio"
    },
    {
      title: "Wearables",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=400&fit=crop",
      productCount: 156,
      icon: "watch",
      link: "/wearables"
    },
   
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          title={category.title}
          image={category.image}
          productCount={category.productCount}
          icon={category.icon}
          link={category.link}
        />
      ))}
    </div>
  );
}

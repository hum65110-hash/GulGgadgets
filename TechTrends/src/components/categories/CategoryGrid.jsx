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
    {
      title: "Tablets",
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&h=400&fit=crop",
      productCount: 98,
      icon: "tablet_mac",
      link: "/tablets"
    },
    {
      title: "Gaming",
      image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=600&h=400&fit=crop",
      productCount: 215,
      icon: "stadia_controller",
      link: "/gaming"
    },
    {
      title: "Cameras",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
      productCount: 87,
      icon: "photo_camera",
      link: "/cameras"
    },
    {
      title: "Smart Home",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
      productCount: 143,
      icon: "home",
      link: "/smart-home"
    }
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

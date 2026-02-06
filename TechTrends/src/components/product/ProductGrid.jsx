import ProductCard from "./ProductCard";

export default function ProductGrid({ category = "laptops" }) {
  const productData = {
    laptops: [
      // HP
      {
        brand: "HP",
        name: "HP 15s (Intel i5)",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
        specs: ["Intel i5", "16GB", "512GB"],
        originalPrice: "₹64,999",
        price: "₹25,999"
      },
      {
        brand: "HP",
        name: "HP Pavilion 14",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
        specs: ["Intel i5", "16GB", "512GB"],
        originalPrice: "₹74,999",
        price: "₹29,999"
      },
      {
        brand: "HP",
        name: "HP Victus Gaming",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
        specs: ["16GB", "512GB", "RTX 3050"],
        originalPrice: "₹84,999",
        price: "₹33,999"
      },
      {
        brand: "HP",
        name: "HP Omen Gaming",
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop",
        specs: ["16GB", "1TB", "RTX 4060"],
        originalPrice: "₹1,34,999",
        price: "₹53,999"
      },
      // Lenovo
      {
        brand: "Lenovo",
        name: "Lenovo IdeaPad Slim 3",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
        specs: ["Intel i5", "16GB", "512GB"],
        originalPrice: "₹59,999",
        price: "₹23,999"
      },
      {
        brand: "Lenovo",
        name: "Lenovo IdeaPad Slim 5",
        image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=400&h=300&fit=crop",
        specs: ["Intel i5", "16GB", "512GB"],
        originalPrice: "₹74,999",
        price: "₹29,999"
      },
      {
        brand: "Lenovo",
        name: "Lenovo ThinkPad E14",
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=400&h=300&fit=crop",
        specs: ["Intel i5", "16GB", "512GB"],
        originalPrice: "₹84,999",
        price: "₹33,999"
      },
      {
        brand: "Lenovo",
        name: "Lenovo LOQ Gaming",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
        specs: ["16GB", "512GB", "RTX 4050"],
        originalPrice: "₹89,999",
        price: "₹35,999"
      },
      // Dell
      {
        brand: "Dell",
        name: "Dell Inspiron 15",
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop",
        specs: ["Intel i5", "16GB", "512GB"],
        originalPrice: "₹69,999",
        price: "₹27,999"
      },
      {
        brand: "Dell",
        name: "Dell Vostro 14",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
        specs: ["Intel i5", "16GB", "512GB"],
        originalPrice: "₹64,999",
        price: "₹25,999"
      },
      {
        brand: "Dell",
        name: "Dell XPS 13",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
        specs: ["Intel i7", "16GB", "512GB"],
        originalPrice: "₹1,59,999",
        price: "₹63,999"
      },
      // ASUS
      {
        brand: "ASUS",
        name: "ASUS Vivobook 15",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
        specs: ["Intel i5", "16GB", "512GB"],
        originalPrice: "₹62,999",
        price: "₹25,199"
      },
      {
        brand: "ASUS",
        name: "ASUS Vivobook S14 OLED",
        image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=400&h=300&fit=crop",
        specs: ["OLED", "16GB", "512GB"],
        originalPrice: "₹84,999",
        price: "₹33,999"
      },
      {
        brand: "ASUS",
        name: "ASUS TUF Gaming F15",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
        specs: ["16GB", "512GB", "RTX 3050"],
        originalPrice: "₹94,999",
        price: "₹37,999"
      },
      {
        brand: "ASUS",
        name: "ASUS ROG Strix G16",
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop",
        specs: ["16GB", "1TB", "RTX 4060"],
        originalPrice: "₹1,59,999",
        price: "₹63,999"
      },
      // Acer / Samsung
      {
        brand: "Acer",
        name: "Acer Aspire 7",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
        specs: ["Intel i5", "16GB", "512GB"],
        originalPrice: "₹59,999",
        price: "₹23,999"
      },
      {
        brand: "Acer",
        name: "Acer Nitro V Gaming",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
        specs: ["16GB", "512GB", "RTX 4050"],
        originalPrice: "₹84,999",
        price: "₹33,999"
      },
      {
        brand: "Samsung",
        name: "Samsung Galaxy Book 4",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
        specs: ["Intel i5", "16GB", "512GB"],
        originalPrice: "₹79,999",
        price: "₹31,999"
      },
      // Apple MacBooks
      {
        brand: "Apple",
        name: "MacBook Air 13\" M4",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        specs: ["M4", "16GB", "256GB"],
        originalPrice: "₹99,900",
        price: "₹39,960"
      },
      {
        brand: "Apple",
        name: "MacBook Air 13\" M4",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        specs: ["M4", "16GB", "512GB"],
        originalPrice: "₹1,44,900",
        price: "₹57,960"
      },
      {
        brand: "Apple",
        name: "MacBook Air 15\" M4",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=300&fit=crop",
        specs: ["M4", "16GB", "256GB"],
        originalPrice: "₹1,24,900",
        price: "₹49,960"
      },
      {
        brand: "Apple",
        name: "MacBook Air 15\" M4",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=300&fit=crop",
        specs: ["M4", "16GB", "512GB"],
        originalPrice: "₹1,74,900",
        price: "₹69,960"
      },
      {
        brand: "Apple",
        name: "MacBook Air M2",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        specs: ["M2", "8GB", "256GB"],
        originalPrice: "₹1,19,900",
        price: "₹47,960"
      },
      {
        brand: "Apple",
        name: "MacBook Air M2",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        specs: ["M2", "16GB", "512GB"],
        originalPrice: "₹1,49,900",
        price: "₹59,960"
      },
      {
        brand: "Apple",
        name: "MacBook Air M1",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        specs: ["M1", "8GB", "256GB"],
        originalPrice: "₹99,900",
        price: "₹39,960"
      },
      {
        brand: "Apple",
        name: "MacBook Pro 14\" M4 Pro",
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop",
        specs: ["M4 Pro", "16GB", "512GB"],
        originalPrice: "₹1,69,900",
        price: "₹67,960"
      },
      {
        brand: "Apple",
        name: "MacBook Pro 14\" M4 Pro",
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop",
        specs: ["M4 Pro", "24GB", "1TB"],
        originalPrice: "₹2,39,900",
        price: "₹95,960"
      },
      {
        brand: "Apple",
        name: "MacBook Pro 14\" M4 Max",
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop",
        specs: ["M4 Max", "36GB", "1TB"],
        originalPrice: "₹3,19,900",
        price: "₹1,27,960"
      },
      {
        brand: "Apple",
        name: "MacBook Pro 16\" M4 Pro",
        image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=400&h=300&fit=crop",
        specs: ["M4 Pro", "24GB", "512GB"],
        originalPrice: "₹2,49,900",
        price: "₹99,960"
      },
      {
        brand: "Apple",
        name: "MacBook Pro 16\" M4 Pro",
        image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=400&h=300&fit=crop",
        specs: ["M4 Pro", "48GB", "512GB"],
        originalPrice: "₹2,89,900",
        price: "₹1,15,960"
      },
      {
        brand: "Apple",
        name: "MacBook Pro 16\" M4 Max",
        image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=400&h=300&fit=crop",
        specs: ["M4 Max", "36GB", "1TB"],
        originalPrice: "₹3,49,900",
        price: "₹1,39,960"
      },
      {
        brand: "Apple",
        name: "MacBook Pro 16\" M4 Max",
        image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=400&h=300&fit=crop",
        specs: ["M4 Max", "40GB", "1TB"],
        originalPrice: "₹3,99,900",
        price: "₹1,59,960"
      },
      {
        brand: "Apple",
        name: "MacBook Pro 14\" M5",
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop",
        specs: ["M5", "16GB", "512GB"],
        originalPrice: "₹1,69,900",
        price: "₹67,960"
      },
      {
        brand: "Apple",
        name: "MacBook Pro 14\" M5",
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop",
        specs: ["M5", "24GB", "1TB"],
        originalPrice: "₹2,19,900",
        price: "₹87,960"
      },
      {
        brand: "Apple",
        name: "MacBook Pro 14\" M3 Pro",
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop",
        specs: ["M3 Pro", "24GB", "512GB"],
        originalPrice: "₹2,14,900",
        price: "₹85,960"
      },
      {
        brand: "Apple",
        name: "MacBook Pro 14\" M3 Pro",
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop",
        specs: ["M3 Pro", "16GB", "512GB"],
        originalPrice: "₹1,91,900",
        price: "₹76,760"
      }
    ],
    
    smartphones: [
      // Samsung Galaxy Z Fold Series
      {
        brand: "Samsung",
        name: "Galaxy Z Fold3 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["12GB", "256GB", "Foldable"],
        originalPrice: "₹1,49,999",
        price: "₹59,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Fold3 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["12GB", "512GB", "Foldable"],
        originalPrice: "₹1,57,999",
        price: "₹63,199"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Flip3 5G",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        specs: ["8GB", "128GB", "Flip"],
        originalPrice: "₹84,999",
        price: "₹33,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Flip3 5G",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        specs: ["8GB", "256GB", "Flip"],
        originalPrice: "₹88,999",
        price: "₹35,599"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Fold4 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["12GB", "256GB", "Foldable"],
        originalPrice: "₹1,54,999",
        price: "₹61,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Fold4 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["12GB", "512GB", "Foldable"],
        originalPrice: "₹1,64,999",
        price: "₹65,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Fold4 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["12GB", "1TB", "Foldable"],
        originalPrice: "₹1,84,999",
        price: "₹73,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Flip4 5G",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        specs: ["8GB", "128GB", "Flip"],
        originalPrice: "₹89,999",
        price: "₹35,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Flip4 5G",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        specs: ["8GB", "256GB", "Flip"],
        originalPrice: "₹94,999",
        price: "₹37,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Fold5 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["12GB", "256GB", "Foldable"],
        originalPrice: "₹1,54,999",
        price: "₹61,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Fold5 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["12GB", "512GB", "Foldable"],
        originalPrice: "₹1,64,999",
        price: "₹65,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Fold5 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["12GB", "1TB", "Foldable"],
        originalPrice: "₹1,84,999",
        price: "₹73,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Flip5",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        specs: ["8GB", "256GB", "Flip"],
        originalPrice: "₹99,999",
        price: "₹40,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Flip5",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        specs: ["8GB", "512GB", "Flip"],
        originalPrice: "₹1,09,999",
        price: "₹44,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Fold6 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["12GB", "256GB", "Foldable"],
        originalPrice: "₹1,64,999",
        price: "₹65,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Fold6 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["12GB", "512GB", "Foldable"],
        originalPrice: "₹1,76,999",
        price: "₹70,799"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Fold6 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["12GB", "1TB", "Foldable"],
        originalPrice: "₹2,00,999",
        price: "₹80,399"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Flip6 5G",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        specs: ["12GB", "256GB", "Flip"],
        originalPrice: "₹1,09,999",
        price: "₹43,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Flip6 5G",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        specs: ["12GB", "512GB", "Flip"],
        originalPrice: "₹1,21,999",
        price: "₹48,799"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Fold7 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["12GB", "256GB", "Foldable"],
        originalPrice: "₹1,74,999",
        price: "₹69,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Fold7 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["12GB", "512GB", "Foldable"],
        originalPrice: "₹1,86,999",
        price: "₹74,799"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Fold7 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["16GB", "1TB", "Foldable"],
        originalPrice: "₹2,16,999",
        price: "₹86,799"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Flip7 5G",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        specs: ["12GB", "256GB", "Flip"],
        originalPrice: "₹1,09,999",
        price: "₹43,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Flip7 5G",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        specs: ["12GB", "512GB", "Flip"],
        originalPrice: "₹1,21,999",
        price: "₹48,799"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Flip7 FE 5G",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        specs: ["8GB", "128GB", "Flip"],
        originalPrice: "₹89,999",
        price: "₹35,999"
      },
      {
        brand: "Samsung",
        name: "Galaxy Z Flip7 FE 5G",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        specs: ["8GB", "256GB", "Flip"],
        originalPrice: "₹95,999",
        price: "₹38,399"
      },
      // Samsung Galaxy S Series
      {
        brand: "Samsung",
        name: "Galaxy S23",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["8GB", "128GB", "5G"],
        originalPrice: "₹74,999",
        price: "₹30,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S23",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["8GB", "256GB", "5G"],
        originalPrice: "₹79,999",
        price: "₹32,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S23+",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["8GB", "256GB", "5G"],
        originalPrice: "₹94,999",
        price: "₹38,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S23+",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["8GB", "512GB", "5G"],
        originalPrice: "₹1,04,999",
        price: "₹42,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S23 Ultra",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["8GB", "256GB", "5G"],
        originalPrice: "₹1,09,999",
        price: "₹44,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S23 Ultra",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "512GB", "5G"],
        originalPrice: "₹1,19,999",
        price: "₹48,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S23 Ultra",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "1TB", "5G"],
        originalPrice: "₹1,29,999",
        price: "₹52,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S24",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["8GB", "128GB", "AI"],
        originalPrice: "₹74,999",
        price: "₹30,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S24",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["8GB", "256GB", "AI"],
        originalPrice: "₹79,999",
        price: "₹32,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S24",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["8GB", "512GB", "AI"],
        originalPrice: "₹89,999",
        price: "₹36,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S24+",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "256GB", "AI"],
        originalPrice: "₹99,999",
        price: "₹40,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S24+",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "512GB", "AI"],
        originalPrice: "₹1,09,999",
        price: "₹44,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S24 Ultra",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "256GB", "AI"],
        originalPrice: "₹1,29,999",
        price: "₹52,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S24 Ultra",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "512GB", "AI"],
        originalPrice: "₹1,39,999",
        price: "₹56,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S24 Ultra",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "1TB", "AI"],
        originalPrice: "₹1,59,999",
        price: "₹64,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S25",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "256GB", "AI"],
        originalPrice: "₹80,999",
        price: "₹32,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S25",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "512GB", "AI"],
        originalPrice: "₹92,999",
        price: "₹37,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S25+",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "256GB", "AI"],
        originalPrice: "₹99,999",
        price: "₹40,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S25+",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "512GB", "AI"],
        originalPrice: "₹1,11,999",
        price: "₹44,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S25 Ultra",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "256GB", "AI"],
        originalPrice: "₹1,29,999",
        price: "₹52,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S25 Ultra",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "512GB", "AI"],
        originalPrice: "₹1,41,999",
        price: "₹56,000"
      },
      {
        brand: "Samsung",
        name: "Galaxy S25 Ultra",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["12GB", "1TB", "AI"],
        originalPrice: "₹1,65,999",
        price: "₹66,000"
      },
      // iPhone 16 Series
      {
        brand: "Apple",
        name: "iPhone 16",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["128GB", "A18", "5G"],
        originalPrice: "₹79,900",
        price: "₹31,960"
      },
      {
        brand: "Apple",
        name: "iPhone 16",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["256GB", "A18", "5G"],
        originalPrice: "₹89,900",
        price: "₹35,960"
      },
      {
        brand: "Apple",
        name: "iPhone 16",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["512GB", "A18", "5G"],
        originalPrice: "₹1,09,900",
        price: "₹43,960"
      },
      {
        brand: "Apple",
        name: "iPhone 16 Plus",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["128GB", "A18", "5G"],
        originalPrice: "₹89,900",
        price: "₹35,960"
      },
      {
        brand: "Apple",
        name: "iPhone 16 Plus",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["256GB", "A18", "5G"],
        originalPrice: "₹99,900",
        price: "₹39,960"
      },
      {
        brand: "Apple",
        name: "iPhone 16 Plus",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["512GB", "A18", "5G"],
        originalPrice: "₹1,19,900",
        price: "₹47,960"
      },
      {
        brand: "Apple",
        name: "iPhone 16 Pro",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["128GB", "A18 Pro", "Titanium"],
        originalPrice: "₹1,19,900",
        price: "₹47,960"
      },
      {
        brand: "Apple",
        name: "iPhone 16 Pro",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["256GB", "A18 Pro", "Titanium"],
        originalPrice: "₹1,29,900",
        price: "₹51,960"
      },
      {
        brand: "Apple",
        name: "iPhone 16 Pro",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["512GB", "A18 Pro", "Titanium"],
        originalPrice: "₹1,49,900",
        price: "₹59,960"
      },
      {
        brand: "Apple",
        name: "iPhone 16 Pro",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["1TB", "A18 Pro", "Titanium"],
        originalPrice: "₹1,69,900",
        price: "₹67,960"
      },
      {
        brand: "Apple",
        name: "iPhone 16 Pro Max",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["256GB", "A18 Pro", "Titanium"],
        originalPrice: "₹1,44,900",
        price: "₹57,960"
      },
      {
        brand: "Apple",
        name: "iPhone 16 Pro Max",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["512GB", "A18 Pro", "Titanium"],
        originalPrice: "₹1,64,900",
        price: "₹65,960"
      },
      {
        brand: "Apple",
        name: "iPhone 16 Pro Max",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["1TB", "A18 Pro", "Titanium"],
        originalPrice: "₹1,84,900",
        price: "₹73,960"
      },
      // iPhone 14 Series
      {
        brand: "Apple",
        name: "iPhone 14",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["128GB", "A15", "5G"],
        originalPrice: "₹59,900",
        price: "₹23,960"
      },
      {
        brand: "Apple",
        name: "iPhone 14",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["256GB", "A15", "5G"],
        originalPrice: "₹69,900",
        price: "₹27,960"
      },
      {
        brand: "Apple",
        name: "iPhone 14",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["512GB", "A15", "5G"],
        originalPrice: "₹89,900",
        price: "₹35,960"
      },
      {
        brand: "Apple",
        name: "iPhone 14 Plus",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["128GB", "A15", "5G"],
        originalPrice: "₹69,900",
        price: "₹27,960"
      },
      {
        brand: "Apple",
        name: "iPhone 14 Plus",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["256GB", "A15", "5G"],
        originalPrice: "₹79,900",
        price: "₹31,960"
      },
      {
        brand: "Apple",
        name: "iPhone 14 Plus",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["512GB", "A15", "5G"],
        originalPrice: "₹99,900",
        price: "₹39,960"
      },
      {
        brand: "Apple",
        name: "iPhone 14 Pro",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["128GB", "A16 Pro", "5G"],
        originalPrice: "₹99,900",
        price: "₹39,960"
      },
      {
        brand: "Apple",
        name: "iPhone 14 Pro",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["256GB", "A16 Pro", "5G"],
        originalPrice: "₹1,09,900",
        price: "₹43,960"
      },
      {
        brand: "Apple",
        name: "iPhone 14 Pro",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["512GB", "A16 Pro", "5G"],
        originalPrice: "₹1,29,900",
        price: "₹51,960"
      },
      {
        brand: "Apple",
        name: "iPhone 14 Pro",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["1TB", "A16 Pro", "5G"],
        originalPrice: "₹1,49,900",
        price: "₹59,960"
      },
      {
        brand: "Apple",
        name: "iPhone 14 Pro Max",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["128GB", "A16 Pro", "5G"],
        originalPrice: "₹1,09,900",
        price: "₹43,960"
      },
      {
        brand: "Apple",
        name: "iPhone 14 Pro Max",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["256GB", "A16 Pro", "5G"],
        originalPrice: "₹1,19,900",
        price: "₹47,960"
      },
      {
        brand: "Apple",
        name: "iPhone 14 Pro Max",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["512GB", "A16 Pro", "5G"],
        originalPrice: "₹1,39,900",
        price: "₹55,960"
      },
      {
        brand: "Apple",
        name: "iPhone 14 Pro Max",
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",
        specs: ["1TB", "A16 Pro", "5G"],
        originalPrice: "₹1,59,900",
        price: "₹63,960"
      },
      // iPhone 15 Series
      {
        brand: "Apple",
        name: "iPhone 15",
        image: "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",
        specs: ["128GB", "A16", "5G"],
        originalPrice: "₹69,900",
        price: "₹27,960"
      },
      {
        brand: "Apple",
        name: "iPhone 15",
        image: "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",
        specs: ["256GB", "A16", "5G"],
        originalPrice: "₹79,900",
        price: "₹31,960"
      },
      {
        brand: "Apple",
        name: "iPhone 15",
        image: "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",
        specs: ["512GB", "A16", "5G"],
        originalPrice: "₹99,900",
        price: "₹39,960"
      },
      {
        brand: "Apple",
        name: "iPhone 15 Plus",
        image: "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",
        specs: ["128GB", "A16", "5G"],
        originalPrice: "₹79,900",
        price: "₹31,960"
      },
      {
        brand: "Apple",
        name: "iPhone 15 Plus",
        image: "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",
        specs: ["256GB", "A16", "5G"],
        originalPrice: "₹89,900",
        price: "₹35,960"
      },
      {
        brand: "Apple",
        name: "iPhone 15 Plus",
        image: "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",
        specs: ["512GB", "A16", "5G"],
        originalPrice: "₹1,09,900",
        price: "₹43,960"
      },
      {
        brand: "Apple",
        name: "iPhone 15 Pro",
        image: "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",
        specs: ["128GB", "A17 Pro", "Titanium"],
        originalPrice: "₹1,34,900",
        price: "₹53,960"
      },
      {
        brand: "Apple",
        name: "iPhone 15 Pro",
        image: "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",
        specs: ["256GB", "A17 Pro", "Titanium"],
        originalPrice: "₹1,44,900",
        price: "₹57,960"
      },
      {
        brand: "Apple",
        name: "iPhone 15 Pro",
        image: "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",
        specs: ["512GB", "A17 Pro", "Titanium"],
        originalPrice: "₹1,64,900",
        price: "₹65,960"
      },
      {
        brand: "Apple",
        name: "iPhone 15 Pro",
        image: "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",
        specs: ["1TB", "A17 Pro", "Titanium"],
        originalPrice: "₹1,84,900",
        price: "₹73,960"
      },
      {
        brand: "Apple",
        name: "iPhone 15 Pro Max",
        image: "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",
        specs: ["256GB", "A17 Pro", "Titanium"],
        originalPrice: "₹1,59,900",
        price: "₹63,960"
      },
      {
        brand: "Apple",
        name: "iPhone 15 Pro Max",
        image: "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",
        specs: ["512GB", "A17 Pro", "Titanium"],
        originalPrice: "₹1,79,900",
        price: "₹71,960"
      },
      {
        brand: "Apple",
        name: "iPhone 15 Pro Max",
        image: "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",
        specs: ["1TB", "A17 Pro", "Titanium"],
        originalPrice: "₹1,99,900",
        price: "₹79,960"
      },
      // iPhone 17 Series
      {
        brand: "Apple",
        name: "iPhone 17",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["256GB", "A19", "5G"],
        originalPrice: "₹82,900",
        price: "₹33,160"
      },
      {
        brand: "Apple",
        name: "iPhone 17",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["512GB", "A19", "5G"],
        originalPrice: "₹1,02,900",
        price: "₹41,160"
      },
      {
        brand: "Apple",
        name: "iPhone 17 Air",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["256GB", "A19", "Ultra Thin"],
        originalPrice: "₹1,19,900",
        price: "₹47,960"
      },
      {
        brand: "Apple",
        name: "iPhone 17 Air",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["512GB", "A19", "Ultra Thin"],
        originalPrice: "₹1,39,900",
        price: "₹55,960"
      },
      {
        brand: "Apple",
        name: "iPhone 17 Air",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["1TB", "A19", "Ultra Thin"],
        originalPrice: "₹1,59,900",
        price: "₹63,960"
      },
      {
        brand: "Apple",
        name: "iPhone 17 Pro",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["256GB", "A19 Pro", "Titanium"],
        originalPrice: "₹1,34,900",
        price: "₹53,960"
      },
      {
        brand: "Apple",
        name: "iPhone 17 Pro",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["512GB", "A19 Pro", "Titanium"],
        originalPrice: "₹1,54,900",
        price: "₹61,960"
      },
      {
        brand: "Apple",
        name: "iPhone 17 Pro",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["1TB", "A19 Pro", "Titanium"],
        originalPrice: "₹1,74,900",
        price: "₹69,960"
      },
      {
        brand: "Apple",
        name: "iPhone 17 Pro Max",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["256GB", "A19 Pro", "Titanium"],
        originalPrice: "₹1,49,900",
        price: "₹59,960"
      },
      {
        brand: "Apple",
        name: "iPhone 17 Pro Max",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["512GB", "A19 Pro", "Titanium"],
        originalPrice: "₹1,69,900",
        price: "₹67,960"
      },
      {
        brand: "Apple",
        name: "iPhone 17 Pro Max",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["1TB", "A19 Pro", "Titanium"],
        originalPrice: "₹1,89,900",
        price: "₹75,960"
      },
      {
        brand: "Apple",
        name: "iPhone 17 Pro Max",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["2TB", "A19 Pro", "Titanium"],
        originalPrice: "₹2,29,900",
        price: "₹91,960"
      }
    ],
    
    wearables: [
      {
        brand: "Samsung",
        name: "Galaxy Watch8 Classic",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=300&fit=crop",
        specs: ["AMOLED", "GPS", "Health"],
        originalPrice: "₹31,900",
        price: "₹31,900"
      },
      {
        brand: "Samsung",
        name: "Galaxy Watch7 44mm",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=300&fit=crop",
        specs: ["AMOLED", "GPS", "Fitness"],
        originalPrice: "₹16,499",
        price: "₹16,499"
      },
      {
        brand: "Samsung",
        name: "Galaxy Watch6 Classic 47mm",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=300&fit=crop",
        specs: ["Rotating", "GPS", "47mm"],
        originalPrice: "₹14,499",
        price: "₹14,499"
      },
      {
        brand: "Samsung",
        name: "Galaxy Watch8 Standard",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=300&fit=crop",
        specs: ["AMOLED", "GPS", "Health"],
        originalPrice: "₹32,999",
        price: "₹32,999"
      },
      {
        brand: "Titan",
        name: "Celestor 2.0 Smartwatch",
        image: "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=400&h=300&fit=crop",
        specs: ["Hybrid", "GPS", "Indian"],
        originalPrice: "₹11,499",
        price: "₹11,499"
      },
      {
        brand: "Motorola",
        name: "Moto Watch",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=300&fit=crop",
        specs: ["AMOLED", "Fitness", "Budget"],
        originalPrice: "₹12,999",
        price: "₹12,999"
      },
      {
        brand: "Amazfit",
        name: "Active Max Smartwatch",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop",
        specs: ["AMOLED", "GPS", "Active"],
        originalPrice: "₹15,999",
        price: "₹15,999"
      },
      {
        brand: "Amazfit",
        name: "T-Rex 3 Pro Smartwatch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        specs: ["Rugged", "GPS", "Pro"],
        originalPrice: "₹34,999",
        price: "₹34,999"
      },
      {
        brand: "Apple",
        name: "Apple Watch Series 10 GPS",
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop",
        specs: ["GPS", "OLED", "watchOS"],
        originalPrice: "₹35,994",
        price: "₹35,994"
      },
      {
        brand: "Google",
        name: "Pixel Watch 4",
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=300&fit=crop",
        specs: ["Wear OS", "GPS", "Fitbit"],
        originalPrice: "₹39,990",
        price: "₹39,990"
      }
    ],
    
    audio: [
      {
        brand: "Samsung",
        name: "Galaxy Buds 3 Pro",
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
        specs: ["ANC", "360 Audio", "Premium"],
        originalPrice: "₹15,999",
        price: "₹15,999"
      },
      {
        brand: "Marshall",
        name: "Motif II ANC TWS Earbuds",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
        specs: ["ANC", "Marshall", "Premium"],
        originalPrice: "₹18,999",
        price: "₹18,999"
      },
      {
        brand: "Devialet",
        name: "Gemini II TWS Earbuds",
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
        specs: ["Premium", "ANC", "HiFi"],
        originalPrice: "₹59,990",
        price: "₹59,990"
      },
      {
        brand: "Apple",
        name: "AirPods Max",
        image: "https://images.unsplash.com/photo-1625755216532-08b5b63dd097?w=400&h=300&fit=crop",
        specs: ["ANC", "Spatial", "Premium"],
        originalPrice: "₹59,900",
        price: "₹59,900"
      },
      {
        brand: "Samsung",
        name: "Galaxy Buds Live 3",
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
        specs: ["ANC", "Bean", "Unique"],
        originalPrice: "₹18,999",
        price: "₹18,999"
      },
      {
        brand: "JBL",
        name: "Live Pro 3 Earbuds",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
        specs: ["ANC", "JBL Sound", "TWS"],
        originalPrice: "₹12,999",
        price: "₹12,999"
      },
      {
        brand: "Bose",
        name: "QuietComfort Buds II",
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
        specs: ["Premium ANC", "Comfort", "Bose"],
        originalPrice: "₹21,999",
        price: "₹21,999"
      },
      {
        brand: "OnePlus",
        name: "Buds Pro 2",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
        specs: ["ANC", "Premium", "OnePlus"],
        originalPrice: "₹13,999",
        price: "₹13,999"
      },
      {
        brand: "Sony",
        name: "WF-1000XM5 Earbuds",
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
        specs: ["Best ANC", "LDAC", "Premium"],
        originalPrice: "₹18,499",
        price: "₹18,499"
      },
      {
        brand: "Sony",
        name: "WH-1000XM6 Headphones",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop",
        specs: ["Top ANC", "LDAC", "Premium"],
        originalPrice: "₹29,999",
        price: "₹29,999"
      },
      {
        brand: "Bose",
        name: "Noise Cancelling 700",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
        specs: ["Premium ANC", "Bose", "Headphones"],
        originalPrice: "₹35,999",
        price: "₹35,999"
      },
      {
        brand: "Apple",
        name: "AirPods Pro 2nd Gen",
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
        specs: ["ANC", "Spatial", "USB-C"],
        originalPrice: "₹26,000",
        price: "₹26,000"
      },
      {
        brand: "Sennheiser",
        name: "Momentum TWS 3",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
        specs: ["Audiophile", "ANC", "Premium"],
        originalPrice: "₹18,499",
        price: "₹18,499"
      },
      {
        brand: "JBL",
        name: "Tour Pro 2 Earbuds",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
        specs: ["Smart Case", "ANC", "JBL"],
        originalPrice: "₹16,499",
        price: "₹16,499"
      },
      {
        brand: "Beats",
        name: "Studio Pro Wireless",
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
        specs: ["ANC", "40hr", "USB-C"],
        originalPrice: "₹25,999",
        price: "₹25,999"
      }
    ]
  };

  const products = productData[category] || productData.laptops;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {products.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </div>
  );
}
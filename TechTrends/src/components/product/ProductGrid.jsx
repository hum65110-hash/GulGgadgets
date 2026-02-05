import ProductCard from "./ProductCard";

export default function ProductGrid({ category = "laptops" }) {
  const productData = {
    laptops: [
      {
        brand: "Alienware",
        name: "Alienware x16 R1 Gaming Laptop",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyI9wHgQMKBmGZu1n4VLFaDnht81jTXp69LlGU9XxbY0chxMn_zmoFj1VNH5Ouk8-Pw8prdEFWUNu0h_cRSAANFZOWYHxTrtZ_3P2r2798ZXZdhKKhnz6aRVH6pb1gIU3U2PcB-y9hndkkpmjHran40m_18BvytltJI3dlFmBR4GMOLwYFj6kqwhXmRHpcFO0z6RajxYRV0ImM9AYKaWdMEhkycyzUam9-zy7V_mG4imyAzUmWTnm7pb32q_oor3Plyb9R-vI2b8H3",
        specs: ["Core i9", "32GB", "1TB"],
        originalPrice: "$3299",
        price: "$2899"
      },
      {
        brand: "MacBook",
        name: "MacBook Pro 16\" M3 Max",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        specs: ["M3 Max", "36GB", "1TB SSD"],
        originalPrice: "$3999",
        price: "$3499"
      },
      {
        brand: "Dell",
        name: "Dell XPS 15 OLED",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
        specs: ["Core i7", "16GB", "512GB"],
        originalPrice: "$2199",
        price: "$1899"
      },
      {
        brand: "ASUS",
        name: "ASUS ROG Zephyrus G14",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
        specs: ["Ryzen 9", "32GB", "1TB"],
        originalPrice: "$2499",
        price: "$2199"
      },
      {
        brand: "Lenovo",
        name: "ThinkPad X1 Carbon Gen 11",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
        specs: ["Core i7", "16GB", "512GB"],
        originalPrice: "$1899",
        price: "$1699"
      },
      {
        brand: "HP",
        name: "HP Spectre x360 14",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
        specs: ["Core i7", "16GB", "1TB"],
        originalPrice: "$1799",
        price: "$1599"
      }
    ],
    smartphones: [
      {
        brand: "Apple",
        name: "iPhone 15 Pro Max",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        specs: ["A17 Pro", "256GB", "Titanium"],
        originalPrice: "$1299",
        price: "$1199"
      },
      {
        brand: "Samsung",
        name: "Galaxy S24 Ultra",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        specs: ["Snapdragon 8", "256GB", "S Pen"],
        originalPrice: "$1299",
        price: "$1099"
      },
      {
        brand: "Google",
        name: "Pixel 8 Pro",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        specs: ["Tensor G3", "256GB", "AI Camera"],
        originalPrice: "$999",
        price: "$899"
      },
      {
        brand: "OnePlus",
        name: "OnePlus 12",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        specs: ["Snapdragon 8", "256GB", "120Hz"],
        originalPrice: "$899",
        price: "$799"
      },
      {
        brand: "Xiaomi",
        name: "Xiaomi 14 Pro",
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop",
        specs: ["Snapdragon 8", "512GB", "Leica"],
        originalPrice: "$1099",
        price: "$999"
      },
      {
        brand: "Sony",
        name: "Xperia 1 V",
        image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=300&fit=crop",
        specs: ["Snapdragon 8", "256GB", "4K Display"],
        originalPrice: "$1199",
        price: "$1099"
      }
    ],
    audio: [
      {
        brand: "Apple",
        name: "AirPods Pro 2nd Gen",
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
        specs: ["ANC", "Spatial Audio", "USB-C"],
        originalPrice: "$249",
        price: "$199"
      },
      {
        brand: "Sony",
        name: "WH-1000XM5",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop",
        specs: ["ANC", "30hr Battery", "LDAC"],
        originalPrice: "$399",
        price: "$349"
      },
      {
        brand: "Bose",
        name: "QuietComfort Ultra",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
        specs: ["ANC", "Spatial Audio", "24hr"],
        originalPrice: "$429",
        price: "$379"
      },
      {
        brand: "Sennheiser",
        name: "Momentum 4 Wireless",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        specs: ["ANC", "60hr Battery", "AptX"],
        originalPrice: "$379",
        price: "$329"
      },
      {
        brand: "Beats",
        name: "Studio Pro",
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
        specs: ["ANC", "40hr Battery", "USB-C"],
        originalPrice: "$349",
        price: "$299"
      },
      {
        brand: "JBL",
        name: "Tour Pro 2",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
        specs: ["Smart Case", "ANC", "Bluetooth 5.3"],
        originalPrice: "$249",
        price: "$199"
      }
    ],
    wearables: [
      {
        brand: "Apple",
        name: "Apple Watch Ultra 2",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=300&fit=crop",
        specs: ["Titanium", "GPS", "100m Water"],
        originalPrice: "$849",
        price: "$799"
      },
      {
        brand: "Samsung",
        name: "Galaxy Watch 6 Classic",
        image: "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=400&h=300&fit=crop",
        specs: ["Rotating Bezel", "AMOLED", "Health"],
        originalPrice: "$429",
        price: "$379"
      },
      {
        brand: "Garmin",
        name: "Fenix 7X Pro",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=300&fit=crop",
        specs: ["Multi-Sport", "Solar", "GPS"],
        originalPrice: "$999",
        price: "$899"
      },
      {
        brand: "Fitbit",
        name: "Sense 2",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop",
        specs: ["Health Tracking", "GPS", "6 Day"],
        originalPrice: "$299",
        price: "$249"
      },
      {
        brand: "Polar",
        name: "Vantage V3",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        specs: ["Training", "GPS", "AMOLED"],
        originalPrice: "$599",
        price: "$549"
      },
      {
        brand: "Whoop",
        name: "Whoop 4.0",
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=300&fit=crop",
        specs: ["Recovery", "Strain", "Sleep"],
        originalPrice: "$299",
        price: "$239"
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

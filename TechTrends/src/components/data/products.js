const productData = {
  laptops: [
    // HP
    {
      id: "hp-15s-i5",
      brand: "HP",
      name: "HP 15s (Intel i5)",
      image: "/images/hp1.avif",
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹64,999",
      price: "₹25,999",
    },
    {
      id: "hp-pavilion-14",
      brand: "HP",
      name: "HP Pavilion 14",
      image: "/images/hp2.jpg",
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹74,999",
      price: "₹29,999",
    },
    {
      id: "hp-victus-gaming",
      brand: "HP",
      name: "HP Victus Gaming",
      image: "/images/hp3.jpg",
      specs: ["16GB", "512GB", "RTX 3050"],
      originalPrice: "₹84,999",
      price: "₹33,999",
    },
    {
      id: "hp-omen-gaming",
      brand: "HP",
      name: "HP Omen Gaming",
      image: "/images/hp4.webp",
      specs: ["16GB", "1TB", "RTX 4060"],
      originalPrice: "₹1,34,999",
      price: "₹53,999",
    },

    // Lenovo
    {
      id: "lenovo-ideapad-slim-3",
      brand: "Lenovo",
      name: "Lenovo IdeaPad Slim 3",
      image: "/images/lenovo1.jpg",
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹59,999",
      price: "₹23,999",
    },
    {
      id: "lenovo-ideapad-slim-5",
      brand: "Lenovo",
      name: "Lenovo IdeaPad Slim 5",
      image: "/images/lenovo2.jpg",
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹74,999",
      price: "₹29,999",
    },
    {
      id: "lenovo-thinkpad-e14",
      brand: "Lenovo",
      name: "Lenovo ThinkPad E14",
      image: "/images/lenovo3.jpg",
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹84,999",
      price: "₹33,999",
    },
    {
      id: "lenovo-loq-gaming",
      brand: "Lenovo",
      name: "Lenovo LOQ Gaming",
      image: "/images/lenovo4.jpg",
      specs: ["16GB", "512GB", "RTX 4050"],
      originalPrice: "₹89,999",
      price: "₹35,999",
    },

    // Dell
    {
      id: "dell-inspiron-15",
      brand: "Dell",
      name: "Dell Inspiron 15",
      image: "/images/dell1.avif",
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹69,999",
      price: "₹27,999",
    },
    {
      id: "dell-vostro-14",
      brand: "Dell",
      name: "Dell Vostro 14",
      image: "/images/dell2.jpg",
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹64,999",
      price: "₹25,999",
    },
    {
      id: "dell-xps-13",
      brand: "Dell",
      name: "Dell XPS 13",
      image: "/images/dell3.avif",
      specs: ["Intel i7", "16GB", "512GB"],
      originalPrice: "₹1,59,999",
      price: "₹63,999",
    },

    // ASUS
    {
      id: "asus-vivobook-15",
      brand: "ASUS",
      name: "ASUS Vivobook 15",
      image: "/images/asus1.webp",
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹62,999",
      price: "₹25,199",
    },
    {
      id: "asus-vivobook-s14-oled",
      brand: "ASUS",
      name: "ASUS Vivobook S14 OLED",
      image: "/images/asus2.jpg",
      specs: ["OLED", "16GB", "512GB"],
      originalPrice: "₹84,999",
      price: "₹33,999",
    },
    {
      id: "asus-tuf-f15",
      brand: "ASUS",
      name: "ASUS TUF Gaming F15",
      image: "/images/asus3.jpg",
      specs: ["16GB", "512GB", "RTX 3050"],
      originalPrice: "₹94,999",
      price: "₹37,999",
    },
    {
      id: "asus-rog-strix-g16",
      brand: "ASUS",
      name: "ASUS ROG Strix G16",
      image: "/images/asus4.png",
      specs: ["16GB", "1TB", "RTX 4060"],
      originalPrice: "₹1,59,999",
      price: "₹63,999",
    },

    // Acer
    {
      id: "acer-aspire-7",
      brand: "Acer",
      name: "Acer Aspire 7",
      image: "/images/acer1.jpg",
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹59,999",
      price: "₹23,999",
    },
    {
      id: "acer-nitro-v",
      brand: "Acer",
      name: "Acer Nitro V Gaming",
      image: "/images/acer2.jpg",
      specs: ["16GB", "512GB", "RTX 4050"],
      originalPrice: "₹84,999",
      price: "₹33,999",
    },

    // Samsung
    {
      id: "samsung-galaxy-book-4",
      brand: "Samsung",
      name: "Samsung Galaxy Book 4",
      image: "/images/acer3.jpg",
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹79,999",
      price: "₹31,999",
    },
  ],
  smartphones: [
    // Samsung Galaxy Z Fold Series
    {
      id: "zfold3",
      brand: "Samsung",
      name: "Galaxy Z Fold3 5G",
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["12GB", "256GB", "Foldable"],
          originalPrice: "₹1,49,999",
          price: "₹59,999",
        },
        {
          specs: ["12GB", "512GB", "Foldable"],
          originalPrice: "₹1,57,999",
          price: "₹63,199",
        },
      ],
    },
    {
      id: "zfold4",
      brand: "Samsung",
      name: "Galaxy Z Fold4 5G",
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["12GB", "256GB", "Foldable"],
          originalPrice: "₹1,54,999",
          price: "₹61,999",
        },
        {
          specs: ["12GB", "512GB", "Foldable"],
          originalPrice: "₹1,64,999",
          price: "₹65,999",
        },
        {
          specs: ["12GB", "1TB", "Foldable"],
          originalPrice: "₹1,84,999",
          price: "₹73,999",
        },
      ],
    },
    {
      id: "zfold5",
      brand: "Samsung",
      name: "Galaxy Z Fold5 5G",
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["12GB", "256GB", "Foldable"],
          originalPrice: "₹1,54,999",
          price: "₹61,999",
        },
        {
          specs: ["12GB", "512GB", "Foldable"],
          originalPrice: "₹1,64,999",
          price: "₹65,999",
        },
        {
          specs: ["12GB", "1TB", "Foldable"],
          originalPrice: "₹1,84,999",
          price: "₹73,999",
        },
      ],
    },
    {
      id: "zfold6",
      brand: "Samsung",
      name: "Galaxy Z Fold6 5G",
      variants: [
        {
          specs: ["12GB", "256GB", "Foldable"],
          originalPrice: "₹1,64,999",
          price: "₹65,999",
        },
        {
          specs: ["12GB", "512GB", "Foldable"],
          originalPrice: "₹1,76,999",
          price: "₹70,799",
        },
        {
          specs: ["12GB", "1TB", "Foldable"],
          originalPrice: "₹2,00,999",
          price: "₹80,399",
        },
      ],
    },
    {
      id: "zfold7",
      brand: "Samsung",
      name: "Galaxy Z Fold7 5G",
      variants: [
        {
          specs: ["12GB", "256GB", "Foldable"],
          originalPrice: "₹1,74,999",
          price: "₹69,999",
        },
        {
          specs: ["12GB", "512GB", "Foldable"],
          originalPrice: "₹1,86,999",
          price: "₹74,799",
        },
        {
          specs: ["16GB", "1TB", "Foldable"],
          originalPrice: "₹2,16,999",
          price: "₹86,799",
        },
      ],
    },
    {
      id: "zflip3",
      brand: "Samsung",
      name: "Galaxy Z Flip3 5G",
      variants: [
        {
          specs: ["8GB", "128GB", "Flip"],
          originalPrice: "₹84,999",
          price: "₹33,999",
        },
        {
          specs: ["8GB", "256GB", "Flip"],
          originalPrice: "₹88,999",
          price: "₹35,599",
        },
      ],
    },
    {
      id: "zflip4",
      brand: "Samsung",
      name: "Galaxy Z Flip4 5G",
      variants: [
        {
          specs: ["8GB", "128GB", "Flip"],
          originalPrice: "₹89,999",
          price: "₹35,999",
        },
        {
          specs: ["8GB", "256GB", "Flip"],
          originalPrice: "₹94,999",
          price: "₹37,999",
        },
      ],
    },
    {
      id: "zflip5",
      brand: "Samsung",
      name: "Galaxy Z Flip5",
      variants: [
        {
          specs: ["8GB", "256GB", "Flip"],
          originalPrice: "₹99,999",
          price: "₹40,000",
        },
        {
          specs: ["8GB", "512GB", "Flip"],
          originalPrice: "₹1,09,999",
          price: "₹44,000",
        },
      ],
    },
    {
      id: "zflip6",
      brand: "Samsung",
      name: "Galaxy Z Flip6 5G",
      variants: [
        {
          specs: ["12GB", "256GB", "Flip"],
          originalPrice: "₹1,09,999",
          price: "₹43,999",
        },
        {
          specs: ["12GB", "512GB", "Flip"],
          originalPrice: "₹1,21,999",
          price: "₹48,799",
        },
      ],
    },
    {
      id: "zflip7",
      brand: "Samsung",
      name: "Galaxy Z Flip7 5G",
      variants: [
        {
          specs: ["12GB", "256GB", "Flip"],
          originalPrice: "₹1,09,999",
          price: "₹43,999",
        },
        {
          specs: ["12GB", "512GB", "Flip"],
          originalPrice: "₹1,21,999",
          price: "₹48,799",
        },
      ],
    },
    {
      id: "zflip7-fe",
      brand: "Samsung",
      name: "Galaxy Z Flip7 FE 5G",
      variants: [
        {
          specs: ["8GB", "128GB", "Flip"],
          originalPrice: "₹89,999",
          price: "₹35,999",
        },
        {
          specs: ["8GB", "256GB", "Flip"],
          originalPrice: "₹95,999",
          price: "₹38,399",
        },
      ],
    },

    // Samsung Galaxy S Series
    {
      id: "galaxy-s23",
      brand: "Samsung",
      name: "Galaxy S23",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["8GB", "128GB", "5G"],
          originalPrice: "₹74,999",
          price: "₹30,000",
        },
        {
          specs: ["8GB", "256GB", "5G"],
          originalPrice: "₹79,999",
          price: "₹32,000",
        },
      ],
    },
    {
      id: "galaxy-s23-plus",
      brand: "Samsung",
      name: "Galaxy S23+",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["8GB", "256GB", "5G"],
          originalPrice: "₹94,999",
          price: "₹38,000",
        },
        {
          specs: ["8GB", "512GB", "5G"],
          originalPrice: "₹1,04,999",
          price: "₹42,000",
        },
      ],
    },
    {
      id: "galaxy-s23-ultra",
      brand: "Samsung",
      name: "Galaxy S23 Ultra",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["8GB", "256GB", "5G"],
          originalPrice: "₹1,09,999",
          price: "₹44,000",
        },
        {
          specs: ["12GB", "512GB", "5G"],
          originalPrice: "₹1,19,999",
          price: "₹48,000",
        },
        {
          specs: ["12GB", "1TB", "5G"],
          originalPrice: "₹1,29,999",
          price: "₹52,000",
        },
      ],
    },
    {
      id: "galaxy-s24",
      brand: "Samsung",
      name: "Galaxy S24",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["8GB", "128GB", "AI"],
          originalPrice: "₹74,999",
          price: "₹30,000",
        },
        {
          specs: ["8GB", "256GB", "AI"],
          originalPrice: "₹79,999",
          price: "₹32,000",
        },
        {
          specs: ["8GB", "512GB", "AI"],
          originalPrice: "₹89,999",
          price: "₹36,000",
        },
      ],
    },
    {
      id: "galaxy-s24-plus",
      brand: "Samsung",
      name: "Galaxy S24+",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["12GB", "256GB", "AI"],
          originalPrice: "₹99,999",
          price: "₹40,000",
        },
        {
          specs: ["12GB", "512GB", "AI"],
          originalPrice: "₹1,09,999",
          price: "₹44,000",
        },
      ],
    },
    {
      id: "galaxy-s24-ultra",
      brand: "Samsung",
      name: "Galaxy S24 Ultra",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["12GB", "256GB", "AI"],
          originalPrice: "₹1,29,999",
          price: "₹52,000",
        },
        {
          specs: ["12GB", "512GB", "AI"],
          originalPrice: "₹1,39,999",
          price: "₹56,000",
        },
        {
          specs: ["12GB", "1TB", "AI"],
          originalPrice: "₹1,59,999",
          price: "₹64,000",
        },
      ],
    },
    {
      id: "galaxy-s25",
      brand: "Samsung",
      name: "Galaxy S25",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["12GB", "256GB", "AI"],
          originalPrice: "₹80,999",
          price: "₹32,000",
        },
        {
          specs: ["12GB", "512GB", "AI"],
          originalPrice: "₹92,999",
          price: "₹37,000",
        },
      ],
    },
    {
      id: "galaxy-s25-plus",
      brand: "Samsung",
      name: "Galaxy S25+",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["12GB", "256GB", "AI"],
          originalPrice: "₹99,999",
          price: "₹40,000",
        },
        {
          specs: ["12GB", "512GB", "AI"],
          originalPrice: "₹1,11,999",
          price: "₹44,000",
        },
      ],
    },
    {
      id: "galaxy-s25-ultra",
      brand: "Samsung",
      name: "Galaxy S25 Ultra",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["12GB", "256GB", "AI"],
          originalPrice: "₹1,29,999",
          price: "₹52,000",
        },
        {
          specs: ["12GB", "512GB", "AI"],
          originalPrice: "₹1,41,999",
          price: "₹56,000",
        },
        {
          specs: ["12GB", "1TB", "AI"],
          originalPrice: "₹1,65,999",
          price: "₹66,000",
        },
      ],
    },

    {
      id: "iphone-16",
      brand: "Apple",
      name: "iPhone 16",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["128GB", "A18", "5G"],
          originalPrice: "₹79,900",
          price: "₹31,960",
        },
        {
          specs: ["256GB", "A18", "5G"],
          originalPrice: "₹89,900",
          price: "₹35,960",
        },
        {
          specs: ["512GB", "A18", "5G"],
          originalPrice: "₹1,09,900",
          price: "₹43,960",
        },
      ],
    },

    {
      id: "iphone-16-pro",
      brand: "Apple",
      name: "iPhone 16 Pro",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["128GB", "A18 Pro", "Titanium"],
          originalPrice: "₹1,19,900",
          price: "₹47,960",
        },
        {
          specs: ["256GB", "A18 Pro", "Titanium"],
          originalPrice: "₹1,29,900",
          price: "₹51,960",
        },
        {
          specs: ["512GB", "A18 Pro", "Titanium"],
          originalPrice: "₹1,49,900",
          price: "₹59,960",
        },
        {
          specs: ["1TB", "A18 Pro", "Titanium"],
          originalPrice: "₹1,69,900",
          price: "₹67,960",
        },
      ],
    },
    {
      id: "iphone-16-pro-max",
      brand: "Apple",
      name: "iPhone 16 Pro Max",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["256GB", "A18 Pro", "Titanium"],
          originalPrice: "₹1,44,900",
          price: "₹57,960",
        },
        {
          specs: ["512GB", "A18 Pro", "Titanium"],
          originalPrice: "₹1,64,900",
          price: "₹65,960",
        },
        {
          specs: ["1TB", "A18 Pro", "Titanium"],
          originalPrice: "₹1,84,900",
          price: "₹73,960",
        },
      ],
    },
    {
      id: "iphone-14",
      brand: "Apple",
      name: "iPhone 14",
      image:
        "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["128GB", "A15", "5G"],
          originalPrice: "₹59,900",
          price: "₹23,960",
        },
        {
          specs: ["256GB", "A15", "5G"],
          originalPrice: "₹69,900",
          price: "₹27,960",
        },
        {
          specs: ["512GB", "A15", "5G"],
          originalPrice: "₹89,900",
          price: "₹35,960",
        },
      ],
    },
    {
      id: "iphone-14-plus",
      brand: "Apple",
      name: "iPhone 14 Plus",
      image:
        "https://images.unsplash.com/photo-1663499482523-1c0d8271c1ac?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["128GB", "A15", "5G"],
          originalPrice: "₹69,900",
          price: "₹27,960",
        },
        {
          specs: ["256GB", "A15", "5G"],
          originalPrice: "₹79,900",
          price: "₹31,960",
        },
        {
          specs: ["512GB", "A15", "5G"],
          originalPrice: "₹99,900",
          price: "₹39,960",
        },
      ],
    },
    {
      id: "iphone-14-pro",
      brand: "Apple",
      name: "iPhone 14 Pro",

      variants: [
        {
          specs: ["128GB", "A16 Pro", "5G"],
          originalPrice: "₹99,900",
          price: "₹39,960",
        },
        {
          specs: ["256GB", "A16 Pro", "5G"],
          originalPrice: "₹1,09,900",
          price: "₹43,960",
        },
        {
          specs: ["512GB", "A16 Pro", "5G"],
          originalPrice: "₹1,29,900",
          price: "₹51,960",
        },
        {
          specs: ["1TB", "A16 Pro", "5G"],
          originalPrice: "₹1,49,900",
          price: "₹59,960",
        },
      ],
    },
    {
      id: "iphone-14-pro-max",
      brand: "Apple",
      name: "iPhone 14 Pro Max",

      variants: [
        {
          specs: ["128GB", "A16 Pro", "5G"],
          originalPrice: "₹1,09,900",
          price: "₹43,960",
        },
        {
          specs: ["256GB", "A16 Pro", "5G"],
          originalPrice: "₹1,19,900",
          price: "₹47,960",
        },
        {
          specs: ["512GB", "A16 Pro", "5G"],
          originalPrice: "₹1,39,900",
          price: "₹55,960",
        },
        {
          specs: ["1TB", "A16 Pro", "5G"],
          originalPrice: "₹1,59,900",
          price: "₹63,960",
        },
      ],
    },
    // 📱 iPhone 15
    {
      id: "iphone-15",
      brand: "Apple",
      name: "iPhone 15",
      image:
        "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["128GB", "A16", "5G"],
          originalPrice: "₹69,900",
          price: "₹27,960",
        },
        {
          specs: ["256GB", "A16", "5G"],
          originalPrice: "₹79,900",
          price: "₹31,960",
        },
        {
          specs: ["512GB", "A16", "5G"],
          originalPrice: "₹99,900",
          price: "₹39,960",
        },
      ],
    },

    // 📱 iPhone 15 Plus
    {
      id: "iphone-15-plus",
      brand: "Apple",
      name: "iPhone 15 Plus",
      image:
        "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["128GB", "A16", "5G"],
          originalPrice: "₹79,900",
          price: "₹31,960",
        },
        {
          specs: ["256GB", "A16", "5G"],
          originalPrice: "₹89,900",
          price: "₹35,960",
        },
        {
          specs: ["512GB", "A16", "5G"],
          originalPrice: "₹1,09,900",
          price: "₹43,960",
        },
      ],
    },

    // 📱 iPhone 15 Pro
    {
      id: "iphone-15-pro",
      brand: "Apple",
      name: "iPhone 15 Pro",
      image:
        "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["128GB", "A17 Pro", "Titanium"],
          originalPrice: "₹1,34,900",
          price: "₹53,960",
        },
        {
          specs: ["256GB", "A17 Pro", "Titanium"],
          originalPrice: "₹1,44,900",
          price: "₹57,960",
        },
        {
          specs: ["512GB", "A17 Pro", "Titanium"],
          originalPrice: "₹1,64,900",
          price: "₹65,960",
        },
        {
          specs: ["1TB", "A17 Pro", "Titanium"],
          originalPrice: "₹1,84,900",
          price: "₹73,960",
        },
      ],
    },

    // 📱 iPhone 15 Pro Max
    {
      id: "iphone-15-pro-max",
      brand: "Apple",
      name: "iPhone 15 Pro Max",
      image:
        "https://images.unsplash.com/photo-1694530967538-b43e4bfea305?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["256GB", "A17 Pro", "Titanium"],
          originalPrice: "₹1,59,900",
          price: "₹63,960",
        },
        {
          specs: ["512GB", "A17 Pro", "Titanium"],
          originalPrice: "₹1,79,900",
          price: "₹71,960",
        },
        {
          specs: ["1TB", "A17 Pro", "Titanium"],
          originalPrice: "₹1,99,900",
          price: "₹79,960",
        },
      ],
    },

    {
      id: "iphone-17",
      brand: "Apple",
      name: "iPhone 17",
      variants: [
        {
          specs: ["256GB", "A19", "5G"],
          originalPrice: "₹82,900",
          price: "₹33,160",
        },
        {
          specs: ["512GB", "A19", "5G"],
          originalPrice: "₹1,02,900",
          price: "₹41,160",
        },
      ],
    },
    {
      id: "iphone-17-air",
      brand: "Apple",
      name: "iPhone 17 Air",
      variants: [
        {
          specs: ["256GB", "A19", "Ultra Thin"],
          originalPrice: "₹1,19,900",
          price: "₹47,960",
        },
        {
          specs: ["512GB", "A19", "Ultra Thin"],
          originalPrice: "₹1,39,900",
          price: "₹55,960",
        },
        {
          specs: ["1TB", "A19", "Ultra Thin"],
          originalPrice: "₹1,59,900",
          price: "₹63,960",
        },
      ],
    },
    {
      id: "iphone-17-pro",
      brand: "Apple",
      name: "iPhone 17 Pro",
      variants: [
        {
          specs: ["256GB", "A19 Pro", "Titanium"],
          originalPrice: "₹1,34,900",
          price: "₹53,960",
        },
        {
          specs: ["512GB", "A19 Pro", "Titanium"],
          originalPrice: "₹1,54,900",
          price: "₹61,960",
        },
        {
          specs: ["1TB", "A19 Pro", "Titanium"],
          originalPrice: "₹1,74,900",
          price: "₹69,960",
        },
      ],
    },
    {
      id: "iphone-17-pro-max",
      brand: "Apple",
      name: "iPhone 17 Pro Max",

      variants: [
        {
          specs: ["256GB", "A19 Pro", "Titanium"],
          originalPrice: "₹1,49,900",
          price: "₹59,960",
        },
        {
          specs: ["512GB", "A19 Pro", "Titanium"],
          originalPrice: "₹1,69,900",
          price: "₹67,960",
        },
        {
          specs: ["1TB", "A19 Pro", "Titanium"],
          originalPrice: "₹1,89,900",
          price: "₹75,960",
        },
        {
          specs: ["2TB", "A19 Pro", "Titanium"],
          originalPrice: "₹2,29,900",
          price: "₹91,960",
        },
      ],
    },
  ],

  wearables: [
    {
      id: "galaxy-watch8-classic",
      brand: "Samsung",
      name: "Galaxy Watch8 Classic",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch8-l320-sm-l320nzsains-547660098?$Q90_1920_1280_F_PNG$",//
      variants: [
        {
          specs: ["AMOLED", "GPS", "Health"],
          originalPrice: "₹31,900",
          price: "₹31,900",
        },
      ],
    },
    {
      id: "galaxy-watch7-44mm",
      brand: "Samsung",
      name: "Galaxy Watch7 44mm",
      image:
        "https://img.tatacliq.com/images/i19//658Wx734H/MP000000023468315_658Wx734H_202408291227301.jpeg",
      variants: [
        {
          specs: ["AMOLED", "GPS", "Fitness"],
          originalPrice: "₹16,499",
          price: "₹16,499",
        },
      ],
    },
    {
      id: "galaxy-watch6-classic",
      brand: "Samsung",
      name: "Galaxy Watch6 Classic 47mm",
      image:
        "https://m.media-amazon.com/images/I/71sRBqqrOpL.jpg",
      variants: [
        {
          specs: ["Rotating", "GPS", "47mm"],
          originalPrice: "₹14,499",
          price: "₹14,499",
        },
      ],
    },
    {
      id: "galaxy-watch8-standard",
      brand: "Samsung",
      name: "Galaxy Watch8 Standard",
      image:
        "https://images.samsung.com/in/galaxy-watch8/feature/galaxy-watch8-design-colors-silver-perspective.jpg?imbypass=true",
      variants: [
        {
          specs: ["AMOLED", "GPS", "Health"],
          originalPrice: "₹32,999",
          price: "₹32,999",
        },
      ],
    },
    {
      id: "titan-celestor-2",
      brand: "Titan",
      name: "Celestor 2.0 Smartwatch",
      image:
        "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=400&h=300&fit=crop",
      variants: [
        {
          specs: ["Hybrid", "GPS", "Indian"],
          originalPrice: "₹11,499",
          price: "₹11,499",
        },
      ],
    },
    {
      id: "moto-watch",
      brand: "Motorola",
      name: "Moto Watch",
      image:
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&h=300&fit=crop",
      variants: [
        {
          specs: ["AMOLED", "Fitness", "Budget"],
          originalPrice: "₹12,999",
          price: "₹12,999",
        },
      ],
    },
    {
      id: "amazfit-active-max",
      brand: "Amazfit",
      name: "Active Max Smartwatch",
      image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=300&fit=crop",
      variants: [
        {
          specs: ["AMOLED", "GPS", "Active"],
          originalPrice: "₹15,999",
          price: "₹15,999",
        },
      ],
    },
    {
      id: "amazfit-trex-3-pro",
      brand: "Amazfit",
      name: "T-Rex 3 Pro Smartwatch",
      image:
        "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400&h=300&fit=crop",
      variants: [
        {
          specs: ["Rugged", "GPS", "Pro"],
          originalPrice: "₹34,999",
          price: "₹34,999",
        },
      ],
    },
    {
      id: "apple-watch-series-10",
      brand: "Apple",
      name: "Apple Watch Series 10 GPS",
      image:
        "https://m.media-amazon.com/images/I/81kq5wkaqAL._AC_UF1000,1000_QL80_.jpg",
      variants: [
        {
          specs: ["GPS", "OLED", "watchOS"],
          originalPrice: "₹35,994",
          price: "₹35,994",
        },
      ],
    },
    {
      id: "pixel-watch-4",
      brand: "Google",
      name: "Pixel Watch 4",
      image:
        "https://images-cdn.ubuy.co.in/68b1920f44067f64cc072447-google-pixel-watch-4-41-mm-android.jpg",
      variants: [
        {
          specs: ["Wear OS", "GPS", "Fitbit"],
          originalPrice: "₹39,990",
          price: "₹39,990",
        },
      ],
    },
  ],

  audio: [
    {
      id: "galaxy-buds-3-pro",
      brand: "Samsung",
      name: "Galaxy Buds 3 Pro",
      image:
        "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["ANC", "360 Audio", "Premium"],
          originalPrice: "₹15,999",
          price: "₹15,999",
        },
      ],
    },

    {
      id: "marshall-motif-2",
      brand: "Marshall",
      name: "Motif II ANC TWS Earbuds",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["ANC", "Marshall", "Premium"],
          originalPrice: "₹18,999",
          price: "₹18,999",
        },
      ],
    },

    {
      id: "devialet-gemini-2",
      brand: "Devialet",
      name: "Gemini II TWS Earbuds",
      image:
        "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["Premium", "ANC", "HiFi"],
          originalPrice: "₹59,990",
          price: "₹59,990",
        },
      ],
    },

    {
      id: "airpods-max",
      brand: "Apple",
      name: "AirPods Max",
      image:
        "https://images.unsplash.com/photo-1625755216532-08b5b63dd097?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["ANC", "Spatial", "Premium"],
          originalPrice: "₹59,900",
          price: "₹59,900",
        },
      ],
    },

    {
      id: "galaxy-buds-live-3",
      brand: "Samsung",
      name: "Galaxy Buds Live 3",
      image:
        "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["ANC", "Bean", "Unique"],
          originalPrice: "₹18,999",
          price: "₹18,999",
        },
      ],
    },

    {
      id: "jbl-live-pro-3",
      brand: "JBL",
      name: "Live Pro 3 Earbuds",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",

      variants: [
        {
          specs: ["ANC", "JBL Sound", "TWS"],
          originalPrice: "₹12,999",
          price: "₹12,999",
        },
      ],
    },

    {
      id: "bose-qc-buds-2",
      brand: "Bose",
      name: "QuietComfort Buds II",

      variants: [
        {
          specs: ["Premium ANC", "Comfort", "Bose"],
          originalPrice: "₹21,999",
          price: "₹21,999",
        },
      ],
    },

    {
      id: "oneplus-buds-pro-2",
      brand: "OnePlus",
      name: "Buds Pro 2",

      variants: [
        {
          specs: ["ANC", "Premium", "OnePlus"],
          originalPrice: "₹13,999",
          price: "₹13,999",
        },
      ],
    },

    {
      id: "sony-wf-1000xm5",
      brand: "Sony",
      name: "WF-1000XM5 Earbuds",

      variants: [
        {
          specs: ["Best ANC", "LDAC", "Premium"],
          originalPrice: "₹18,499",
          price: "₹18,499",
        },
      ],
    },

    {
      id: "sony-wh-1000xm6",
      brand: "Sony",
      name: "WH-1000XM6 Headphones",

      variants: [
        {
          specs: ["Top ANC", "LDAC", "Premium"],
          originalPrice: "₹29,999",
          price: "₹29,999",
        },
      ],
    },

    {
      id: "bose-700",
      brand: "Bose",
      name: "Noise Cancelling 700",

      variants: [
        {
          specs: ["Premium ANC", "Bose", "Headphones"],
          originalPrice: "₹35,999",
          price: "₹35,999",
        },
      ],
    },

    {
      id: "airpods-pro-2",
      brand: "Apple",
      name: "AirPods Pro 2nd Gen",

      variants: [
        {
          specs: ["ANC", "Spatial", "USB-C"],
          originalPrice: "₹26,000",
          price: "₹26,000",
        },
      ],
    },

    {
      id: "sennheiser-momentum-3",
      brand: "Sennheiser",
      name: "Momentum TWS 3",

      variants: [
        {
          specs: ["Audiophile", "ANC", "Premium"],
          originalPrice: "₹18,499",
          price: "₹18,499",
        },
      ],
    },

    {
      id: "jbl-tour-pro-2",
      brand: "JBL",
      name: "Tour Pro 2 Earbuds",

      variants: [
        {
          specs: ["Smart Case", "ANC", "JBL"],
          originalPrice: "₹16,499",
          price: "₹16,499",
        },
      ],
    },

    {
      id: "beats-studio-pro",
      brand: "Beats",
      name: "Studio Pro Wireless",

      variants: [
        {
          specs: ["ANC", "40hr", "USB-C"],
          originalPrice: "₹25,999",
          price: "₹25,999",
        },
      ],
    },
  ],
};

const slugify = (str = "") =>
  str
    .toLowerCase()
    .replace(/"/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const parsePrice = (price) => {
  if (!price) return 0;
  return Number(price.replace(/[₹,]/g, ""));
};

// =======================================================
// 🔄 NORMALIZER
// =======================================================

function normalizeProducts(data) {
  const seenIds = new Set();
  const normalized = {};

  Object.entries(data).forEach(([category, items]) => {
    normalized[category] = items.map((item, index) => {
      // -------------------------------------------------
      // 🆔 PRODUCT ID
      // -------------------------------------------------
      let baseId = item.id || `${slugify(item.brand)}-${slugify(item.name)}`;

      // prevent duplicates
      let id = baseId;
      let counter = 1;

      while (seenIds.has(id)) {
        id = `${baseId}-${counter++}`;
      }

      seenIds.add(id);

      // -------------------------------------------------
      // 📦 VARIANTS NORMALIZATION
      // -------------------------------------------------

      let variants = [];

      if (item.variants?.length) {
        variants = item.variants.map((v, vIndex) => ({
          id: `${id}-v${vIndex}`,
          specs: v.specs || [],
          price: v.price,
          originalPrice: v.originalPrice,
          numericPrice: parsePrice(v.price),
          numericOriginalPrice: parsePrice(v.originalPrice),
        }));
      } else {
        variants = [
          {
            id: `${id}-v0`,
            specs: item.specs || [],
            price: item.price,
            originalPrice: item.originalPrice,
            numericPrice: parsePrice(item.price),
            numericOriginalPrice: parsePrice(item.originalPrice),
          },
        ];
      }

      // -------------------------------------------------
      // 💰 PRICE RANGE
      // -------------------------------------------------

      const prices = variants.map((v) => v.numericPrice);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      // -------------------------------------------------
      // 📦 FINAL PRODUCT OBJECT
      // -------------------------------------------------

      return {
        ...item,
        id,
        category,
        image: item.image || null,
        images: item.images || (item.image ? [item.image] : []),
        variants,
        minPrice,
        maxPrice,
      };
    });
  });

  return normalized;
}

// =======================================================
// ✅ EXPORTS
// =======================================================

export default productData;

// 👇 Use this for ecommerce logic
export const normalizedProductData = normalizeProducts(productData);

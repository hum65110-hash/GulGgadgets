const productData = {
  laptops: [
    // HP
    {
      id: "hp-15s-i5",
      brand: "HP",
      name: "HP 15s (Intel i5)",
      images: [
        "/images/hp1.avif",
        "https://m.media-amazon.com/images/I/719ITRJEaDL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81vqCUxNRML._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81vqCUxNRML._SL1500_.jpg"
      ],
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹64,999",
      price: "₹25,999",
    },
    {
      id: "hp-pavilion-14",
      brand: "HP",
      name: "HP Pavilion 14",
      images: [
        "/images/hp2.jpg",
        "https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/p/a/pavilion-plus-14-oski-silver-features.jpg",
        "https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c08679838_3.png"
      ],
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹74,999",
      price: "₹29,999",
    },
    {
      id: "hp-victus-gaming",
      brand: "HP",
      name: "HP Victus Gaming",
      images: [
        "/images/hp3.jpg",
        "https://m.media-amazon.com/images/I/71OJHGFz5JL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81SlhsSi7gL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81aRf+jDfdL._SL1500_.jpg"
      ],
      specs: ["16GB", "512GB", "RTX 3050"],
      originalPrice: "₹84,999",
      price: "₹33,999",
    },
    {
      id: "hp-omen-gaming",
      brand: "HP",
      name: "HP Omen Gaming",
      images: [
        "/images/hp4.webp",
        "https://m.media-amazon.com/images/I/81h29Y763iL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81h29Y763iL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81xIS4KuWsL._SL1500_.jpg"
      ],
      specs: ["16GB", "1TB", "RTX 4060"],
      originalPrice: "₹1,34,999",
      price: "₹53,999",
    },

    // Lenovo
    {
      id: "lenovo-ideapad-slim-3",
      brand: "Lenovo",
      name: "Lenovo IdeaPad Slim 3",
      images: [
        "/images/lenovo1.jpg",
        "https://m.media-amazon.com/images/I/61tNv3EDIAL._SL1080_.jpg",
        "https://m.media-amazon.com/images/I/61TMROdY2gL._SL1080_.jpg",
        "https://m.media-amazon.com/images/I/61b4V9f1PlL._SL1080_.jpg"
      ],
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹59,999",
      price: "₹23,999",
    },
    {
      id: "lenovo-ideapad-slim-5",
      brand: "Lenovo",
      name: "Lenovo IdeaPad Slim 5",
      images: [
        "/images/lenovo2.jpg",
        "https://m.media-amazon.com/images/I/61Uy6ZuOpSL._SL1080_.jpg",
        "https://m.media-amazon.com/images/I/6102Ep9jOaL._SL1080_.jpg",
        "https://m.media-amazon.com/images/I/61Alh3O3mdL._SL1080_.jpg"
      ],
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹74,999",
      price: "₹29,999",
    },
    {
      id: "lenovo-thinkpad-e14",
      brand: "Lenovo",
      name: "Lenovo ThinkPad E14",
      images: [ 
        "/images/lenovo3.jpg",
        "https://m.media-amazon.com/images/I/31kHtgfKnZL.jpg",
        "https://m.media-amazon.com/images/I/31h1CiTFZYL.jpg",
        "https://m.media-amazon.com/images/I/31h1CiTFZYL.jpg",
      ],
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹84,999",
      price: "₹33,999",
    },
    {
      id: "lenovo-loq-gaming",
      brand: "Lenovo",
      name: "Lenovo LOQ Gaming",
      images: [
        "/images/lenovo4.jpg",
        "https://m.media-amazon.com/images/I/51E7QcxKAJL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/71br1pV8EML._SL1080_.jpg",
        "https://m.media-amazon.com/images/I/61yGqG0I9RL._SL1080_.jpg"
      ],
      specs: ["16GB", "512GB", "RTX 4050"],
      originalPrice: "₹89,999",
      price: "₹35,999",
    },

    // Dell
    {
      id: "dell-inspiron-15",
      brand: "Dell",
      name: "Dell Inspiron 15",
      images: [ 
        "/images/dell1.avif",
        "https://m.media-amazon.com/images/I/81jNKE-eeYL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/6176uI640CL._SL1080_.jpg",
        "https://m.media-amazon.com/images/I/6176uI640CL._SL1080_.jpg"
      ],
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹69,999",
      price: "₹27,999",
    },
    {
      id: "dell-vostro-14",
      brand: "Dell",
      name: "Dell Vostro 14",
      images: [
        "/images/dell2.jpg",
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/14-3440/media-gallery/notebook-vostro-14-3440-nt-gy-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=664&qlt=100,1&resMode=sharp2&size=664,402&chrss=full",
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/14-3440/media-gallery/notebook-vostro-14-3440-nt-gy-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=664&qlt=100,1&resMode=sharp2&size=664,402&chrss=full",
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/14-3440/media-gallery/notebook-vostro-14-3440-nt-gy-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=512&qlt=100,1&resMode=sharp2&size=512,402&chrss=full"
      ],
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹64,999",
      price: "₹25,999",
    },
    {
      id: "dell-xps-13",
      brand: "Dell",
      name: "Dell XPS 13",
      images: [ 
        "/images/dell3.avif",
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9350/media-gallery/platinum/notebook-xps-13-9350-t-oled-sl-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=679&qlt=100,1&resMode=sharp2&size=679,402&chrss=full",
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9350/media-gallery/platinum/notebook-xps-13-9350-t-oled-sl-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=681&qlt=100,1&resMode=sharp2&size=681,402&chrss=full",
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9350/media-gallery/platinum/notebook-xps-13-9350-t-oled-sl-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=547&qlt=100,1&resMode=sharp2&size=547,402&chrss=full",
      ],
      specs: ["Intel i7", "16GB", "512GB"],
      originalPrice: "₹1,59,999",
      price: "₹63,999",
    },

    // ASUS
    {
      id: "asus-vivobook-15",
      brand: "ASUS",
      name: "ASUS Vivobook 15",
      images: [ 
        "/images/asus1.webp",
        "https://m.media-amazon.com/images/I/81CuUvGGwOL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81CuUvGGwOL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/91bOog4NSVL._SL1500_.jpg",
      ],
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹62,999",
      price: "₹25,199",
    },
    {
      id: "asus-vivobook-s14-oled",
      brand: "ASUS",
      name: "ASUS Vivobook S14 OLED",
      images: [
        "/images/asus2.jpg",
        "https://m.media-amazon.com/images/I/719wIJ+WNRL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81gtl-5QruL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/710iAwH5wiL._SL1500_.jpg",
      ],
      specs: ["OLED", "16GB", "512GB"],
      originalPrice: "₹84,999",
      price: "₹33,999",
    },
    {
      id: "asus-tuf-f15",
      brand: "ASUS",
      name: "ASUS TUF Gaming F15",
      images: [
        "/images/asus3.jpg",
        "https://m.media-amazon.com/images/I/8185UwG96cL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81H41Oi5iTL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81+0uYeNiDL._SL1500_.jpg"
      ],
      specs: ["16GB", "512GB", "RTX 3050"],
      originalPrice: "₹94,999",
      price: "₹37,999",
    },
    {
      id: "asus-rog-strix-g16",
      brand: "ASUS",
      name: "ASUS ROG Strix G16",
      images: [ 
        "/images/asus4.png",
        "https://m.media-amazon.com/images/I/81XNtKPd1CL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81XNtKPd1CL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81K6eA26GtL._SL1500_.jpg"
      ],
      specs: ["16GB", "1TB", "RTX 4060"],
      originalPrice: "₹1,59,999",
      price: "₹63,999",
    },

    // Acer
    {
      id: "acer-aspire-7",
      brand: "Acer",
      name: "Acer Aspire 7",
      images: [
        "/images/acer1.jpg",
        "https://static-ecapac.acer.com/media/catalog/product/a/s/aspire_7--core_5_3_un.34psi.00g.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500",
        "https://static-ecapac.acer.com/media/catalog/product/a/c/acer-aspire7-3050-f2_un.34psi.00g.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500",
        "https://static-ecapac.acer.com/media/catalog/product/a/c/acer-aspire7-3050-f3_un.34psi.00g.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500"
      ],
      specs: ["Intel i5", "16GB", "512GB"],
      originalPrice: "₹59,999",
      price: "₹23,999",
    },
    {
      id: "acer-nitro-v",
      brand: "Acer",
      name: "Acer Nitro V Gaming",
      images: [ 
        "/images/acer2.jpg",
        "https://m.media-amazon.com/images/I/91ks1QaRlLL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71CwIZcRbhL._SL1200_.jpg",
        "https://m.media-amazon.com/images/I/71CwIZcRbhL._SL1200_.jpg"
      ],
      specs: ["16GB", "512GB", "RTX 4050"],
      originalPrice: "₹84,999",
      price: "₹33,999",
    },

    // Samsung
    {
      id: "samsung-galaxy-book-4",
      brand: "Samsung",
      name: "Samsung Galaxy Book 4",
      images: [
        "/images/acer3.jpg",
        "https://m.media-amazon.com/images/I/61eZJqW4KKL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61Y7AXO2tVL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61PwigmYcNL._SL1500_.jpg"
      ],
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
      images: [
        "https://rukmini1.flixcart.com/image/1500/1500/ksqeky80/mobile/x/7/1/galaxy-z-fold3-5g-sm-f926bzgdinu-samsung-original-imag68q6hpdwmngw.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/ksqeky80/mobile/y/c/w/galaxy-z-fold3-5g-sm-f926bzgdinu-samsung-original-imag68q6zhn4ehzn.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/ksnjp8w0/mobile/g/u/r/galaxy-z-fold3-5g-sm-f926bzkdinu-samsung-original-imag662aygmrg2qg.jpeg?q=70"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/61cInRWmClL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71SftM0QYRL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61LSgKwsktL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61+s+yrWo-L._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/71XwXWxa6QL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61qVnohMTPL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71hZBfLK8oL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61ZqdMLZDaL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/61Hhrr0bFWL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61Hhrr0bFWL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71Gg-PaJi+L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71QvopDcKcL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/61Q1AgNSO3L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61gZ4ohtc-L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/711MEimNqmL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51x1H8+uBTL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/71f2I8cltBL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61xDJ80iKrL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71BdTQXrrQL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61aIL9DWLkL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/610PI9zfgxL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61KF+txeSVL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61Exokok7YL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61UpZWT9DHL._SL1500_.jpg",
      

      ],
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
      images: [
        "https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/614GLZ7wkyL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71hilJccpHL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61aJkCfp+jL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/51OsreWvSYL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/41DWXbGY0lL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51myCNRyf9L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/41fvBMd4eIL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/61b2aZ5II-L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71UhtHpN14L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71Ol9c7mCrL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71TUfQGaNgL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/61L+eT+cG+L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71Cs3U2XLaL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71RZc73DsSL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51pvElMua7L._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/71RnJXDexML._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61JW7tAxBML._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71Tas55dVKL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/6168dvBwOdL._SL1500_.jpg"
      ],
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
      images: [
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/8/9/y/-original-imagmg6gzymct4b6.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/y/d/c/-original-imagzm8p5vtrszrj.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/w/9/6/-original-imagmg6gvvh2z9av.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/p/n/h/-original-imagmg6gutzapawq.jpeg?q=70"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/71OXmy3NMCL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81ZPsNFlRsL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81ZPsNFlRsL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71QXh0C5KaL._SL1500_.jpg"
      ],
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
      images: [
       "https://m.media-amazon.com/images/I/21AOVlMqBOL.jpg",
       "https://m.media-amazon.com/images/I/51T-y47WRLL.jpg",
       "https://m.media-amazon.com/images/I/61hDW8GjSgL.jpg",
       "https://m.media-amazon.com/images/I/51joWDTxo+L.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/71j6POXc0uL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71BIup-4aBL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71BIup-4aBL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/512UoOCc3lL._SL1200_.jpg"
      ],

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
      images: [
        "https://m.media-amazon.com/images/I/71L4Bb3ebvL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71L4Bb3ebvL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71VNuwoQtxL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71VNuwoQtxL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/61p3FwE31-L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61tLhXIzMtL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61tLhXIzMtL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81aGUVkeY-L._SL1500_.jpg"
      ],
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
      images: [
       "https://m.media-amazon.com/images/I/613kTZdzxEL._SL1500_.jpg"
      ],
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
      images: [
       "https://m.media-amazon.com/images/I/41WyX+E04cL._SY300_SX300_QL70_FMwebp_.jpg",
       "https://m.media-amazon.com/images/I/71VNuwoQtxL._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/71AUJGsLFRL._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/71AUJGsLFRL._SL1500_.jpg"
      ],

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
      images: [
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/h/u/i/-original-imahgfmyczqxhtm2.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/j/o/f/-original-imahfvx3gfzzy2uk.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/m/g/x/-original-imahfvx3vtgphzga.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/b/k/1/-original-imahfvx3yzjcyufw.jpeg?q=70"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/61Ony8rgwEL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51njdfo0QXL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71qwUZC36YL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81oC53mwCPL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/61Ony8rgwEL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51njdfo0QXL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71qwUZC36YL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81oC53mwCPL._SL1500_.jpg"
      ],
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
      images: [
       "https://m.media-amazon.com/images/I/61B0+qQriPL._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/51tfF8TGyAL._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/71KdlxeM59L._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg"
      ],
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
     images: [
       "https://m.media-amazon.com/images/I/61B0+qQriPL._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/51tfF8TGyAL._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/71KdlxeM59L._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg"
      ],
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
      images: [
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/n/j/d/-original-imaghxemx2v9wyxa.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/s/p/d/-original-imaghxemhgfzjgja.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/h/r/e/-original-imaghxeeme2n7hy7.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/g/p/6/-original-imaghxem3utgrtyg.jpeg?q=70"
      ],
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
       images: [
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/n/j/d/-original-imaghxemx2v9wyxa.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/s/p/d/-original-imaghxemhgfzjgja.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/h/r/e/-original-imaghxeeme2n7hy7.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/g/p/6/-original-imaghxem3utgrtyg.jpeg?q=70"
      ],
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
      images: [
       "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/d/k/t/-original-imah4xe6cff8cejm.jpeg?q=70",
       "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
       "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/4/b/j/-original-imah4xe6hwmfyxdn.jpeg?q=70",
       "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/u/m/3/-original-imagtc5ffhbausfy.jpeg?q=70"
      ],
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
      images: [
       "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/d/k/t/-original-imah4xe6cff8cejm.jpeg?q=70",
       "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
       "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/4/b/j/-original-imah4xe6hwmfyxdn.jpeg?q=70",
       "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/u/m/3/-original-imagtc5ffhbausfy.jpeg?q=70"
      ],
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
      images: [
       "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/71LB1euow1L._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/71TSx9D2BVL._SL1500_.jpg"
      ],
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
      images: [
       "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/71LB1euow1L._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/71TSx9D2BVL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/617O+RkwdPL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/91T1qDc+uGL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/715MT7SzKiL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/716ITcuqXLL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/61Ce-6B6x+L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61izXOz7xLL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51mq9k3RAFL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71qmq2lXNuL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/618vU2qKXQL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/91JZmCrB9aL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71FKiQAdCKL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71FKiQAdCKL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/618vU2qKXQL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/91JZmCrB9aL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71FKiQAdCKL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71FKiQAdCKL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/71ke2BEdIhL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71ke2BEdIhL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71ke2BEdIhL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71hyYLmhK5L._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/71t+kVzovEL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/A1U1-jIwxJL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/A1zCZV272oL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/A1fA2J76GdL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/61YSRoRQzML._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71g5uUmn2bL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71g5uUmn2bL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71QhQfeoapL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/71QFjliR-ML._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71QFjliR-ML._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/714a26vSiDL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61Bb9hBUEDL._SL1500_.jpg"
      ],
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
      images: [
         "https://rukmini1.flixcart.com/image/1500/1500/ktyp8cw0/headphone/c/z/i/sm-r180nznainu-samsung-original-imag77fzwryhaybg.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/ktyp8cw0/headphone/l/q/n/sm-r180nznainu-samsung-original-imag77fzp7bbpguz.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/ktyp8cw0/headphone/w/g/n/sm-r180nznainu-samsung-original-imag77fznsqbnhzh.jpeg?q=70",
        "https://rukmini1.flixcart.com/image/1500/1500/ktyp8cw0/headphone/c/9/p/sm-r180nznainu-samsung-original-imag77fzkxfvzvgu.jpeg?q=70",
       
      ],
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
      images: [
        "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw88d23ea9/01.JBL_Live%20Buds%203_Product%20Image_Case%20Feature%202_Silver.png?sw=535&sh=535",
        "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw541afe01/02.JBL_Live%20Buds%203_Product%20Image_Hero_Silver.png?sw=535&sh=535",
        "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw7bbf947f/03.JBL_Live%20Buds%203_Product%20Image_Case%20Lifestyle_Silver.png?sw=535&sh=535",
        "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw50a8d3d2/04.JBL_Live%20Buds%203_Product%20Image_Earbuds_Silver.png?sw=535&sh=535"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/51qRS8hb-9L._SL1129_.jpg",
        "https://m.media-amazon.com/images/I/51JspPN5IQL._SL1152_.jpg",
        "https://m.media-amazon.com/images/I/414q9yvnPtL._SL1097_.jpg",
        "https://m.media-amazon.com/images/I/515CauvxugL._SL1090_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/31alUEdQqNL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/61mErLiIrFL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/41+XU3sr4XL._SL1080_.jpg",
        "https://m.media-amazon.com/images/I/51uJE37udXL._SL1252_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/61GJAFdM9pL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51lgV-3qMLL._SL1080_.jpg",
        "https://m.media-amazon.com/images/I/61BbQ-2SsmL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/91jGlvzP2ZL._SL1500_.jpg"
      ],
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
      images:[
        "https://m.media-amazon.com/images/I/61ddahpESML._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81sjq7kP3cL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81ZbWmi2JmL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81ZbWmi2JmL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/51ovuAC+fML._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61aMDnFIzJL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61spVc528hL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61Lb8R0fx3L._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/2110TEYPKnL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/61sRKTAfrhL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51emillNpWL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51+vJkbGtJL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/61gzuUoAngL._SL1280_.jpg",
        "https://m.media-amazon.com/images/I/91rx5dcY-8L._SL1500_.jpg"
      ],
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
      images:[
        "https://m.media-amazon.com/images/I/61YzT5m79RL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71pVchR-BXL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71N8YAjMXKL._SL1500_.jpg"
      ],
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
      images: [
        "https://m.media-amazon.com/images/I/51V8-16lsTL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51V8-16lsTL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/613IIRZyQyL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/613IIRZyQyL._SL1500_.jpg"
      ],
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
        images: item.image || null,
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

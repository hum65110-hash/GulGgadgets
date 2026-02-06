import ProductCard from "./ProductCard";
import productData from "../data/products";

export default function ProductGrid({ category = "laptops" }) {

  // =========================================================
  // 📦 GET PRODUCTS BY CATEGORY
  // =========================================================

  const products =
    productData[category] || productData.laptops;

  // =========================================================
  // 🧠 STORE CLICKED PRODUCT
  // =========================================================

  const handleProductClick = (product) => {

    // Create URL-friendly ID
    const productId = `${product.brand
      .toLowerCase()
      .replace(/\s+/g, "-")}-${product.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`;

    // Full product object for details page
    const productDetailsData = {
      id: productId,
      category,
      ...product,
      images: product.images || [product.image],
      inStock: true,
      qty: 1
    };

    // Store in localStorage
    localStorage.setItem(
      "selectedProduct",
      JSON.stringify(productDetailsData)
    );
  };

  // =========================================================
  // 🖥️ UI
  // =========================================================

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">

      {products.map((product, i) => (

        <ProductCard
          key={i}
          {...product}
          category={category}
          onClick={() =>
            handleProductClick(product)
          }
        />

      ))}

    </div>
  );
}

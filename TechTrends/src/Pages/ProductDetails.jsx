import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productData from "../components/data/products";

import Breadcrumbs from "../components/product/Breadcrumbs";
import ImageGallery from "../components/product/ImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import SpecsGrid from "../components/product/SpecsGrid";
import PurchaseOptions from "../components/product/PurchaseOptions";
import FrequentlyBought from "../components/product/FrequentlyBought";
import StickyBuyBar from "../components/product/StickyBuyBar";

/* ---------------- HELPERS ---------------- */

const getAllProducts = () => [
  ...productData.laptops,
  ...productData.smartphones,
  ...productData.wearables,
  ...productData.audio,
];

const getProductById = (id) =>
  getAllProducts().find((p) => p.id === id);

const getStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) || [];

const saveStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

/* ---------------- COMPONENT ---------------- */

export default function ProductDetails() {
  const { productId } = useParams();

  const storedId =
    productId ||
    localStorage.getItem("selectedProductId");

  const product = getProductById(storedId);

  /* ---------- VARIANT STATE ---------- */

  const [variantIndex, setVariantIndex] =
    useState(0);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "selectedVariantIndex"
      );

    if (saved) setVariantIndex(parseInt(saved));
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Product not found.
      </div>
    );
  }

  /* ---------- NORMALIZE PRODUCT ---------- */

  const hasVariants =
    product.variants?.length > 0;

  const activeVariant = hasVariants
    ? product.variants[variantIndex]
    : null;

  const price = hasVariants
    ? activeVariant.price
    : product.price;

  const originalPrice = hasVariants
    ? activeVariant.originalPrice
    : product.originalPrice;

  const specs = hasVariants
    ? activeVariant.specs
    : product.specs || [];

  const images =
    product.images ||
    (product.image ? [product.image] : []);

  /* ---------- CART ---------- */

  const addToCart = () => {
    let cart = getStorage("cart");

    const existing = cart.find(
      (item) =>
        item.id === product.id &&
        item.variantIndex === variantIndex
    );

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        variantIndex,
        qty: 1,
      });
    }

    saveStorage("cart", cart);
    window.dispatchEvent(
      new Event("cartUpdated")
    );

    alert("Added to Cart 🛒");
  };

  /* ---------- WISHLIST ---------- */

  const addToWishlist = () => {
    let wishlist = getStorage("wishlist");

    const exists = wishlist.find(
      (item) => item.id === product.id
    );

    if (!exists) {
      wishlist.push({ id: product.id });
      saveStorage("wishlist", wishlist);
      alert("Added to Wishlist ❤️");
    } else {
      alert("Already in Wishlist");
    }
  };

  /* ---------- UI ---------- */

  return (
    <div className="bg-background-dark min-h-screen">
      <div className="max-w-[1440px] mx-auto">

        <Breadcrumbs
          category={product.category || "Product"}
          productName={product.name}
        />

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-4 lg:px-40 py-6">

          {/* IMAGE GALLERY */}
          <div className="lg:col-span-7">
            <ImageGallery images={images} />
          </div>

          {/* PRODUCT INFO */}
          <div className="lg:col-span-5 space-y-8">

            <ProductInfo
              onVariantChange={(i) =>
                setVariantIndex(i)
              }
            />

            <SpecsGrid
              specs={specs.map((s, i) => ({
                icon: "memory",
                label: `Spec ${i + 1}`,
                value: s,
              }))}
            />

            <PurchaseOptions
              onAddToCart={addToCart}
              onAddToWishlist={
                addToWishlist
              }
            />

          </div>
        </section>
      </div>

      <FrequentlyBought />

      <StickyBuyBar
        name={product.name}
        price={price}
        onAddToCart={addToCart}
      />
    </div>
  );
}

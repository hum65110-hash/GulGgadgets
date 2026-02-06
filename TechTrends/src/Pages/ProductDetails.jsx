import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { normalizedProductData } from "../components/data/products";

import toast from "react-hot-toast";



import Breadcrumbs from "../components/product/Breadcrumbs";
import ImageGallery from "../components/product/ImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import SpecsGrid from "../components/product/SpecsGrid";
import PurchaseOptions from "../components/product/PurchaseOptions";
import FrequentlyBought from "../components/product/FrequentlyBought";
import StickyBuyBar from "../components/product/StickyBuyBar";
import { getWishlist, saveWishlist } from "../components/utils/storage";

/* ---------------- HELPERS ---------------- */

const getAllProducts = () =>
  Object.values(normalizedProductData).flat();

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
const variant = product.variants[variantIndex];

const addToCart = () => {
  const cart = getCart();

  const existing = cart.find(
    (i) =>
      i.productId === product.id &&
      i.variantId === variant.id
  );

  if (existing) existing.qty += 1;
  else {
    cart.push({
      productId: product.id,
      variantId: variant.id,
      category: product.category,
      name: product.name,
      brand: product.brand,
      image: product.image,
      specs: variant.specs,
      price: variant.price,
      numericPrice: variant.numericPrice,
      qty: 1,
    });
  }

  saveCart(cart);
  toast.success("Added to cart");

};


  /* ---------- WISHLIST ---------- */
const addToWishlist = () => {
  let wishlist = getWishlist();

  const exists = wishlist.some(
    (w) =>
      w.productId === product.id &&
      w.variantId === variant.id
  );

  if (!exists) {
    wishlist.push({
      productId: product.id,
      variantId: variant.id,
      category: product.category,
      name: product.name,
      brand: product.brand,
      image: product.image,
      specs: variant.specs,
      price: variant.price,
      numericPrice: variant.numericPrice,
    });
  }

  saveWishlist(wishlist);
  toast.success("Added to Wishlist");
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

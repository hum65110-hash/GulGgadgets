import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCart, saveCart } from "../components/utils/storage";
import { normalizedProductData } from "../components/data/products";
import toast from "react-hot-toast";

export default function Home() {
  const addToCart = (product) => {
    const cart = getCart();

    // Use first variant for featured grid
    const variant = product.variants?.[0];

    if (!variant) return;

    const existing = cart.find(
      (item) => item.productId === product.id && item.variantId === variant.id,
    );

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        productId: product.id,
        variantId: variant.id,
        category: product.category,
        name: product.name,
        brand: product.brand,
        image: product.image || product.images?.[0],
        specs: variant.specs,
        price: variant.price,
        numericPrice: variant.numericPrice,
        qty: 1,
      });
    }

    saveCart(cart);

    // 🔔 Notify entire app
    window.dispatchEvent(new Event("cartUpdated"));

    toast.success(`${product.name} added to cart`);
  };

  const allProducts = Object.values(normalizedProductData).flat();

  // 👉 Pick featured products (first 10 for now)
  const featuredProducts = allProducts.slice(0, 10);

  return (
    <main className="bg-background-dark min-h-screen text-white font-display">
      <section className="px-4 md:px-10 lg:px-40 py-10 flex justify-center">
        <div className="max-w-[1280px] w-full space-y-20">
          {/* HERO */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                ● NEW RELEASE
              </span>

              <h1 className="text-4xl md:text-6xl font-black text-white">
                Power Up Your Digital Life{" "} <br />
                <span className="bg-clip-text text-3xl text-transparent bg-gradient-to-r from-primary to-blue-600">
                  All Gadgets. One Destination.
                </span>
              </h1>

              <p className="text-text-secondary max-w-xl">
                From flagship phones to pro-grade laptops, discover tech that
                keeps up with you.
              </p>

              <div className="flex gap-4">
                {/* Buy Now → Categories */}
                <Link
                  to="/categories"
                  className="bg-primary px-6 h-12 rounded-lg font-bold text-background-dark hover:bg-opacity-90 transition flex items-center justify-center"
                >
                  Buy Now
                </Link>

                {/* Learn More → About Us */}
                <Link
                  to="/about"
                  className="border border-border-dark px-6 h-12 rounded-lg text-white hover:border-primary transition flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div
              className="aspect-[4/3] rounded-2xl bg-cover bg-center transition"
              style={{
                backgroundImage: "url(/hero.jpg)",
              }}
            />
          </div>

          {/* TOP CATEGORIES */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Top Categories
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["smartphone", "Smartphones"],
                ["headphones", "Audio"],
                ["watch", "Wearables"],
                ["laptop_mac", "Laptops"],
              ].map(([icon, title]) => (
                <div
                  key={title}
                  className="bg-surface-dark p-6 border border-border-dark rounded-xl hover:border-primary hover:shadow-glow transition group cursor-pointer"
                >
                  <span className="material-symbols-outlined text-3xl mb-4 block text-primary group-hover:text-blue-400 transition">
                    {icon}
                  </span>
                  <h3 className="font-bold text-white">{title}</h3>
                </div>
              ))}
            </div>
          </section>
          {/* Featured Products */}
          <section className="py-12">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Featured Gadgets
                </h2>
                <p className="text-gray-400 text-sm">Hot deals on top tech</p>
              </div>

              <a
                href="/categories"
                className="text-primary hover:text-blue-400 flex items-center gap-1 font-medium transition"
              >
                View All
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {featuredProducts.map((product) => {
                // 👉 Use first variant as default
                const variant = product.variants?.[0];

                const price = variant?.numericPrice || 0;

                const oldPrice = variant?.numericOriginalPrice || 0;

                const discount = oldPrice
                  ? Math.round(((oldPrice - price) / oldPrice) * 100)
                  : 0;

                return (
                  <div
                    key={product.id}
                    className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:border-primary transition group"
                  >
                    {/* Image Wrapper */}
                    <div className="relative overflow-hidden">
                      {/* Discount */}
                      {discount > 0 && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-[11px] font-bold px-2 py-1 rounded-md z-10">
                          -{discount}%
                        </span>
                      )}

                      {/* Wishlist */}
                      <button className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full z-10 hover:bg-primary transition">
                        <span className="material-symbols-outlined text-white text-sm">
                          favorite
                        </span>
                      </button>

                      {/* Product Image */}
                      <div className="relative h-40">
                        <img
                          src={product.image || product.images?.[0]}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 space-y-1.5">
                      <h3 className="text-sm text-white font-medium line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="text-xs text-gray-400">{product.brand}</p>

                      {/* Price */}
                      <div className="flex items-center gap-2">
                        <span className="text-primary font-bold">
                          ₹{price.toLocaleString()}
                        </span>

                        {oldPrice > 0 && (
                          <span className="text-gray-400 line-through text-xs">
                            ₹{oldPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Cart */}
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full mt-2 bg-primary/10 hover:bg-primary text-primary hover:text-background-dark text-xs py-1.5 rounded-md transition flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-sm">
                          shopping_cart
                        </span>
                        Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="bg-surface-dark border border-border-dark rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "local_shipping",
                  title: "Free Shipping",
                  description: "On all orders over $100",
                },
                {
                  icon: "verified_user",
                  title: "Secure Payment",
                  description: "100% secure transactions",
                },
                {
                  icon: "support_agent",
                  title: "24/7 Support",
                  description: "Dedicated customer service",
                },
              ].map((feature) => (
                <div key={feature.title} className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl text-primary">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-white">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* PROMOTIONAL BANNER */}
          <section className="relative rounded-2xl overflow-hidden h-64 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=400&fit=crop)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 to-transparent" />
            <div className="relative z-10 text-center md:text-left md:ml-12 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Holiday Sale
              </h2>
              <p className="text-xl text-text-secondary">
                Up to <span className="text-primary font-bold">40% OFF</span> on
                selected items
              </p>
              <button className="bg-primary px-8 h-12 rounded-lg font-bold text-background-dark hover:bg-opacity-90 transition">
                Shop Now
              </button>
            </div>
          </section>

          {/* BRANDS */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Top Brands
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Apple", "Samsung", "Sony", "Microsoft"].map((brand) => (
                <div
                  key={brand}
                  className="bg-surface-dark border border-border-dark rounded-xl p-8 flex items-center justify-center hover:border-primary transition cursor-pointer group"
                >
                  <span className="text-2xl font-bold text-text-secondary group-hover:text-white transition">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* NEWSLETTER */}
          <section className="bg-gradient-to-r from-primary/10 to-blue-600/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-3 text-white">Stay Updated</h2>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for exclusive deals and product
              launches
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 h-12 rounded-lg bg-surface-dark border border-border-dark text-white placeholder:text-text-secondary focus:outline-none focus:border-primary transition"
              />
              <button className="bg-primary px-8 h-12 rounded-lg font-bold text-background-dark hover:bg-opacity-90 transition">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

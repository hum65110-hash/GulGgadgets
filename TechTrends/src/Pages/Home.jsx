export default function Home() {
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
                Experience the{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                  iPhone 15 Pro
                </span>
              </h1>

              <p className="text-text-secondary max-w-xl">
                Titanium design. A17 Pro chip. The most powerful iPhone ever.
              </p>

              <div className="flex gap-4">
                <button className="bg-primary px-6 h-12 rounded-lg font-bold text-background-dark hover:bg-opacity-90 transition">
                  Buy Now
                </button>
                <button className="border border-border-dark px-6 h-12 rounded-lg text-white hover:border-primary transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div
              className="aspect-[4/3] rounded-2xl bg-cover bg-center hover:scale-105 transition"
              style={{
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBEgwvrJEQ35QdsJt0F19F3hbxpBe5acFz43x0Zmp95ypP9Ga_15TRoD_fdM0l1R2CvYt5h6S-vSAcPw4jHMgf7syY6a7pMbO_3DzxkWBOJxrh6aQIKe9x0dmgKKdQ2sCgC3rYugQrlsYZNpSrRIoyPnEdaBmwo20iyBTo8QxZgIPB-PhExBbk6v7y4FNe6mr5Zfi9e21r_RdzAKeZkl2pI9LsNE9XVCpS6Cn4CkadlrJN2j16qMaroSANKVbwVB01falEHo_moUFFH)",
              }}
            />
          </div>

          {/* TOP CATEGORIES */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">Top Categories</h2>

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

{/* FEATURED PRODUCTS */}
<section className="py-12">

  {/* Header */}
  <div className="flex justify-between items-center mb-8">
    <div>
      <h2 className="text-3xl font-bold text-white">Featured Gadgets</h2>
      <p className="text-gray-400 text-sm">
        Hot deals on top tech
      </p>
    </div>

    <a
      href="#"
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

    {[
      {
        name: "MacBook Pro 16\"",
        price: 2499,
        oldPrice: 2799,
        img1: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
        img2: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      },
      {
        name: "AirPods Pro",
        price: 249,
        oldPrice: 299,
        img1: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
        img2: "https://images.unsplash.com/photo-1588159343745-445ae0b16383?w=500",
      },
      {
        name: "Apple Watch Ultra",
        price: 799,
        oldPrice: 899,
        img1: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
        img2: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500",
      },
      {
        name: "iPhone 15 Pro",
        price: 1199,
        oldPrice: 1299,
        img1: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
        img2: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      },
      {
        name: "Sony WH-1000XM5",
        price: 399,
        oldPrice: 499,
        img1: "https://images.unsplash.com/photo-1651055942274-1f7d7d4e7c4a?w=500",
        img2: "https://images.unsplash.com/photo-1518441902110-1b7bcbcb8fcb?w=500",
      },
      {
        name: "iPad Pro M2",
        price: 999,
        oldPrice: 1099,
        img1: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        img2: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500",
      },
      {
        name: "Logitech MX Master 3",
        price: 99,
        oldPrice: 129,
        img1: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        img2: "https://images.unsplash.com/photo-1613145997970-db84a7975fbb?w=500",
      },
      {
        name: "Samsung Odyssey G7",
        price: 699,
        oldPrice: 799,
        img1: "https://images.unsplash.com/photo-1616587896595-1c1c7a0e317e?w=500",
        img2: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=500",
      },
      {
        name: "GoPro Hero 12",
        price: 399,
        oldPrice: 449,
        img1: "https://images.unsplash.com/photo-1519183071298-a2962eadc1d1?w=500",
        img2: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
      },
      {
        name: "Nintendo Switch OLED",
        price: 349,
        oldPrice: 399,
        img1: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500",
        img2: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=500",
      },
    ].map((p) => {
      const discount = Math.round(
        ((p.oldPrice - p.price) / p.oldPrice) * 100
      );

      return (
        <div
          key={p.name}
          className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:border-primary transition group"
        >
          {/* Image Wrapper */}
          <div className="relative overflow-hidden">

            {/* Discount Ribbon */}
            <span className="absolute top-2 left-2 bg-red-500 text-white text-[11px] font-bold px-2 py-1 rounded-md z-10">
              -{discount}%
            </span>

            {/* Wishlist */}
            <button className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full z-10 hover:bg-primary transition">
              <span className="material-symbols-outlined text-white text-sm">
                favorite
              </span>
            </button>

            {/* Hover Swap Images */}
            <div className="relative h-40">
              <img
                src={p.img1}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:opacity-0"
              />
              <img
                src={p.img2}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-3 space-y-1.5">

            <h3 className="text-sm text-white font-medium line-clamp-1">
              {p.name}
            </h3>

            {/* Price Row */}
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">
                ${p.price}
              </span>
              <span className="text-gray-400 line-through text-xs">
                ${p.oldPrice}
              </span>
            </div>

            {/* Cart Button */}
            <button className="w-full mt-2 bg-primary/10 hover:bg-primary text-primary hover:text-background-dark text-xs py-1.5 rounded-md transition flex items-center justify-center gap-1">
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
            <h2 className="text-3xl font-bold mb-10 text-center text-white">Why Choose Us</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "local_shipping",
                  title: "Free Shipping",
                  description: "On all orders over $100"
                },
                {
                  icon: "verified_user",
                  title: "Secure Payment",
                  description: "100% secure transactions"
                },
                {
                  icon: "support_agent",
                  title: "24/7 Support",
                  description: "Dedicated customer service"
                }
              ].map((feature) => (
                <div key={feature.title} className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl text-primary">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-white">{feature.title}</h3>
                  <p className="text-text-secondary text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROMOTIONAL BANNER */}
          <section className="relative rounded-2xl overflow-hidden h-64 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=400&fit=crop)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 to-transparent" />
            <div className="relative z-10 text-center md:text-left md:ml-12 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Holiday Sale
              </h2>
              <p className="text-xl text-text-secondary">
                Up to <span className="text-primary font-bold">40% OFF</span> on selected items
              </p>
              <button className="bg-primary px-8 h-12 rounded-lg font-bold text-background-dark hover:bg-opacity-90 transition">
                Shop Now
              </button>
            </div>
          </section>

          {/* BRANDS */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Top Brands</h2>

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
              Subscribe to our newsletter for exclusive deals and product launches
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
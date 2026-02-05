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

              <h1 className="text-4xl md:text-6xl font-black">
                Experience the{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                  iPhone 15 Pro
                </span>
              </h1>

              <p className="text-slate-400 max-w-xl">
                Titanium design. A17 Pro chip. The most powerful iPhone ever.
              </p>

              <div className="flex gap-4">
                <button className="bg-primary px-6 h-12 rounded-lg font-bold text-background-dark hover:bg-opacity-90">
                  Buy Now
                </button>
                <button className="border border-border-dark px-6 h-12 rounded-lg hover:border-primary">
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
            <h2 className="text-3xl font-bold mb-6">Top Categories</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["smartphone", "Smartphones"],
                ["headphones", "Audio"],
                ["watch", "Wearables"],
                ["laptop_mac", "Laptops"],
              ].map(([icon, title]) => (
                <div
                  key={title}
                  className="bg-surface-dark p-6 border border-border-dark rounded-xl hover:border-primary hover:shadow-glow transition group"
                >
                  <span className="material-symbols-outlined text-3xl mb-4 block group-hover:text-primary">
                    {icon}
                  </span>
                  <h3 className="font-bold">{title}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

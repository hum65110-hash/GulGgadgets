export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-background-dark/80 backdrop-blur-md">
      <div className="px-4 md:px-10 lg:px-40 flex justify-center">
        <div className="max-w-[1280px] w-full flex items-center justify-between py-3">

          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-white">
              <div className="size-8 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">
                  bolt
                </span>
              </div>
              <h2 className="text-xl font-bold tracking-tight">
                GulfGadgets
              </h2>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {["Smartphones", "Audio", "Wearables", "Laptops", "Support"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-slate-300 hover:text-primary transition text-sm font-medium"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="hidden md:flex h-10 border border-border-dark rounded-lg bg-surface-dark/50">
              <div className="flex items-center px-3 text-[#90bccb]">
                <span className="material-symbols-outlined text-[20px]">
                  search
                </span>
              </div>
              <input
                placeholder="Search gadgets..."
                className="bg-transparent border-none focus:ring-0 text-white text-sm px-2"
              />
            </div>

            {/* Icons */}
            <button className="size-10 bg-surface-dark rounded-lg hover:bg-border-dark flex items-center justify-center">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>

            <button className="hidden sm:flex size-10 bg-surface-dark rounded-lg hover:bg-border-dark items-center justify-center">
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

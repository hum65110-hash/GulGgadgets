export default function WishlistHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-dark pb-6">

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl font-black tracking-[-0.033em]">
          My Wishlist
        </h1>
        <p className="text-[#92b2c9]">
          5 items saved for later
        </p>
      </div>

      <div className="flex gap-3">

        <button className="text-[#92b2c9] hover:text-white text-sm font-medium flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">
            delete
          </span>
          Clear All
        </button>

        <button className="text-primary hover:text-blue-400 text-sm font-medium flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">
            share
          </span>
          Share List
        </button>

      </div>

    </div>
  );
}

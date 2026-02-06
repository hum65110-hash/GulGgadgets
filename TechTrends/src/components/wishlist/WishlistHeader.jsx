import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getWishlist, saveWishlist } from "../utils/storage";

export default function WishlistHeader() {

  const [count, setCount] = useState(0);

  // ---------------- LOAD COUNT ----------------

  const loadCount = () => {
    const wishlist = getWishlist();
    setCount(wishlist.length);
  };

  useEffect(() => {
    loadCount();

    window.addEventListener("wishlistUpdated", loadCount);
    window.addEventListener("storage", loadCount);

    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        loadCount
      );
      window.removeEventListener(
        "storage",
        loadCount
      );
    };
  }, []);

  // ---------------- CLEAR ALL ----------------

  const clearAll = () => {
    saveWishlist([]);
    toast.success("Wishlist cleared");
  };

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-dark pb-6">

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-[-0.033em]">
          My Wishlist
        </h1>

        <p className="text-[#92b2c9]">
          {count} item{count !== 1 && "s"} saved for later
        </p>
      </div>

      <div className="flex gap-3">

        <button
          onClick={clearAll}
          disabled={!count}
          className="text-[#92b2c9] hover:text-white text-sm font-medium flex items-center gap-2 disabled:opacity-40"
        >
          <span className="material-symbols-outlined text-[18px]">
            delete
          </span>
          Clear All
        </button>

      </div>

    </div>
  );
}

import { useEffect, useState } from "react";
import WishlistCard from "./WishlistCard";
import { getWishlist } from "../utils/storage";

export default function WishlistGrid() {
  const [items, setItems] = useState([]);

  const loadWishlist = () => {
    setItems(getWishlist());
  };

  useEffect(() => {
    loadWishlist();

    window.addEventListener(
      "wishlistUpdated",
      loadWishlist
    );
    window.addEventListener("storage", loadWishlist);

    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        loadWishlist
      );
      window.removeEventListener(
        "storage",
        loadWishlist
      );
    };
  }, []);

  if (!items.length) {
    return (
      <div className="h-64 flex items-center justify-center text-text-muted-light border border-dashed rounded-xl">
        No items in wishlist yet ❤️
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <WishlistCard
          key={`${item.productId}-${item.variantId}`}
          item={item}
        />
      ))}
    </div>
  );
}

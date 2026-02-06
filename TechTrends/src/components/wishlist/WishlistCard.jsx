import {
  getWishlist,
  saveWishlist,
  getCart,
  saveCart,
} from "../utils/storage";



export default function WishlistCard({ item }) {
  const isOut = item.status === "out";
  const isLow = item.status === "low";
  const handleRemove = () => {
    const updated = getWishlist().filter(
      (w) =>
        !(
          w.productId === item.productId &&
          w.variantId === item.variantId
        )
    );

    saveWishlist(updated);
  };

  const handleAddToCart = () => {
    const cart = getCart();

    const existing = cart.find(
      (c) =>
        c.productId === item.productId &&
        c.variantId === item.variantId
    );

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...item, qty: 1 });
    }

    saveCart(cart);
  };
  return (
    <div
      className={`group relative flex flex-col bg-card-dark rounded-xl overflow-hidden border border-border-dark transition-all duration-300
      ${isOut
          ? "opacity-75 hover:opacity-100 hover:border-red-500/30"
          : "hover:border-primary/50"
        }`}
    >

      {/* Remove */}
      <button onClick={handleRemove} className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-red-500/80">
        <span className="material-symbols-outlined text-[20px]">
          close
        </span>
      </button>

      {/* Image */}
      <div
        className={`aspect-[4/3] w-full bg-[#101a22] relative overflow-hidden ${isOut ? "grayscale" : ""
          }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent opacity-60" />

        {isOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="px-3 py-1 bg-red-500/20 text-red-500 border border-red-500/50 rounded-full text-xs font-bold">
              Sold Out
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">

        <div>
          <h3 className="text-lg text-white font-bold line-clamp-1">
            {item.name}
          </h3>
          <p className="text-[#92b2c9] text-sm">
            {item.subtitle}
          </p>
        </div>

        {/* Status */}
        {!isOut && (
          <div className="flex items-center gap-2">

            <span
              className={`material-symbols-outlined text-[18px] ${isLow ? "text-orange-400" : "text-primary"
                }`}
            >
              {isLow ? "warning" : "check_circle"}
            </span>

            <span
              className={`text-xs font-bold uppercase tracking-wider ${isLow ? "text-orange-400" : "text-primary"
                }`}
            >
              {isLow ? "Low Stock" : "In Stock"}
            </span>

          </div>
        )}

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">

          <span className="text-xl text-white font-bold">
            ${item.price}
          </span>

          {isOut ? (
            <button
              disabled
              className="flex items-center gap-2 bg-[#233948] text-[#92b2c9] px-4 py-2 rounded-lg text-sm font-bold cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[18px]">
                notifications
              </span>
              Notify
            </button>
          ) : (
            <button onClick={handleAddToCart} className="flex items-center gap-2 bg-primary hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-bold">
              <span className="material-symbols-outlined text-[18px]">
                add_shopping_cart
              </span>
              Add
            </button>
          )}

        </div>

      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { getCart, saveCart } from "../utils/storage";

export default function CartItem({
  productId,
  variantId,
  name,
  brand,
  image,
  specs = [],   // ✅ default fallback
  price,
  qty: initialQty,
}) {

  const [qty, setQty] = useState(initialQty);

  // ---------------- LOAD ----------------

  const reload = () => {
    const cart = getCart();

    const item = cart.find(
      (i) =>
        i.productId === productId &&
        i.variantId === variantId
    );

    if (item) setQty(item.qty);
  };

  // ---------------- UPDATE QTY ----------------

  const updateQty = (newQty) => {
    const cart = getCart();

    const idx = cart.findIndex(
      (i) =>
        i.productId === productId &&
        i.variantId === variantId
    );

    if (idx !== -1) {
      cart[idx].qty = newQty;
      saveCart(cart);
      setQty(newQty);

      window.dispatchEvent(
        new Event("cartUpdated")
      );
    }
  };

  const increaseQty = () => updateQty(qty + 1);

  const decreaseQty = () => {
    if (qty > 1) updateQty(qty - 1);
  };

  // ---------------- REMOVE ----------------

  const removeItem = () => {
    const updated = getCart().filter(
      (i) =>
        !(
          i.productId === productId &&
          i.variantId === variantId
        )
    );

    saveCart(updated);

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  // ---------------- SYNC ----------------

  useEffect(() => {
    reload();

    window.addEventListener("cartUpdated", reload);
    window.addEventListener("storage", reload);

    return () => {
      window.removeEventListener("cartUpdated", reload);
      window.removeEventListener("storage", reload);
    };
  }, []);

  // ---------------- SAFE SPECS ----------------

  const safeSpecs = Array.isArray(specs)
    ? specs
    : [];

  // ---------------- UI ----------------

  return (
    <div className="group flex flex-col sm:flex-row gap-6 bg-white dark:bg-[#15232d] p-5 rounded-xl border border-gray-100 dark:border-[#233948]/50 shadow-sm hover:border-primary/30 transition">

      {/* IMAGE */}
      <div className="shrink-0 rounded-lg aspect-square size-24 sm:size-32 bg-surface-dark overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col justify-between">

        <div className="flex justify-between">

          <div>
            <h3 className="text-lg text-white font-bold">
              {name}
            </h3>

            <p className="text-text-muted-light text-sm">
              {brand}{" "}
              {safeSpecs.length > 0 &&
                `| ${safeSpecs.join(" | ")}`}
            </p>
          </div>

          <button
            onClick={removeItem}
            className="text-text-muted-light hover:text-primary"
          >
            <span className="material-symbols-outlined">
              delete
            </span>
          </button>

        </div>

        <div className="flex flex-wrap justify-between items-end gap-4 mt-4">

          {/* Quantity */}
          <div className="flex items-center gap-3 bg-gray-50 dark:bg-[#111b22] rounded-lg p-1 border border-gray-200 dark:border-[#233948]">

            <button
              onClick={decreaseQty}
              className="size-8 rounded-md bg-white dark:bg-[#233948] hover:bg-gray-100"
            >
              <span className="material-symbols-outlined text-sm">
                remove
              </span>
            </button>

            <input
              readOnly
              value={qty}
              className="w-8 text-white bg-transparent text-center font-medium"
            />

            <button
              onClick={increaseQty}
              className="size-8 rounded-md bg-white dark:bg-[#233948] hover:bg-gray-100"
            >
              <span className="material-symbols-outlined text-sm">
                add
              </span>
            </button>

          </div>

          <p className="text-xl text-white font-bold">
            {price}
          </p>

        </div>

      </div>
    </div>
  );
}

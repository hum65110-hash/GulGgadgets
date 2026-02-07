import { useEffect, useState } from "react";
import CheckoutModal from "../checkout/CheckoutModal";
import { getCart } from "../utils/storage";

export default function OrderSummary() {

  const [cart, setCart] = useState([]);
  const [openCheckout, setOpenCheckout] = useState(false);

  /* ---------- LOAD CART ---------- */

  const loadCart = () => {
    const data = getCart() || [];
    setCart(data);
  };

  useEffect(() => {
    loadCart();

    window.addEventListener("cartUpdated", loadCart);
    window.addEventListener("storage", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
      window.removeEventListener("storage", loadCart);
    };
  }, []);

  /* ---------- SAFE CALCULATIONS ---------- */

  const subtotal = cart.reduce((acc, item) => {

    // 🛡️ Defensive guards
    const price =
      Number(item.numericPrice) ||
      Number(
        (item.price || "")
          .toString()
          .replace(/[₹,]/g, "")
      ) ||
      0;

    const qty = Number(item.qty) || 0;

    return acc + price * qty;

  }, 0);

  /* ---------- SHIPPING ---------- */

  const shipping = subtotal > 0 ? 149 : 0;

  /* ---------- TAX ---------- */

  const taxRate = 0.02;
  const tax = subtotal * taxRate;

  /* ---------- TOTAL ---------- */

  const total = subtotal + shipping + tax;

  /* ---------- FORMATTER ---------- */

  const format = (num) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(Number(num) || 0);

  /* ---------- UI ---------- */

  return (
    <aside
      className="w-full lg:w-1/3 rounded-xl p-6 shadow-xl flex flex-col gap-6"
      style={{
        background: "var(--color-cart-glass-bg)",
        border: "1px solid var(--color-cart-glass-border)",
        backdropFilter: "blur(12px)",
      }}
    >

      <h2 className="text-2xl text-white font-bold">
        Order Summary
      </h2>

      {/* Coupon */}
      <div className="flex flex-col gap-2">

        <label className="text-sm text-text-muted-light">
          Gift Card / Promo code
        </label>

        <div className="flex gap-2">

          <input
            placeholder="Enter code"
            className="flex-1 text-white bg-gray-50 dark:bg-[#111b22] border border-gray-200 dark:border-[#233948] rounded-lg px-3 py-2.5 text-sm"
          />

          <button className="px-4 text-white hover:text-black hover:cursor-pointer rounded-lg font-bold bg-gray-200 dark:bg-[#233948] hover:bg-gray-300">
            Apply
          </button>

        </div>

      </div>

      <div className="h-px bg-gray-200 dark:bg-[#233948]" />

      {/* Totals */}
      <div className="flex flex-col gap-3 text-text-muted-light">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium text-white">
            {format(subtotal)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium text-white">
            {shipping === 0
              ? "Free"
              : format(shipping)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Tax (2%)</span>
          <span className="font-medium text-white">
            {format(tax)}
          </span>
        </div>

      </div>

      <div className="h-px bg-gray-200 dark:bg-[#233948]" />

      {/* Total */}
      <div className="flex justify-between">

        <span className="text-lg text-white font-bold">
          Total
        </span>

        <span className="text-2xl font-black text-primary">
          {format(total)}
        </span>

      </div>

      {/* Checkout Button */}
      <button
        onClick={() => setOpenCheckout(true)}
        className="w-full bg-primary hover:bg-blue-600 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition"
      >
        Checkout
      </button>

      {/* Checkout Modal */}
      <CheckoutModal
        open={openCheckout}
        onClose={() => setOpenCheckout(false)}
        total={total}
      />

      <p className="text-xs text-text-muted-light flex justify-center gap-1">

        <span className="material-symbols-outlined text-[14px]">
          lock
        </span>

        Secure Checkout

      </p>

    </aside>
  );
}

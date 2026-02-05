export default function OrderSummary() {
  return (
    <aside
      className="w-full lg:w-1/3 rounded-xl p-6 shadow-xl flex flex-col gap-6"
      style={{
        background: "var(--color-cart-glass-bg)",
        border: "1px solid var(--color-cart-glass-border)",
        backdropFilter: "blur(12px)",
      }}
    >

      <h2 className="text-2xl font-bold">
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
            className="flex-1 bg-gray-50 dark:bg-[#111b22] border border-gray-200 dark:border-[#233948] rounded-lg px-3 py-2.5 text-sm"
          />

          <button className="px-4 rounded-lg font-bold bg-gray-200 dark:bg-[#233948] hover:bg-gray-300">
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
            $647.99
          </span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium text-[var(--color-success)]">
            Free
          </span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span className="font-medium text-white">
            $51.84
          </span>
        </div>

      </div>

      <div className="h-px bg-gray-200 dark:bg-[#233948]" />

      <div className="flex justify-between">

        <span className="text-lg font-bold">
          Total
        </span>

        <span className="text-2xl font-black text-primary">
          $699.83
        </span>

      </div>

      {/* Checkout */}
      <button className="w-full bg-primary hover:bg-blue-600 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[var(--scale-hover-soft)] transition">
        Checkout
      </button>

      <p className="text-xs text-text-muted-light flex justify-center gap-1">

        <span className="material-symbols-outlined text-[14px]">
          lock
        </span>

        Secure Checkout

      </p>

    </aside>
  );
}


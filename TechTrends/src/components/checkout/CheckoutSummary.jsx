export default function CheckoutSummary() {
  return (
    <aside className="bg-[var(--color-checkout-panel)] border border-[var(--color-checkout-border)] rounded-xl p-6 sticky top-8">

      <h3 className="font-bold mb-4 pb-4 border-b border-[var(--color-checkout-border)]">
        Order Summary
      </h3>

      {/* items omitted for brevity */}

      <div className="flex justify-between pt-4 border-t border-[var(--color-checkout-border)]">

        <span className="font-bold">
          Total
        </span>

        <span className="text-primary font-bold text-xl">
          $540.00
        </span>

      </div>

    </aside>
  );
}

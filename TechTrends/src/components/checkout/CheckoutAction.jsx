export default function CheckoutActions() {
  return (
    <div className="flex justify-between pt-6 border-t border-[var(--color-checkout-border)]">

      <a className="flex items-center gap-2 text-text-muted-light hover:text-white">
        <span className="material-symbols-outlined text-sm">
          arrow_back_ios
        </span>
        Return to Cart
      </a>

      <button className="h-12 px-8 rounded-lg bg-primary hover:bg-blue-600 font-bold shadow-lg shadow-blue-900/20">
        Continue to Payment
      </button>

    </div>
  );
}

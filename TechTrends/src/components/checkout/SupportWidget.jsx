export default function SupportWidget() {
  return (
    <div className="rounded-xl p-4 border flex gap-3 bg-[var(--color-support-panel)] border-[var(--color-checkout-border)]">

      <span className="material-symbols-outlined text-primary">
        support_agent
      </span>

      <div>

        <p className="font-bold text-sm">
          Need Help?
        </p>

        <p className="text-xs text-text-muted-light">
          Contact our 24/7 support team if you have trouble checking out.
        </p>

        <a className="text-primary text-xs mt-2 block hover:underline">
          Chat with Support
        </a>

      </div>

    </div>
  );
}

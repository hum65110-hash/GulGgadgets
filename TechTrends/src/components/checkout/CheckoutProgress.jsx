export default function CheckoutProgress() {
  return (
    <section className="flex flex-col gap-4">

      <div className="flex justify-between text-sm">

        <span className="font-bold text-white">
          Shipping
        </span>

        <span className="text-text-muted-light">
          Delivery
        </span>

        <span className="text-text-muted-light">
          Payment
        </span>

      </div>

      <div
        className="relative h-2 rounded w-full"
        style={{ background: "var(--color-progress-track)" }}
      >

        <div className="absolute inset-y-0 left-0 w-1/3 bg-primary rounded" />

      </div>

      <p className="text-xs text-text-muted-light text-right">
        Step 1 of 3
      </p>

    </section>
  );
}

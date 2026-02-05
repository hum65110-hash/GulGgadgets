export default function DeliveryMethod() {
  return (
    <section className="flex flex-col gap-6">

      <h2 className="text-[22px] font-bold border-b pb-4 border-[var(--color-checkout-border)]">
        Delivery Method
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <DeliveryCard
          title="Standard"
          price="Free"
          description="Delivery in 5–7 business days."
          icon="local_shipping"
          checked
        />

        <DeliveryCard
          title="Express"
          price="$15.00"
          description="Delivery in 1–2 business days."
          icon="rocket_launch"
        />

      </div>

    </section>
  );
}

function DeliveryCard({ title, description, price, icon, checked }) {
  return (
    <label className="cursor-pointer group">

      <input
        type="radio"
        name="delivery"
        defaultChecked={checked}
        className="peer sr-only"
      />

      <div className="p-5 rounded-xl border bg-[var(--color-checkout-panel)] border-[var(--color-checkout-border)] peer-checked:border-primary peer-checked:bg-[var(--color-radio-bg-active)] transition h-full flex flex-col">

        <div className="flex justify-between mb-2">

          <div className="flex items-center gap-3">

            <span className="material-symbols-outlined text-text-muted-light peer-checked:text-primary">
              {icon}
            </span>

            <span className="font-bold">
              {title}
            </span>

          </div>

          <div className="size-5 rounded-full border border-[var(--color-checkout-muted)] peer-checked:bg-primary" />

        </div>

        <p className="text-text-muted-light text-sm mb-4">
          {description}
        </p>

        <div className="mt-auto pt-2 border-t border-[var(--color-checkout-border)]">

          <span className="font-bold">
            {price}
          </span>

        </div>

      </div>

    </label>
  );
}

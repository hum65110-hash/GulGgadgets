export default function ShippingForm() {
  return (
    <section className="flex flex-col gap-6">

      <h2 className="text-[22px] font-bold border-b pb-4 border-[var(--color-checkout-border)]">
        Shipping Address
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <Input label="First Name" />
        <Input label="Last Name" />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <Input label="Email Address" type="email" />
        <Input label="Phone Number" />

      </div>

      <Input icon="home_pin" label="Street Address" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <Input label="City" />
        <Input label="State / Province" />
        <Input label="Zip Code" />

      </div>

    </section>
  );
}

function Input({ label, type = "text", icon }) {
  return (
    <label className="flex flex-col">

      <span className="text-sm text-text-muted-light mb-2">
        {label}
      </span>

      <div className="relative">

        {icon && (
          <span className="absolute left-3 top-3 material-symbols-outlined text-[var(--color-checkout-muted)]">
            {icon}
          </span>
        )}

        <input
          type={type}
          className={`h-12 w-full rounded-lg border px-4 bg-[var(--color-checkout-panel)] border-[var(--color-checkout-border)] focus:ring-1 focus:ring-primary focus:border-primary ${
            icon ? "pl-10" : ""
          }`}
        />

      </div>

    </label>
  );
}


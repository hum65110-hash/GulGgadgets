const features = [
  {
    icon: "verified_user",
    title: "Official Warranty",
    desc: "Guaranteed genuine products with international warranty.",
  },
  {
    icon: "rocket_launch",
    title: "Express Delivery",
    desc: "Same day delivery for metro areas and free shipping over $200.",
  },
  {
    icon: "support_agent",
    title: "Expert Support",
    desc: "24/7 help from our gadget specialists.",
  },
];

export default function WhyShop() {
  return (
    <section className="rounded-2xl bg-surface-light dark:bg-surface-dark/50 border p-16">

      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold">Why GulfGadgets?</h2>
        <p className="text-text-secondary mt-2">
          Experience premium service with every purchase.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">

        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-border-blue-dark bg-white dark:bg-surface-darker p-6 hover:border-primary/50 transition"
          >
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined">
                {f.icon}
              </span>
            </div>

            <h3 className="font-bold text-lg">{f.title}</h3>
            <p className="text-text-secondary text-sm mt-2">
              {f.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

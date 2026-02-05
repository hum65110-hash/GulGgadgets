export default function FrequentlyBought() {
  return (
    <section className="px-4 lg:px-40 py-12 bg-soft-gray dark:bg-deep-navy">

      <h3 className="text-xl font-bold mb-6">
        Frequently Bought Together
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border hover:border-primary/30"
          >
            <div className="h-20 bg-background-dark rounded-lg mb-3" />

            <p className="font-bold text-sm">Accessory {i}</p>

            <p className="text-text-muted-light text-xs">Accessories</p>
          </div>
        ))}
      </div>

    </section>
  );
}

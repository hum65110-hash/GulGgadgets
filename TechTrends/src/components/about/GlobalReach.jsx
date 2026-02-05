export default function GlobalReach() {
  return (
    <section className="rounded-2xl overflow-hidden border border-border-blue-dark bg-surface-dark-alt relative">

      <div className="absolute inset-0 bg-map-overlay/90" />

      <div className="relative z-10 p-10 grid md:grid-cols-2 gap-10">

        <div className="space-y-4">

          <h3 className="text-white text-2xl font-bold">
            Operating Worldwide
          </h3>

          <p className="text-text-secondary">
            Rapid delivery to 50+ countries through global fulfillment hubs.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Dubai HQ", "London Hub", "Singapore Hub", "New York Hub"].map((c) => (
              <span
                key={c}
                className="px-3 py-1 rounded-full bg-surface-dark border border-border-blue-dark text-sm"
              >
                {c}
              </span>
            ))}
          </div>

        </div>

        <div className="grid grid-cols-2 gap-6">

          {[
            ["50+", "Countries Served"],
            ["24/7", "Global Support"],
            ["3", "Continents"],
            ["100k+", "Happy Customers"],
          ].map(([v, l]) => (
            <div
              key={l}
              className="p-4 rounded-lg bg-glass-white border border-glass-border backdrop-blur"
            >
              <span className="text-3xl font-bold text-primary">
                {v}
              </span>
              <p className="text-gray-300 text-sm">{l}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

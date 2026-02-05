const features = [
  {
    icon: "lightbulb",
    title: "Innovation First",
    desc: "We scout the globe for the latest breakthroughs in consumer electronics.",
  },
  {
    icon: "verified_user",
    title: "Premium Quality",
    desc: "Every product is rigorously tested to meet our standards.",
  },
  {
    icon: "handshake",
    title: "Customer Trust",
    desc: "Transparency, exceptional support, and long-term relationships.",
  },
];

export default function MissionFeatures() {
  return (
    <section className="grid md:grid-cols-3 gap-6">

      {features.map((f) => (
        <div
          key={f.title}
          className="rounded-xl border border-divider-light dark:border-border-blue-dark bg-white dark:bg-surface-dark-alt p-6 hover:border-primary transition"
        >

          <div className="w-fit p-3 rounded-full bg-blue-soft dark:bg-surface-dark mb-4">
            <span className="material-symbols-outlined text-3xl text-primary">
              {f.icon}
            </span>
          </div>

          <h3 className="font-bold text-xl mb-2 text-text-secondary">
            {f.title}
          </h3>

          <p className="text-text-muted-light">
            {f.desc}
          </p>

        </div>
      ))}

    </section>
  );
}


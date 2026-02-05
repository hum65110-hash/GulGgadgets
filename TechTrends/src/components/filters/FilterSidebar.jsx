export default function FilterSidebar() {
  const filters = [
    { icon: "memory", label: "Processor", active: true },
    { icon: "hard_drive", label: "Storage" },
    { icon: "memory_alt", label: "RAM" },
    { icon: "branding_watermark", label: "Brand" },
    { icon: "display_settings", label: "Screen Size" },
  ];

  return (
    <aside className="w-full lg:w-72 border-b lg:border-r border-surface-dark p-6 bg-background-dark">

      <div className="sticky top-24 space-y-6">

        <div>
          <h2 className="text-lg font-bold text-text-secondary">Filters</h2>
          <p className="text-text-secondary text-xs">Refine Selection</p>
        </div>

        <div className="space-y-2">
          {filters.map((f) => (
            <button
              key={f.label}
              className={`w-full flex justify-between px-3 py-2.5 rounded-lg group transition
                ${
                  f.active
                    ? "bg-surface-dark border border-primary/40"
                    : "hover:bg-surface-dark/60"
                }`}
            >
              <span className="flex gap-3">
                <span
                  className={`material-symbols-outlined ${
                    f.active ? "text-primary" : "text-text-secondary"
                  }`}
                >
                  {f.icon}
                </span>
                <span className="text-text-secondary">{f.label}</span>
              </span>

              <span className="material-symbols-outlined text-text-secondary">
                expand_more
              </span>
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="border-t border-surface-dark pt-4">
          <h3 className="text-sm font-bold mb-3 text-text-secondary">Price Range</h3>

          <input
            type="range"
            min={500}
            max={5000}
            className="w-full accent-primary"
          />
        </div>
      </div>
    </aside>
  );
}

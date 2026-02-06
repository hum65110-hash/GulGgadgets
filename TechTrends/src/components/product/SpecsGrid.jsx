const defaultSpecs = [
  { icon: "memory", label: "Chipset", value: "Snapdragon 8" },
  { icon: "battery_full", label: "Battery", value: "5000 mAh" },
  { icon: "photo_camera", label: "Camera", value: "200 MP" },
];

export default function SpecsGrid({ specs = defaultSpecs }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {specs.map((s) => (
        <div
          key={s.label}
          className="bg-surface-dark p-3 rounded-lg text-center border border-border-dark"
        >
          <span className="material-symbols-outlined text-primary text-2xl">
            {s.icon}
          </span>
          <p className="text-xs text-text-secondary mt-2">{s.label}</p>
          <p className="font-bold text-white text-sm mt-1">{s.value}</p>
        </div>
      ))}
    </div>
  );
}
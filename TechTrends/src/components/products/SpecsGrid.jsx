const specs = [
  { icon: "memory", label: "Chipset", value: "Snapdragon 8" },
  { icon: "battery_full", label: "Battery", value: "5000 mAh" },
  { icon: "photo_camera", label: "Camera", value: "200 MP" },
];

export default function SpecsGrid() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {specs.map((s) => (
        <div
          key={s.label}
          className="bg-soft-gray dark:bg-surface-dark p-3 rounded-lg text-center"
        >
          <span className="material-symbols-outlined text-primary">
            {s.icon}
          </span>
          <p className="text-xs text-text-muted-light">{s.label}</p>
          <p className="font-bold">{s.value}</p>
        </div>
      ))}
    </div>
  );
}

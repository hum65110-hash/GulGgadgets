import { useState } from "react";

const PRICE_RANGES = [
  { label: "Under ₹20,000", min: 0, max: 20000 },
  { label: "₹20,000 – ₹40,000", min: 20000, max: 40000 },
  { label: "₹40,000 – ₹70,000", min: 40000, max: 70000 },
  { label: "₹70,000 – ₹1,00,000", min: 70000, max: 100000 },
  { label: "Above ₹1,00,000", min: 100000, max: Infinity },
];

export default function FilterSidebar({ onPriceChange }) {

  const [selectedRanges, setSelectedRanges] = useState(
    []
  );

  // ---------------- TOGGLE RANGE ----------------

  const toggleRange = (range) => {
    let updated;

    const exists = selectedRanges.find(
      (r) =>
        r.min === range.min &&
        r.max === range.max
    );

    if (exists) {
      updated = selectedRanges.filter(
        (r) =>
          !(
            r.min === range.min &&
            r.max === range.max
          )
      );
    } else {
      updated = [...selectedRanges, range];
    }

    setSelectedRanges(updated);

    if (onPriceChange) {
      onPriceChange(updated);
    }
  };

  // ---------------- UI ----------------

  return (
    <aside className="w-full lg:w-72 border-b lg:border-r border-surface-dark p-6 bg-background-dark">

      <div className="sticky top-24 space-y-6">

        {/* Header */}
        <div>
          <h2 className="text-lg font-bold text-text-secondary">
            Filters
          </h2>
          <p className="text-text-secondary text-xs">
            Refine Selection
          </p>
        </div>

        {/* PRICE FILTER */}
        <div className="space-y-3">

          <h3 className="text-sm font-bold text-text-secondary">
            Price Range
          </h3>

          {PRICE_RANGES.map((range) => {

            const active = selectedRanges.some(
              (r) =>
                r.min === range.min &&
                r.max === range.max
            );

            return (
              <button
                key={range.label}
                onClick={() =>
                  toggleRange(range)
                }
                className={`w-full flex justify-between px-3 py-2.5 rounded-lg group transition border
                  ${
                    active
                      ? "bg-surface-dark border-primary/40"
                      : "border-transparent hover:bg-surface-dark/60"
                  }`}
              >
                <span className="flex gap-3 items-center">

                  <span
                    className={`material-symbols-outlined ${
                      active
                        ? "text-primary"
                        : "text-text-secondary"
                    }`}
                  >
                    currency_rupee
                  </span>

                  <span className="text-text-secondary text-sm">
                    {range.label}
                  </span>

                </span>

                {active && (
                  <span className="material-symbols-outlined text-primary">
                    check
                  </span>
                )}
              </button>
            );
          })}

        </div>
      </div>
    </aside>
  );
}

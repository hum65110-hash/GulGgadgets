// /PurchaseOptions.jsx

import { useState } from "react";

export default function PurchaseOptions({
  onAddToCart,
  onAddToWishlist,
}) {
  /* ---------- COLOR STATE ---------- */
  const [selectedColor, setSelectedColor] = useState("Black");

  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "Silver", hex: "#C0C0C0" },
    { name: "Blue", hex: "#1E3A8A" },
  ];
  return (
    <div className="space-y-6">

      {/* ---------- COLOR PICKER ---------- */}
      <div>
        <p className="text-sm text-gray-400 mb-2">
          Color: <span className="text-white font-medium">{selectedColor}</span>
        </p>

        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-8 h-8 rounded-full border-2 transition
                ${
                  selectedColor === color.name
                    ? "border-white scale-110"
                    : "border-gray-600"
                }`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>
 
    </div>
  );
}

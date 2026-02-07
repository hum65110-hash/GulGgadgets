import { useState, useEffect } from "react";

export default function ImageGallery({ images = [] }) {

  const [active, setActive] = useState(images[0]);

  // Update active image when product changes
  useEffect(() => {
    if (images.length > 0) {
      setActive(images[0]);
    }
  }, [images]);

  if (!images.length) return null;

  return (
    <div className="lg:col-span-7 space-y-4">

      {/* Main Image */}
      <div className="aspect-[4/3] bg-[#0f172a] rounded-xl relative overflow-hidden">
        <img
          src={active}
          alt="Product"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />

        <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs rounded-full">
          New Arrival
        </span>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-3">

        {images.slice(0, 4).map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(img)}
            className={`aspect-square rounded-lg overflow-hidden border transition
              ${
                active === img
                  ? "border-primary"
                  : "border-white/10 hover:border-white/30"
              }`}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover hover:scale-110 transition duration-300"
            />
          </button>
        ))}

        {images.length > 4 && (
          <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center text-gray-400 text-sm border border-white/10">
            +{images.length - 4}
          </div>
        )}

      </div>
    </div>
  );
}

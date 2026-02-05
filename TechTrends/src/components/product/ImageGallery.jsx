import { useState } from "react";

export default function ImageGallery() {

  const images = [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900",
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=900",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
  ];

  const [active, setActive] = useState(images[0]);

  return (
    <div className="lg:col-span-7 space-y-4">

      {/* Main Image */}
      <div className="aspect-[4/3] bg-[#0f172a] rounded-xl relative overflow-hidden">

        <img
          src={active}
          alt="Product"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />

        {/* Badge */}
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

        {/* More Images Tile */}
        <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center text-gray-400 text-sm border border-white/10">
          +{images.length - 4}
        </div>

      </div>
    </div>
  );
}

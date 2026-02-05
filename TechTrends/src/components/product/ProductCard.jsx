import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  title,
  brand,
  price,
  oldPrice,
  image,
}) {
  return (
    <Link to={`/product/${id}`}>
      <div className="group bg-[#0f172a] rounded-xl overflow-hidden 
        border border-white/10 hover:border-primary/30 
        hover:-translate-y-1 transition cursor-pointer">

        {/* Image Section */}
        <div className="relative aspect-[4/3] bg-[#020617]/50 p-6 flex items-center justify-center">

          {/* Wishlist */}
          <button
            onClick={(e) => e.preventDefault()}
            className="absolute top-3 right-3 w-8 h-8 rounded-full 
            bg-black/60 hover:bg-white hover:text-primary text-white 
            flex items-center justify-center transition"
          >
            <span className="material-symbols-outlined text-[18px]">
              favorite
            </span>
          </button>

          <img
            src={image}
            alt={title}
            className="object-contain h-full 
            group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">

          <div className="text-xs uppercase text-gray-400">
            {brand}
          </div>

          <h3 className="font-bold text-lg text-white group-hover:text-primary transition">
            {title}
          </h3>

          {/* Specs */}
          <div className="flex gap-2">
            {["Core i9", "32GB", "1TB"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] bg-black/40 border border-white/10 
                px-2 py-0.5 rounded text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="flex justify-between items-end pt-2">

            <div>
              <p className="text-gray-500 text-xs line-through">
                ${oldPrice}
              </p>
              <p className="text-primary text-xl font-bold">
                ${price}
              </p>
            </div>

            <button
              onClick={(e) => e.preventDefault()}
              className="bg-primary p-2 rounded-lg hover:bg-blue-500 transition"
            >
              <span className="material-symbols-outlined">
                shopping_bag
              </span>
            </button>

          </div>
        </div>
      </div>
    </Link>
  );
}

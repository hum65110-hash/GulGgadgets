export default function ProductCard({ 
  brand,
  name ,
  image,
  specs ,
  originalPrice ,
  price
}) {
  // Create URL-friendly ID from brand and name
  const productId = `${brand.toLowerCase().replace(/\s+/g, '-')}-${name.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <a 
      href={`/product/${productId}`}
      className="group bg-surface-dark rounded-xl overflow-hidden border border-border-dark hover:border-primary/30 hover:-translate-y-1 transition block"
    >

      <div className="relative aspect-[4/3] bg-background-dark/50 p-6 flex items-center justify-center">

        <button 
          onClick={(e) => {
            e.preventDefault();
            // Add to wishlist logic here
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-dark/80 hover:bg-white hover:text-primary text-white flex items-center justify-center transition z-10">
          <span className="material-symbols-outlined text-[18px]">
            favorite
          </span>
        </button>

        <img
          src={image}
          alt={name}
          className="object-contain max-h-full group-hover:scale-105 transition"
        />

      </div>

      <div className="p-4 space-y-3">

        <div className="text-xs uppercase text-text-secondary">{brand}</div>

        <h3 className="font-bold text-lg text-white group-hover:text-primary transition">
          {name}
        </h3>

        <div className="flex gap-2 flex-wrap">
          {specs.map((tag) => (
            <span
              key={tag}
              className="text-[10px] bg-background-dark border border-steel-blue px-2 py-0.5 rounded text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-end pt-2">

          <div>
            <p className="text-text-secondary text-xs line-through">{originalPrice}</p>
            <p className="text-primary text-xl font-bold">{price}</p>
          </div>

          <button 
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic here
            }}
            className="bg-primary p-2 rounded-lg hover:bg-opacity-90 transition">
            <span className="material-symbols-outlined text-background-dark">shopping_bag</span>
          </button>

        </div>
      </div>
    </a>
  );
}
export default function CategoryCard({ title, image, productCount, icon, link }) {
  return (
    <a 
      href={link}
      className="group flex flex-col rounded-xl overflow-hidden bg-surface-light dark:bg-surface-dark border border-border-dark hover:border-primary hover:-translate-y-1 hover:shadow-glow transition cursor-pointer"
    >

      <div className="relative aspect-[4/3] bg-background-dark overflow-hidden">
        
        {/* Category Image */}
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Icon Overlay */}
        <span className="absolute top-4 right-4 material-symbols-outlined text-4xl text-white/80">
          {icon}
        </span>

        <span className="absolute bottom-3 left-4 bg-primary/90 text-white text-xs px-3 py-1 rounded-full font-medium">
          Popular
        </span>

      </div>

      <div className="p-5">
        <div className="flex justify-between items-center">

          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition">
              {title}
            </h3>
            <p className="text-text-secondary text-sm mt-1">
              {productCount} products
            </p>
          </div>

          <span className="material-symbols-outlined text-text-secondary group-hover:text-primary transition">
            arrow_forward
          </span>

        </div>
      </div>
    </a>
  );
}

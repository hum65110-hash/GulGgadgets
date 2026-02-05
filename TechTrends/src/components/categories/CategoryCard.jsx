export default function CategoryCard({ title }) {
  return (
    <div className="group flex flex-col rounded-xl overflow-hidden bg-surface-light dark:bg-surface-dark border hover:-translate-y-1 hover:shadow-primary/20 transition">

      <div className="relative aspect-[4/3] bg-background-dark">

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <span className="absolute bottom-3 left-4 bg-primary/90 text-white text-xs px-2 py-0.5 rounded-full">
          Popular
        </span>

      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">

          <h3 className="text-xl font-bold group-hover:text-primary">
            {title}
          </h3>

          <span className="material-symbols-outlined text-text-secondary group-hover:text-primary">
            arrow_forward
          </span>

        </div>

        <p className="text-text-secondary text-sm mt-2">
          Premium devices in this category.
        </p>
      </div>
    </div>
  );
}

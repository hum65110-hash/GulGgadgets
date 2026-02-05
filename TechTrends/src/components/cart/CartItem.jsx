export default function CartItem({ title, subtitle, price, qty }) {
  return (
    <div className="group flex flex-col sm:flex-row gap-6 bg-white dark:bg-[#15232d] p-5 rounded-xl border border-gray-100 dark:border-[#233948]/50 shadow-sm hover:border-primary/30 transition">

      {/* Image */}
      <div className="shrink-0 rounded-lg aspect-square size-24 sm:size-32 bg-surface-dark" />

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">

        <div className="flex justify-between">

          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-text-muted-light text-sm">
              {subtitle}
            </p>
          </div>

          <button className="text-text-muted-light hover:text-primary">
            <span className="material-symbols-outlined">
              delete
            </span>
          </button>

        </div>

        <div className="flex flex-wrap justify-between items-end gap-4 mt-4">

          {/* Quantity */}
          <div className="flex items-center gap-3 bg-gray-50 dark:bg-[#111b22] rounded-lg p-1 border border-gray-200 dark:border-[#233948]">

            <button className="size-8 rounded-md bg-white dark:bg-[#233948] hover:bg-gray-100">
              <span className="material-symbols-outlined text-sm">
                remove
              </span>
            </button>

            <input
              readOnly
              value={qty}
              className="w-8 bg-transparent text-center font-medium"
            />

            <button className="size-8 rounded-md bg-white dark:bg-[#233948] hover:bg-gray-100">
              <span className="material-symbols-outlined text-sm">
                add
              </span>
            </button>

          </div>

          <p className="text-xl font-bold">
            {price}
          </p>

        </div>

      </div>

    </div>
  );
}

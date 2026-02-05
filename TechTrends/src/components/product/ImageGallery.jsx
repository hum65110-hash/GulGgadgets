export default function ImageGallery() {
  return (
    <div className="lg:col-span-7 space-y-4">

      <div className="aspect-[4/3] bg-surface-dark rounded-xl relative overflow-hidden">
        <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs rounded-full">
          New Arrival
        </span>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="aspect-square bg-surface-dark rounded-lg hover:border-hover-surface border transition"
          />
        ))}

        <div className="aspect-square bg-hover-surface/50 rounded-lg flex items-center justify-center">
          
        </div>
      </div>

    </div>
  );
}

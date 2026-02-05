export default function PurchaseOptions() {
  return (
    <section className="space-y-6">

      {/* Color */}
      <div>
        <p className="text-sm text-text-muted-light mb-3">
          Color: <span className="font-bold">Midnight Blue</span>
        </p>

        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full bg-midnight-blue ring-2 ring-primary" />
          <button className="w-10 h-10 rounded-full bg-phantom-black" />
          <button className="w-10 h-10 rounded-full bg-cloud-silver" />
        </div>
      </div>

      {/* Storage */}
      <div>
        <p className="text-sm text-text-muted-light mb-2">Storage</p>

        <div className="grid grid-cols-3 gap-3">
          {["128GB", "256GB", "512GB"].map((v, i) => (
            <button
              key={v}
              className={`rounded-lg p-3 text-sm font-bold border ${
                i === 1
                  ? "bg-primary text-white"
                  : "border-divider-light text-text-muted-light"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}

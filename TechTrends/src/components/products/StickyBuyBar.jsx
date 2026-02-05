export default function StickyBuyBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-surface-light dark:bg-surface-dark border-t border-divider-light py-3 px-6 z-40">

      <div className="max-w-[1440px] mx-auto flex justify-between">

        <div>
          <p className="font-bold">Flagship X1</p>
          <p className="text-text-muted-light text-sm">
            Midnight Blue • 256GB
          </p>
        </div>

        <button className="bg-primary px-8 rounded-lg text-white font-bold h-12">
          Add to Cart
        </button>

      </div>
    </div>
  );
}

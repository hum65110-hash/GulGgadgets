export default function Footer() {
  return (
    <footer className="mt-24 border-t border-surface-dark py-12">

      <div className="grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="font-bold">GulfGadgets</h3>
          <p className="text-text-secondary text-sm">
            Premium electronics for modern buyers.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Shop</h4>
          <ul className="space-y-2 text-text-secondary text-sm">
            <li>Laptops</li>
            <li>Phones</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

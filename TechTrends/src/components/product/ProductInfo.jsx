export default function ProductInfo() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-text-secondary">Flagship X1</h1>

      <p className="text-primary font-bold mt-1">In Stock</p>

      <div className="flex items-center gap-4 mt-3">
        <span className="text-3xl font-bold text-text-secondary">$1,199.00</span>
        <span className="line-through text-text-muted-light">$1,399.00</span>
      </div>
    </div>
  );
}

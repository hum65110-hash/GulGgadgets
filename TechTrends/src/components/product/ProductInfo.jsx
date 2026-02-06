export default function ProductInfo({ 
  brand = "Brand",
  name = "Product Name",
  price = "₹0",
  originalPrice = "₹0",
  inStock = true
}) {
  return (
    <div>
      <div className="text-sm uppercase text-text-secondary mb-2">{brand}</div>
      
      <h1 className="text-4xl font-bold text-white">{name}</h1>

      <p className={`font-bold mt-3 ${inStock ? 'text-primary' : 'text-red-500'}`}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      <div className="flex items-center gap-4 mt-4">
        <span className="text-3xl font-bold text-primary">{price}</span>
        {originalPrice !== price && (
          <span className="line-through text-text-secondary">{originalPrice}</span>
        )}
      </div>
    </div>
  );
}
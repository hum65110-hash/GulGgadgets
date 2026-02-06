import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { getCart } from "../utils/storage";

export default function CartList() {
  const [cart, setCart] = useState([]);

  const loadCart = () => {
    setCart(getCart());
  };

  useEffect(() => {
    loadCart();

    window.addEventListener("cartUpdated", loadCart);
    window.addEventListener("storage", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
      window.removeEventListener("storage", loadCart);
    };
  }, []);

  if (cart.length === 0) {
    return (
      <div className="w-full lg:w-2/3 flex items-center justify-center h-64 border border-dashed rounded-xl text-text-muted-light">
        Your cart is feeling lonely 🛒
      </div>
    );
  }

  return (
    <div className="w-full lg:w-2/3 flex flex-col gap-4">
      {cart.map((item) => (
        <CartItem
          key={`${item.productId}-${item.variantId}`}
          {...item}
        />
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import CartItem from "./CartItem";

export default function CartList() {

  const [cart, setCart] = useState([]);

  // ---------- LOAD CART ----------

  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  };

  useEffect(() => {
    loadCart();

    // Sync if storage updates (other components)
    window.addEventListener("storage", loadCart);

    return () => {
      window.removeEventListener("storage", loadCart);
    };
  }, []);

  // ---------- EMPTY STATE ----------

  if (cart.length === 0) {
    return (
      <div className="w-full lg:w-2/3 flex items-center justify-center h-64 border border-dashed rounded-xl text-text-muted-light">
        Your cart is feeling lonely 🛒
      </div>
    );
  }

  // ---------- UI ----------

  return (
    <div className="w-full lg:w-2/3 flex flex-col gap-4">

      {cart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.name}
          subtitle={`${item.brand} | ${item.specs?.join(" | ")}`}
          price={item.price}
          qty={item.qty}
        />
      ))}

    </div>
  );
}

import CartList from "../components/cart/CartList";
import OrderSummary from "../components/cart/OrderSummary";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate();

  return (
    <main className="w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8 md:py-12 bg-background-dark">

      {/* Heading */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">

        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-text-secondary">
            Shopping Cart
          </h1>
        </div>

<button
      onClick={() => navigate(-1)}
      className="text-primary font-medium flex items-center gap-1 hover:text-blue-400"
    >
      <span className="material-symbols-outlined">
        arrow_back
      </span>
      Continue Shopping
    </button>

      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">

        <CartList />

        <OrderSummary />

      </div>

    </main>
  );
}


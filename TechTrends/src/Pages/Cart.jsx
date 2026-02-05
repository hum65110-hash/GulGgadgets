import CartList from "../components/cart/CartList";
import OrderSummary from "../components/cart/OrderSummary";

export default function Cart() {
  return (
    <main className="w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8 md:py-12">

      {/* Heading */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">

        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Shopping Cart
          </h1>
          <p className="text-text-muted-light">
            You have 3 items in your cart
          </p>
        </div>

        <a className="text-primary font-medium flex items-center gap-1 hover:text-blue-400">
          <span className="material-symbols-outlined">
            arrow_back
          </span>
          Continue Shopping
        </a>

      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">

        <CartList />

        <OrderSummary />

      </div>

    </main>
  );
}


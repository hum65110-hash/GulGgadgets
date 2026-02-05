import CheckoutProgress from "../components/checkout/CheckoutProgress";
import ShippingForm from "../components/checkout/ShippingForm";
import DeliveryMethod from "../components/checkout/DeliveryMethod";
import CheckoutActions from "../components/checkout/CheckoutActions";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import SupportWidget from "../components/checkout/SupportWidget";

export default function Checkout() {
  return (
    <main className="px-4 md:px-40 py-8 flex justify-center">

      <div className="max-w-[960px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-8 flex flex-col gap-8">

          <CheckoutProgress />

          <ShippingForm />

          <DeliveryMethod />

          <CheckoutActions />

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4 flex flex-col gap-6">

          <CheckoutSummary />

          <SupportWidget />

        </div>

      </div>

    </main>
  );
}

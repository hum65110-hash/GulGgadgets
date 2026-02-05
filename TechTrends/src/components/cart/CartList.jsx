import CartItem from "./CartItem";

export default function CartList() {
  return (
    <div className="w-full lg:w-2/3 flex flex-col gap-4">

      <CartItem
        title="QuantumX Noise Cancelling Headphones"
        subtitle="Matte Black | Wireless"
        price="$299.00"
        qty={1}
      />

      <CartItem
        title="CyberGrip Gaming Mouse"
        subtitle="Wired | 16000 DPI | RGB"
        price="$89.99"
        qty={1}
      />

      <CartItem
        title="Nebula Smart Home Hub"
        subtitle="Graphite | Voice Control"
        price="$129.50"
        qty={2}
      />

    </div>
  );
}

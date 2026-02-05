import WishlistHeader from "../components/wishlist/WishlistHeader";
import WishlistGrid from "../components/wishlist/WishlistGrid";

export default function Wishlist() {
  return (
    <main className="flex-1 px-4 py-8 md:px-10 lg:px-40 flex justify-center">
      <div className="flex flex-col w-full max-w-[1200px] gap-8">

        <WishlistHeader />

        <WishlistGrid />

      </div>
    </main>
  );
}

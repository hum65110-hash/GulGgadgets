import Breadcrumbs from "../components/product/Breadcrumbs";
import ImageGallery from "../components/product/ImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import SpecsGrid from "../components/product/SpecsGrid";
import PurchaseOptions from "../components/product/PurchaseOptions";
import FrequentlyBought from "../components/product/FrequentlyBought";
import StickyBuyBar from "../components/product/StickyBuyBar";

export default function ProductDetails() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto bg-background-dark">

        <Breadcrumbs />

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-4 lg:px-40 py-6">

          <ImageGallery />

          <div className="lg:col-span-5 space-y-8">
            <ProductInfo />
            <SpecsGrid />
            <PurchaseOptions />
          </div>

        </section>

      </div>

      <FrequentlyBought />

      <StickyBuyBar />
    </>
  );
}

import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/product/Breadcrumbs";
import ImageGallery from "../components/product/ImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import SpecsGrid from "../components/product/SpecsGrid";
import PurchaseOptions from "../components/product/PurchaseOptions";
import FrequentlyBought from "../components/product/FrequentlyBought";
import StickyBuyBar from "../components/product/StickyBuyBar";



export default function ProductDetails() {
  const { productId } = useParams();
  const product = getProductData(productId);

  return (
    <div className="bg-background-dark min-h-screen">
      <div className="max-w-[1440px] mx-auto">

        <Breadcrumbs category={product.category} productName={product.name} />

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-4 lg:px-40 py-6">

          <ImageGallery images={product.images} />

          <div className="lg:col-span-5 space-y-8">
            <ProductInfo 
              brand={product.brand}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              inStock={product.inStock}
            />
            <SpecsGrid specs={product.specs} />
            <PurchaseOptions />
          </div>

        </section>

      </div>

      <FrequentlyBought />

      <StickyBuyBar 
        name={product.name}
        price={product.price}
      />
    </div>
  );
}
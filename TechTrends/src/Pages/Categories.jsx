import CategoryBreadcrumbs from "../components/categories/CategoryBreadcrumbs";
import CategoryHero from "../components/categories/CategoryHero";
import CategoryGrid from "../components/categories/CategoryGrid";
import WhyShop from "../components/categories/WhyShop";

export default function Categories() {
  return (
    <section className="flex justify-center w-full px-4 sm:px-6 lg:px-40 py-5 bg-background-dark">
      <div className="max-w-[1200px] w-full space-y-16">

        <CategoryBreadcrumbs />

        <CategoryHero />

        <CategoryGrid />

        <WhyShop />

      </div>
    </section>
  );
}

import Tabs from "../filters/tabs";
import CategoryChips from "../filters/CategoryChips";
import BrandChips from "../filters/BrandChips";
import ProductGrid from "../product/ProductGrid";

export default function MainContent() {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-xl shadow-sm">
      <Tabs />
      <CategoryChips />
      <BrandChips />
      <ProductGrid />
    </div>
  );
}

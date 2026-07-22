import ProductCard from "./ProductCard";
import { mockProducts } from "../../mockData/products";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}

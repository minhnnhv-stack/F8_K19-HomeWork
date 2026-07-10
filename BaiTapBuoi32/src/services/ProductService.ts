import { Product } from "../models/Products";

interface ProductServiceI {
  addProduct(product: Product): void;
  updateProduct(
    id: string,
    data: Partial<Pick<Product, "name" | "price">>,
  ): void;

  deleteProduct(id: string): void;
  findProductById(id: string): Product | undefined;
  findByName(name: string): Product[];
  getAllProducts(): Product[];
  printProducts(): void;
}
export class ProductService implements ProductServiceI {
  private products: Product[] = [];
  addProduct(product: Product) {
    const existingProduct = this.findProductById(product.id);
    if (existingProduct) {
      throw new Error(`Product with id ${product.id} already exists`);
    }
    this.products.push(product);
  }
  updateProduct(id: string, data: Partial<Pick<Product, "name" | "price">>) {
    const product = this.findProductById(id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    if (data.name !== undefined) {
      product.name = data.name;
    }
    if (data.price !== undefined) {
      product.price = data.price;
    }
  }
  deleteProduct(id: string) {
    this.products = this.products.filter((product) => product.id !== id);
  }
  findProductById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
  findByName(name: string): Product[] {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase()),
    );
  }
  getAllProducts(): Product[] {
    return this.products;
  }

  printProducts(): void {
    if (this.products.length === 0) {
      console.log("Danh sách sản phẩm trống.");
      return;
    }
    this.products.forEach((p) => console.log(p.toString()));
  }
}

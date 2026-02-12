import { ProductRepository } from "../repositories/product.repository";

export class ProductService {
  private repo = new ProductRepository();

  async createProduct(data: any) {
    return this.repo.create(data);
  }

  async getAllProducts() {
    return this.repo.findAll();
  }

  async deleteProduct(id: number) {
    return this.repo.delete(id);
  }
}

import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

const service = new ProductService();

export class ProductController {
  static async create(req: Request, res: Response) {
    const product = await service.createProduct(req.body);
    res.json(product);
  }

  static async getAll(req: Request, res: Response) {
    const products = await service.getAllProducts();
    res.json(products);
  }

  static async delete(req: Request, res: Response) {
    await service.deleteProduct(Number(req.params.id));
    res.json({ message: "Deleted" });
  }
}

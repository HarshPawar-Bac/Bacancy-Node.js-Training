import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

const router = Router();

router.post("/", ProductController.create);
router.get("/", ProductController.getAll);
router.delete("/:id", ProductController.delete);

export default router;

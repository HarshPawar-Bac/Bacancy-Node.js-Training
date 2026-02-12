import express from "express";
import { sequelize } from "./config/database";
import userRoutes from "./routes/user.routes";
import productRoutes from "./routes/product.routes";

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

sequelize
  .authenticate()
  .then(() => console.log("DB Connected"))
  .catch(console.error);

app.listen(3000, () => {
  console.log("Server running on 3000");
});

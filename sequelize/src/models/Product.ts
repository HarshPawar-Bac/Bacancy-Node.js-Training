import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { User } from "../models/User";

export class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "products",
    timestamps: true,
  },
);

User.hasMany(Product, { foreignKey: "userId"});
Product.belongsTo(User, {foreignKey: "userId"})

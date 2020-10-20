import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "../config/databaseConnection.js";

import UserModel from "../src/models/userModel.js";
import ProductModel from "../src/models/productModel.js";
import OrderModel from "../src/models/orderModel.js";

import users from "../data/users.js";
import products from "../data/products.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await OrderModel.deleteMany();
    await ProductModel.deleteMany();
    await UserModel.deleteMany();

    const createdUsers = await UserModel.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });
    await ProductModel.insertMany(sampleProducts);
    console.log("Data imported successfully!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await OrderModel.deleteMany();
    await ProductModel.deleteMany();
    await UserModel.deleteMany();

    console.log("Data deleted successfully!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

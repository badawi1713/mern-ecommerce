import express from "express";
import asyncHandler from "express-async-handler";
import ProductModel from "../models/productModel.js";
const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/v1/products
// @access  PUBLIC
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find({});
    res.send(products);
  })
);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;

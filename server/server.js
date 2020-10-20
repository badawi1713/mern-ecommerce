import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import logger from "morgan";
import colors from "colors";

import connectDB from "./config/databaseConnection.js";
import products from "./data/products.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(logger("dev"));

app.get("/", (req, res, next) => {
  res.send("API is running");
});

app.get("/api/v1/products", (req, res, next) => {
  res.json(products);
});

app.get("/api/v1/products/:id", (req, res, next) => {
  const product = products.find((item) => item._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});

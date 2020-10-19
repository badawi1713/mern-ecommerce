const express = require("express");
const app = express();
const products = require("./data/dummyProducts");
const bodyParser = require("body-parser");
const logger = require("morgan");

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

app.listen(5000, () => {
  console.log("Server running on localhost:5000");
});

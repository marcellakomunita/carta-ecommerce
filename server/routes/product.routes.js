module.exports = (app) => {
  var router = require("express").Router();

  const product = require("../controllers/product.controller");

  router.post("/", product.createProduct);

  router.get("/", product.findProducts);
  router.get("/new-beauty", product.findNewProducts);
  router.get("/bestie-deals", product.findDiscountProducts);

  app.use("/carta-api/products", router);
};

module.exports = (app) => {
  var router = require("express").Router();

  const brand = require("../controllers/brand.controller");

  router.post("/", brand.create);

  router.get("/", brand.findAll);

  app.use("/carta-api/brands", router);
};

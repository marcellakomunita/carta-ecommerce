module.exports = (app) => {
  var router = require("express").Router();

  const category = require("../controllers/category.controller");

  router.get("/", category.findAllCategories);
  router.get("/departments", category.findAllCategoryDepartments);
  router.post("/", category.createCategory);
  router.post("/divisions", category.createCategoryDivision);
  router.post("/departments", category.createCategoryDepartment);

  app.use("/carta-api/categories", router);
};

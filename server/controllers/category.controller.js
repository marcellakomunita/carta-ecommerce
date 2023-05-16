const db = require("../models");

const Category = db.categories;
const CategoryDepartment = db.category_departments;
const CategoryDivision = db.category_divisions;

exports.createCategory = (req, res) => {
  if (!req.body.name || !req.body.divisionId) {
    res.status(400).send({
      message: "Category name and division are required.",
    });
    return;
  }

  const category = {
    name: req.body.name,
    divisionId: req.body.divisionId,
  };

  Category.create(category)
    .then((data) => {
      res.status(201).send({
        success: true,
        message: "Category created successfully.",
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: true,
        message: "Some error occurred while creating category.",
      });
    });
};

exports.createCategoryDivision = (req, res) => {
  if (!req.body.name || !req.body.departmentId) {
    res.status(400).send({
      message: "Category name and department are required.",
    });
    return;
  }

  const category = {
    name: req.body.name,
    departmentId: req.body.departmentId,
  };

  CategoryDivision.create(category)
    .then((data) => {
      res.status(201).send({
        success: true,
        message: "Category created successfully.",
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: true,
        message: "Some error occurred while creating category.",
      });
    });
};

exports.createCategoryDepartment = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Category name is required.",
    });
    return;
  }

  const category = {
    name: req.body.name,
  };

  CategoryDepartment.create(category)
    .then((data) => {
      res.status(201).send({
        success: true,
        message: "Category created successfully.",
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: true,
        message: "Some error occurred while creating category.",
      });
    });
};

exports.findAllCategories = async (req, res) => {
  try {
    const departments = await CategoryDepartment.findAll();
    const divisions = await CategoryDivision.findAll({
      include: [
        {
          model: Category,
        },
      ],
    });

    const departmentArray = [];
    const divisionsObject = {};
    const categoriesObject = {};

    departments.forEach((categoryDepartment) => {
      categoryDepartment = categoryDepartment.dataValues;
      departmentArray.push([categoryDepartment.id, categoryDepartment.name]);
      divisionsObject[categoryDepartment.id] = [];
    });

    divisions.forEach((categoryDivision) => {
      categoryDivision = categoryDivision.dataValues;
      divisionsObject[categoryDivision.departmentId].push([
        categoryDivision.id,
        categoryDivision.name,
      ]);

      categoryDivision.Categories.forEach((category) => {
        if (!categoriesObject[category.divisionId]) {
          categoriesObject[category.divisionId] = [];
        }
        categoriesObject[category.divisionId].push([
          category.id,
          category.name,
        ]);
      });
    });

    const result = {
      departments: departmentArray,
      divisions: divisionsObject,
      categories: categoriesObject,
    };

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.findAllUnits = (req, res) => {
  const { divisionId } = req.query;
  const condition = divisionId ? { divisionId: divisionId } : {};

  Category.findAll({ where: condition })
    .then((data) => {
      res.status(200).send({
        success: true,
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: true,
        message: "Some error occurred while retrieving categories.",
      });
    });
};

exports.findAllCategoryDivisions = (req, res) => {
  const { departmentId } = req.query;
  const condition = departmentId ? { departmentId: departmentId } : {};

  CategoryDivision.findAll({ where: condition })
    .then((data) => {
      res.status(200).send({
        success: true,
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: true,
        message: "Some error occurred while retrieving categories.",
      });
    });
};

exports.findAllCategoryDepartments = (req, res) => {
  CategoryDepartment.findAll()
    .then((data) => {
      res.status(200).send({
        success: true,
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: true,
        message: "Some error occurred while retrieving categories.",
      });
    });
};

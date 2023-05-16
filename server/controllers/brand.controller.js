const db = require("../models");

const Op = db.Sequelize.Op;

const Brand = db.brands;

exports.create = (req, res) => {
  console.log(req.body);
  const nonNullableFields = ["name", "countryCode", "description"];
  const missingFields = nonNullableFields.filter((field) => !req.body[field]);
  if (missingFields.length > 0) {
    res.status(400).send({
      message: "Missing or invalid fields.",
    });
    return;
  }

  const brand = {
    name: req.body.name,
    countryCode: req.body.countryCode,
    description: req.body.description,
  };

  Brand.create(brand)
    .then((data) => {
      res.status(201).send({
        success: true,
        message: "Brand created successfully.",
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: true,
        message: "Some error occurred while creating brand.",
      });
    });
};

exports.findAll = (req, res) => {
  const { name, id } = req.query;
  const condition = {
    [Op.or]: [
      name ? { name: { [Op.iLike]: `%${name}%` } } : null,
      id ? { id: parseInt(id) } : null,
    ].filter((item) => item),
  };

  Brand.findAll({ where: condition })
    .then((data) => {
      res.status(201).send({
        success: true,
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: true,
        message: "Some error occurred while retrieving brands.",
      });
    });
};

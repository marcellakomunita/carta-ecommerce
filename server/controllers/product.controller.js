const db = require("../models");

const Product = db.products;
const ProductSize = db.product_sizes;
const ProductShade = db.product_shades;

exports.createProduct = async (req, res) => {
  const nonNullableFields = ["brandId", "categoryId", "name", "description"];

  const conditionalFields = [
    { shadeVariants: null, sizeVariants: null, price: { $ne: null } },
    { price: null, stock: null, shadeVariants: { $ne: null } },
    { price: null, stock: null, sizeVariants: { $ne: null } },
  ];

  const missingFields = nonNullableFields.filter((field) => !req.body[field]);

  const satisfiedCondition = conditionalFields.some((conditions) => {
    return Object.keys(conditions).every((field) => {
      if (conditions[field] === null) {
        return !req.body[field];
      } else {
        return req.body[field] && req.body[field] !== conditions[field];
      }
    });
  });

  if (missingFields.length > 0 || !satisfiedCondition) {
    res.status(400).send({
      message: "Missing or invalid fields.",
    });
    return;
  }

  const {
    brandId,
    categoryId,
    name,
    description,
    howToUse,
    ingredients,
    price,
    stock,
    sizeVariants,
    shadeVariants,
  } = req.body;

  const product = {
    brandId,
    name,
    categoryId,
    description,
    howToUse,
    ingredients,
    price,
    stock,
  };

  Product.create(product)
    .then((data) => {
      const createdSizeVariants = sizeVariants
        ? sizeVariants.map((size) => {
            const sizeVariant = {
              productId: data.id,
              name: size.name,
              stock: size.stock,
              price: size.price,
            };
            return ProductSize.create(sizeVariant);
          })
        : [];

      const createdShadeVariants = shadeVariants
        ? shadeVariants.map((shade) => {
            console.log(shadeVariants);
            const shadeVariant = {
              productId: data.id,
              name: shade.name,
              color: shade.color,
              stock: shade.stock,
              price: shade.price,
            };
            return ProductShade.create(shadeVariant);
          })
        : [];

      Promise.all([...createdSizeVariants, ...createdShadeVariants])
        .then(() => {
          // Handle success and send response
          res.status(201).send({
            success: true,
            message: "Product created successfully.",
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send({
            error: true,
            message: "Some error occurred while creating product.",
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: true,
        message: "Some error occurred while creating product.",
      });
    });
};

// get top 10 new products
exports.findNewProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ["id", "brandId", "categoryId", "name", "stock", "price"],
      order: [["createdAt", "DESC"]],
      limit: 10,
    });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// get top 10 discounts
// currently only ordering based on name asc
exports.findDiscountProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ["id", "brandId", "categoryId", "name", "stock", "price"],
      order: [["name", "ASC"]],
      limit: 10,
    });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.findProducts = async (req, res) => {
  try {
    var products;
    if (req.query.id) {
      products = await Product.findByPk(req.query.id);
      if (products) {
        if (products.price === null) {
          products = await getProductWithVariants(products);
        }
      }
      res.status(200).json(products);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

async function getProductWithVariants(product) {
  const { id } = product;
  const productSizes = await ProductSize.findAll({ where: { productId: id } });
  const productShades = await ProductShade.findAll({
    where: { productId: id },
  });

  const sizeVariants = productSizes.map((size) => ({
    name: size.name,
    price: size.price,
    stock: size.stock,
  }));

  const shadeVariants = productShades.map((size) => ({
    name: size.name,
    price: size.price,
    stock: size.stock,
  }));

  return {
    ...product.toJSON(),
    sizeVariants,
    shadeVariants,
  };
}

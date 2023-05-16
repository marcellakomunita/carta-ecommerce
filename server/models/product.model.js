module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("Product", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    brandId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Brands",
        key: "id",
      },
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Categories",
        key: "id",
      },
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    description: {
      // use markdown
      type: Sequelize.TEXT,
      allowNull: false,
    },
    howToUse: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    ingredients: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  });

  return Product;
};

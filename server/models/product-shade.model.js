module.exports = (sequelize, Sequelize) => {
  const ProductShade = sequelize.define("Product_Shade", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Products",
        key: "id",
      },
    },
    sizeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "ProductSizes",
        key: "id",
      },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return ProductShade;
};

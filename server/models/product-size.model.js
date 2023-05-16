module.exports = (sequelize, Sequelize) => {
  const ProductSize = sequelize.define("Product_Size", {
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
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: true,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  });

  return ProductSize;
};

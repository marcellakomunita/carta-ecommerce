module.exports = (sequelize, Sequelize) => {
  const ProductDiscount = sequelize.define("Product_Discount", {
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
    percentage: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    sizeId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Product_Sizes",
        key: "id",
      },
    },
    shadeId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Product_Shades",
        key: "id",
      },
    },
  });

  return ProductDiscount;
};

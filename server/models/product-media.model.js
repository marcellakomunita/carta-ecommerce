module.exports = (sequelize, Sequelize) => {
  const ProductMedia = sequelize.define("Product_Media", {
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
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
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

  return ProductMedia;
};

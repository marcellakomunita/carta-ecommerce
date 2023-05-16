module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("Category", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    divisionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Category_Divisions",
        key: "id",
      },
    },
  });

  return Category;
};

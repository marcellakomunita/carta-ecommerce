module.exports = (sequelize, Sequelize) => {
  const CategoryDivision = sequelize.define("Category_Division", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    departmentId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Category_Departments",
        key: "id",
      },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return CategoryDivision;
};

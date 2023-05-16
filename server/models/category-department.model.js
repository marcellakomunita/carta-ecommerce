module.exports = (sequelize, Sequelize) => {
  const CategoryDepartment = sequelize.define("Category_Department", {
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
  });

  return CategoryDepartment;
};

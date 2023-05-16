module.exports = (sequelize, Sequelize) => {
  const Brand = sequelize.define("Brand", {
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
    countryCode: {
      type: Sequelize.STRING(2),
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    uuidMedia: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
    },
  });

  return Brand;
};

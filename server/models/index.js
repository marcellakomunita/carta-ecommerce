const sequelize = require("../config/db.config");

const Sequelize = require("sequelize");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.brands = require("./brand.model")(sequelize, Sequelize);
db.category_departments = require("./category-department.model")(
  sequelize,
  Sequelize
);
db.category_divisions = require("./category-division.model")(
  sequelize,
  Sequelize
);
db.categories = require("./category.model")(sequelize, Sequelize);
db.products = require("./product.model")(sequelize, Sequelize);
db.product_sizes = require("./product-size.model")(sequelize, Sequelize);
db.product_shades = require("./product-shade.model")(sequelize, Sequelize);
db.product_discounts = require("./product-discount.model")(
  sequelize,
  Sequelize
);
db.product_medias = require("./product-media.model")(sequelize, Sequelize);

require("./association")(db);

module.exports = db;

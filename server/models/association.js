module.exports = (db) => {
  db.products.belongsTo(db.brands),
    {
      foreignKey: "brandId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    };
  db.brands.hasMany(db.products, {
    foreignKey: "brandId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  db.products.belongsTo(db.categories, {
    foreignKey: "categoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  db.categories.hasMany(db.products, {
    foreignKey: "categoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  db.product_sizes.belongsTo(db.products, {
    foreignKey: "productId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  db.product_sizes.hasMany(db.product_shades, {
    foreignKey: "sizeId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  db.product_shades.belongsTo(db.products, {
    foreignKey: "productId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  db.product_shades.belongsTo(db.product_sizes, {
    foreignKey: "sizeId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  db.product_discounts.belongsTo(db.products, {
    foreignKey: "productId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  db.product_discounts.belongsTo(db.product_sizes, {
    foreignKey: "sizeId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  db.product_discounts.belongsTo(db.product_shades, {
    foreignKey: "shadeId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  db.product_medias.belongsTo(db.products, {
    foreignKey: "productId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  db.product_medias.belongsTo(db.product_sizes, {
    foreignKey: "sizeId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  db.product_medias.belongsTo(db.product_shades, {
    foreignKey: "shadeId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  db.category_departments.hasMany(db.category_divisions, {
    foreignKey: "id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  db.category_divisions.belongsTo(db.category_departments, {
    foreignKey: "departmentId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  db.category_divisions.hasMany(db.categories, {
    foreignKey: "id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  db.categories.belongsTo(db.category_divisions, {
    foreignKey: "divisionId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
};

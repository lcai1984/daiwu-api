'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define('products', {
    category: DataTypes.STRING,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    assigned_user_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    weight_kg: DataTypes.FLOAT,
    expiredAt: DataTypes.DATEONLY,
    createdAt: DataTypes.DATEONLY,
    updatedAt: DataTypes.DATEONLY,
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};
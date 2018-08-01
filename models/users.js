'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    wechat_id: DataTypes.STRING,
    profile: DataTypes.STRING,
    name: DataTypes.STRING,
    createdAt: DataTypes.DATEONLY,
    updatedAt: DataTypes.DATEONLY
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var events = sequelize.define('events', {
  	user_id: DataTypes.INTEGER,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    weight_kg: DataTypes.FLOAT,
    expiredAt: DataTypes.DATEONLY,
    status: DataTypes.STRING,
    assigned_user_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATEONLY,
    updatedAt: DataTypes.DATEONLY
  }, {});
  events.associate = function(models) {
    // associations can be defined here
  };
  return events;
};
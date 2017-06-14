'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: { type : DataTypes.STRING, validate : {isEmail : true}},
    password: DataTypes.STRING,
    status : { type : DataTypes.ENUM('active', 'inactive') , defaultValue: 'active'}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Game)
      }
    }
  });
  return User;
};
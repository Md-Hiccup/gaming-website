'use strict';
module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define('Game', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Game.belongsTo(models.User);
        Game.hasMany(models.Score);
      }
    }
  });
  return Game;
};
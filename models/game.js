/**
 * Created by hussain on 8/6/17.
 */
module.exports = function(sequelize, Sequelize) {

    var Game = sequelize.define('game', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: Sequelize.STRING, notEmpty: true}
    },{
      // freezeTableName: true,
      // tableName: 'Games',
        createdAt: false,
        updatedAt: false,
      //  underscored : true
//		classMethods: {
//		associate: function(models) {
//			(, { foreignKey: 'userId' });
        //	},
    });

    return Game;
}
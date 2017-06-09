/**
 * Created by hussain on 8/6/17.
 */
module.exports = function(sequelize, Sequelize) {

    var Game = sequelize.define('game', {
        id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
        name: {type: Sequelize.STRING, notEmpty: true}
    },{
        freezeTableName: true,
        tableName: 'Games',
        createdAt: false,
        updatedAt: false,
//		classMethods: {
//		associate: function(models) {
//			(, { foreignKey: 'userId' });
        //	},
    });

    return Game;
}
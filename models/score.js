/**
 * Created by hussain on 8/6/17.
 */
module.exports = function(sequelize, Sequelize) {

    var Score = sequelize.define('score', {
        gid: {type: Sequelize.INTEGER},
        uid: {type: Sequelize.INTEGER},
        score: {type: Sequelize.INTEGER }
    },{
        freezeTableName: true,
        tableName: 'Scores',
        createdAt: false,
        updatedAt: false,
//		classMethods: {
//		associate: function(models) {
//			models.User.hasMany(models.user.hasMany(models.), { foreignKey: 'userId' });
        //	},
    });

    return Score;
}
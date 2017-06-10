/**
 * Created by hussain on 8/6/17.
 */
module.exports = function(sequelize, Sequelize) {

    var Score = sequelize.define('score', {
        game_id: {type: Sequelize.INTEGER, allowNull: false},
        user_id: {type: Sequelize.INTEGER, allowNull: false},
        score: {type: Sequelize.INTEGER }
    },{
      //  freezeTableName: true,
      //  tableName: 'Scores',
        createdAt: false,
        updatedAt: false,
    //    underscored: true
//		classMethods: {
//		associate: function(models) {
//			Score.belongsTo(models.User,
//              {
//                  foreignKey: {   allowNull : false }
//              });
        //	},
    });

    return Score;
}
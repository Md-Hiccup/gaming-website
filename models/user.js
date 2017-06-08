
module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('user', {
        id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
        first_name: {type: Sequelize.STRING, notEmpty: true},
        last_name: {type: Sequelize.STRING, notEmpty: true},
     //   username: {type: Sequelize.TEXT},
     //   about: {type: Sequelize.TEXT},
        email: {type: Sequelize.STRING, validate: {isEmail: true}},
        password: {type: Sequelize.STRING, allowNull: false},
        //last_login: {type: Sequelize.DATE},
        status: {type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active'}
    },{
        freezeTableName: true,
        tableName: 'Users',
        createdAt: false,
        updatedAt: false,
//		classMethods: {
//		associate: function(models) {
//			models.User.hasMany(models.user.hasMany(models.), { foreignKey: 'userId' });
        //	},
    });

    return User;

}
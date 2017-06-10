
module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('user', {
        id: {type: Sequelize.UUID, primaryKey: true, allowNull : false},
        first_name: {type: Sequelize.STRING, notEmpty: true},
        last_name: {type: Sequelize.STRING, notEmpty: true},
     //   username: {type: Sequelize.TEXT},
     //   about: {type: Sequelize.TEXT},
        email: {type: Sequelize.STRING, validate: {isEmail: true}},
        password: {type: Sequelize.STRING, allowNull: false},
        //last_login: {type: Sequelize.DATE},
        status: {type: Sequelize.ENUM, values:['active', 'inactive'], defaultValue: 'active'}
    },{
       // freezeTableName: true,
      //  tableName: 'Users',
        createdAt: true,
        updatedAt: true,
        underscored : true
//		classMethods: {
//		associate: function(models) {
//			User.hasMany(models.Score, {
//              onDelete : 'cascade',
//              foreignKey:
//              { name : 'userId',
//                allowNull : false
//                  }
//              });
        //	},
    });

    return User;

}
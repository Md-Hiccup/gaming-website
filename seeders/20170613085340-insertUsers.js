'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
   */
    return queryInterface.bulkInsert('Users', [
      {
        first_name: 'John',
        last_name : 'Doe',
        email : 'john@gmail.com',
        password : 'john',
        status : 'active',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        first_name: 'Jack',
        last_name : 'Sparrow',
        email : 'jack@gmail.com',
        password : 'jack',
        status : 'active',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        first_name: 'Will',
        last_name : 'Tunnel',
        email : 'will@gmail.com',
        password : 'will',
        status : 'active',
        createdAt : new Date(),
        updatedAt : new Date()
      }

      ], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */  return queryInterface.bulkDelete('Users', null, {});

  }
};

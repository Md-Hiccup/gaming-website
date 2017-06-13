'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
     // Example:
      return queryInterface.bulkInsert('Games', [
          {
              name: 'TicTacToe Single Player',
              createdAt : new Date(),
              updatedAT : new Date()
            },
          {
              name: 'TicTacToe Double Player',
              createdAt : new Date(),
              updatedAT : new Date()
          },
          {
              name: 'IMarble',
              createdAt : new Date(),
              updatedAT : new Date()
          }
      ], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
     // Example:
      return queryInterface.bulkDelete('Games', null, {});
  }
};

'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Scores', [
      {
        score : 30,
        createdAt : new Date(),
        updatedAT : new Date()
      },
      {
        score: 40,
        createdAt : new Date(),
        updatedAT : new Date()
      },
      {
        score: 50,
        createdAt : new Date(),
        updatedAT : new Date()
      },
    ], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */  return queryInterface.bulkDelete('Scores', null, {});

  }
};

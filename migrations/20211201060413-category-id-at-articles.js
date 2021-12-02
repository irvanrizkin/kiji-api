'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('articles', 'categoryId', {
      type: Sequelize.STRING,
    })
  },

  down: async (queryInterface) => {
    queryInterface.removeColumn('articles', 'categoryId')
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('comments', 'articleId', {
      type: Sequelize.STRING,
    })
  },

  down: async (queryInterface) => {
    queryInterface.removeColumn('comments', 'articleId')
  }
};

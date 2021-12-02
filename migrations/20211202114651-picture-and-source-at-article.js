'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('articles', 'picture', {
      type: Sequelize.STRING(1000),
    });
    queryInterface.addColumn('articles', 'source', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface) => {
    queryInterface.removeColumn('articles', 'source');
    queryInterface.removeColumn('articles', 'picture');
  }
};

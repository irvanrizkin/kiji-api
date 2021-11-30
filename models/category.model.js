module.exports = (sequelize, Sequelize) => {
  const category = sequelize.define('categories', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
    }
  });
  return category;
};
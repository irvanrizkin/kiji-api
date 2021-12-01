module.exports = (sequelize, Sequelize) => {
  const comment = sequelize.define('comments', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
    },
    comment: {
      type: Sequelize.TEXT
    },
  });
  return comment;
};
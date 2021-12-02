module.exports = (sequelize, Sequelize) => {
  const article = sequelize.define('articles', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
    picture: {
      type: Sequelize.STRING(1000),
    },
    source: {
      type: Sequelize.STRING
    }
  });
  return article;
};
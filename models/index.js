const { Sequelize } = require('sequelize');
require('dotenv').config();

const { env } = process;

const nodeEnv = env.NODE_ENV || 'development';

const {
  username,
  password,
  database,
  host,
  dialect
} = require('../config/db.config')[nodeEnv];

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  operatorsAliases: 0,

  pool: {
    max: 3,
    min: 1,
    acquire: env.DB_ACQUIRE_POOL,
    idle: env.DB_IDLE_POOL,
  },
});

const article = require('./article.model')(sequelize, Sequelize);
const category = require('./category.model')(sequelize, Sequelize);
const comment = require('./comment.model')(sequelize, Sequelize);

category.hasMany(article, {
  as: 'articles'
});
article.belongsTo(category, {
  foreignKey: 'categoryId',
  as: 'category'
})

article.hasMany(comment, {
  as: 'comments'
})
comment.belongsTo(article, {
  foreignKey: 'articleId',
  as: 'article'
})

module.exports = {
  Sequelize,
  sequelize,
  article,
  category,
  comment,
};
const db = require('../models');
const crypto = require('crypto');

const Article = db.article;

function create(req, res) {
  const id = crypto.randomBytes(10).toString('hex');
  Article.create({ id,...req.body })
    .then((data) => res.status(200).json({
      status: true,
      message: 'new article created',
      article: data
    }))
    .catch((err) => res.status(422).json({
      status: flase,
      err
    }))
}

function findAll(_, res) {
  Article.findAll()
    .then((data) => res.status(200).json({
      status: true,
      message: 'grabbed all articles',
      articles: data
    }))
    .catch((err) => res.status(422).json({
      status: false,
      err
    }))
}

function findOne(req, res) {
  const { id } = req.params;
  Article.findByPk(id, { include: ['category'] })
    .then((data) => res.status(200).json({
      status: true,
      message: 'grabbed one article',
      article: data
    }))
    .catch((err) => res.status(422).json({
      status: true,
      err
    }))
}

module.exports = {
  create,
  findAll,
  findOne,
};
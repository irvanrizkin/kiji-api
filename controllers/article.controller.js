const db = require('../models');
const crypto = require('crypto');

const Article = db.article;
const Category = db.category;

async function create(req, res) {
  const id = crypto.randomBytes(10).toString('hex');
  const category = await Category.findByPk(req.body.categoryId);

  if (category == null) {
    return res.status(404).json({
      status: false,
      message: 'cannot refer to null category',
    })
  }

  Article.create({ id,...req.body })
    .then((data) => {
      res.status(200).json({
        status: true,
        message: 'new article created',
        article: data
      })
    })
    .catch((err) => {
      res.status(422).json({
        status: false,
        err
      })
    })
}

function findAll(_, res) {
  Article.findAll()
    .then((articles) => {
      if (articles.length == 0) {
        return res.status(200).json({
          status: false,
          message: 'no articles exist',
          articles
        })
      }
      return res.status(200).json({
        status: true,
        message: 'grabbed all articles',
        articles
      })
    })
    .catch((err) => res.status(422).json({
      status: false,
      err
    }))
}

function findOne(req, res) {
  const { id } = req.params;
  Article.findByPk(id, { include: ['category', 'comments'] })
    .then((article) => {
      if (article == null) {
        return res.status(404).json({
          status: false,
          message: 'article not found',
          article
        });
      }
      return res.status(200).json({
        status: true,
        message: 'grabbed one article',
        article
      });
    })
    .catch((err) => res.status(422).json({
      status: false,
      err
    }))
}

module.exports = {
  create,
  findAll,
  findOne,
};
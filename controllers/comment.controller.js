const db = require('../models');
const crypto = require('crypto');

const Comment = db.comment;
const Article = db.article;

async function create(req, res) {
  const id = crypto.randomBytes(10).toString('hex');
  const article = await Article.findByPk(req.body.articleId);

  if (article == null) {
    return res.status(404).json({
      status: false,
      message: 'cannot refer to null article',
    })
  }

  Comment.create({ id,...req.body })
    .then((data) => res.status(200).json({
      status: true,
      message: 'new comment added',
      comment: data
    }))
    .catch((err) => res.status(422).json({
      status: false,
      err
    }))
}

function findAll(_, res) {
  Comment.findAll()
    .then((comments) => {
      if (comments.length == 0) {
        return res.status(200).json({
          status: false,
          message: 'no comments exist',
          comments
        })
      }
      return res.status(200).json({
        status: true,
        message: 'grabbed all comments',
        comments
      })
    })
    .catch((err) => res.status(422).json({
      status: false,
      err
    }))
}

function findOne(req, res) {
  const { id } = req.params;
  Comment.findByPk(id, { include: ['article'] })
    .then((comment) => {
      if (comment == null) {
        return res.status(404).json({
          status: false,
          message: 'category not found',
          comment
        });
      }
      return res.status(200).json({
        status: true,
        message: 'grabbed one category',
        comment
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
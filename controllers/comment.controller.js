const db = require('../models');
const crypto = require('crypto');

const Comment = db.comment;

function create(req, res) {
  const id = crypto.randomBytes(10).toString('hex');
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
    .then((data) => res.status(200).json({
      status: true,
      message: 'grabbed all comments',
      comments: data
    }))
    .catch((err) => res.status(422).json({
      status: false,
      err
    }))
}

function findOne(req, res) {
  const { id } = req.params;
  Comment.findByPk(id, { include: ['article'] })
    .then((data) => res.status(200).json({
      status: true,
      message: 'grabbed one comment',
      comment: data
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
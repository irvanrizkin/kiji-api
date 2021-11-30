const db = require('../models');
const crypto = require('crypto');

const Category = db.category;

function create(req, res) {
  const id = crypto.randomBytes(10).toString('hex');
  Category.create({ id,...req.body })
    .then((data) => res.status(200).json({
      status: true,
      message: 'new category created',
      category: data
    }))
    .catch((err) => res.status(422).json({
      status: flase,
      err
    }))
}

function findAll(_, res) {
  Category.findAll()
    .then((data) => res.status(200).json({
      status: true,
      message: 'grabbed all categories',
      categories: data
    }))
    .catch((err) => res.status(422).json({
      status: false,
      err
    }))
}

function findOne(req, res) {
  const { id } = req.params;
  Category.findByPk(id)
    .then((data) => res.status(200).json({
      status: true,
      message: 'grabbed one category',
      category: data
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
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
      status: false,
      err
    }))
}

function findAll(_, res) {
  Category.findAll()
    .then((categories) => {
      if (categories.length == 0) {
        return res.status(200).json({
          status: false,
          message: 'no categories exist',
          categories
        })
      }
      return res.status(200).json({
        status: true,
        message: 'grabbed all categories',
        categories
      })
    })
    .catch((err) => res.status(422).json({
      status: false,
      err
    }))
}

function findOne(req, res) {
  const { id } = req.params;
  Category.findByPk(id, { include: ['articles'] })
    .then((category) => {
      if (category == null) {
        return res.status(404).json({
          status: false,
          message: 'category not found',
          category
        });
      }
      return res.status(200).json({
        status: true,
        message: 'grabbed one category',
        category
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
const router = require('express').Router();
const category = require('../controllers/category.controller');
const { categoryRules, validate } = require('../helpers/validator');

router.get('/index', category.findAll);

router.get('/show/:id', category.findOne);

router.post('/store', categoryRules(), validate, category.create);

module.exports = router;
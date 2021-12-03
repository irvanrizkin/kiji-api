const router = require('express').Router();
const article = require('../controllers/article.controller');
const { articleRules, validate } = require('../helpers/validator');

router.get('/index', article.findAll);

router.get('/show/:id', article.findOne);

router.post('/store', articleRules(), validate, article.create);

module.exports = router;
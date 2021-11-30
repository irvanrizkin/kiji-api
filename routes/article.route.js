const router = require('express').Router();
const article = require('../controllers/article.controller');

router.get('/index', article.findAll);

router.get('/show/:id', article.findOne);

router.post('/store', article.create);

module.exports = router;
const router = require('express').Router();
const comment = require('../controllers/comment.controller');
const { commentRules, validate } = require('../helpers/validator');

router.get('/index', comment.findAll);

router.get('/show/:id', comment.findOne);

router.post('/store', commentRules(), validate, comment.create);

module.exports = router;
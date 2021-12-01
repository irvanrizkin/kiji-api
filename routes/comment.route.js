const router = require('express').Router();
const comment = require('../controllers/comment.controller');

router.get('/index', comment.findAll);

router.get('/show/:id', comment.findOne);

router.post('/store', comment.create);

module.exports = router;
const router = require('express').Router();
const category = require('../controllers/category.controller');

router.get('/index', category.findAll);

router.get('/show/:id', category.findOne);

router.post('/store', category.create);

module.exports = router;
const { body, validationResult } = require('express-validator');

const categoryRules = () => {
  return [
    body('name').exists()
  ];
}

const articleRules = () => {
  return [
    body('title').exists(),
    body('content').exists(),
    body('categoryId').exists(),
    body('picture').isURL(),
    body('source').exists(),
  ];
}

const commentRules = () => {
  return [
    body('name').exists(),
    body('comment').exists(),
    body('articleId').exists(),
  ];
}

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next()
  }

  const extractedErrors = [];
  errors.array().map((err) => {
    extractedErrors.push({ [err.param]: err.msg });
  });

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  categoryRules,
  articleRules,
  commentRules,
  validate,
}
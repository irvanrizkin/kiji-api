const express = require('express');
const article = require('./routes/article.route');
const category = require('./routes/category.route');
const comment = require('./routes/comment.route');

require('dotenv').config();

const app = express();

app.get('/', (_, res) => {
  res.status(200).json({
    message: 'Welcome to Kiji base endpoint',
    err: null,
  });
});

app.use(express.json());

app.use('/articles', article);
app.use('/categories', category);
app.use('/comments', comment);

const PORT = process.env.APP_PORT || 8000;
app.listen(PORT, () => {
  console.log(`Your app is running at port ${PORT}`);
});
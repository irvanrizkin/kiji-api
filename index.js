
const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (_, res) => {
  res.status(200).json({
    message: 'Welcome to Kiji base endpoint',
    err: null,
  });
});

app.use(express.json());

const PORT = process.env.APP_PORT || 8000;
app.listen(PORT, () => {
  console.log(`Your app is running at port ${PORT}`);
});
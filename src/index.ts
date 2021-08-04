import express from 'express';

const sum = require('./oi/sum');

const app = express();

app.listen(3000, () => {
  console.log('Server started on 3000');
  console.log(sum(2, 3));
  console.log(sum(2, 3));
});

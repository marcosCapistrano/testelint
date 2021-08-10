import express from 'express';
import sum from './oi/sum';

const app = express();

app.listen(3000, () => {
  console.log('Server started on 3000');
  console.log(sum(2, 3));
  console.log(sum(2, 3));
  console.log(sum(2, 3));
  console.log(sum(2, 3));
  console.log(sum(2, 3));
});

console.log('oi');

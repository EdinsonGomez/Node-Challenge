const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./db/database');

const productsRouter = require('./routes/productsRouter');

const PORT = '8000';
const app = express();

app.use(bodyParser.json());
app.use('/products', productsRouter)

connectDB()
  .then(() => {
    console.log('Connect to DB');
  })
  .catch((error) => {
    console.error('[Connection DB Error]: ', error);
  })

app.listen(PORT, () => {
  console.log('Server listening in port: ', PORT);
});
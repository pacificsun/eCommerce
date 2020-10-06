const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // loads  .env files in process.env

// App
const app = express();

// Database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('database conneted'));

// Route
app.get('/', (req, res) => {
  res.send('Hello from node');
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is Running on port ${port}`));

const express = require('express');
const app = express();

require('dotenv').config(); // loads  .env files in process.env

app.get('/', (req, res) => {
  res.send('Hello from node');
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is Running on port ${port}`));

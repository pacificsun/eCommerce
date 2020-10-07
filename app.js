const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // loads  .env files in process.env

//import routes
const userRoutes = require('./routes/user');

// App
const app = express();

// Database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('database conneted'));

// Route middleware
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is Running on port ${port}`));

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parse');
const cookieParser = require('cookie-parser'); // to save user's credential in cookies

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


// Middlewares
app.use(morgan('dev'))  // http request logger
app.use(bodyParser.json()) // to get request body data in json 
app.use(cookieParser())
// Route middleware
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is Running on port ${port}`));

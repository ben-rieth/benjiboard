const path = require('path');
const dotenv = require('dotenv');
const express = require("express");
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/index');
const newRoutes = require('./routes/new')

dotenv.config();
const app = express();

const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

//set template engine and view folder
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//set up logging using Morgan
app.use(logger('dev'));

//set up basic express middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

//add routes to the app
app.use('/', indexRoutes);
app.use('/new', newRoutes);

app.listen('3000');


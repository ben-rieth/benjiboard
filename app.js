const path = require('path');
const express = require("express");
const logger = require('morgan');

const indexRoutes = require('./routes/index');
const newRoutes = require('./routes/new')

const app = express();

//set template engine and view folder
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//set up logging using Morgan
app.use(logger('dev'));

//add routes to the app
app.use('/', indexRoutes);
app.use('/new', newRoutes);

app.listen('3000');


const path = require('path');
const express = require("express");

const indexRoutes = require('./routes/index');
const newRoutes = require('./routes/new')

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use('/', indexRoutes);
app.use('/new', newRoutes);

app.listen('3000');


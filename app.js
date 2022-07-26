const path = require('path');
const dotenv = require('dotenv');
const express = require("express");
const logger = require('morgan');

const indexRoutes = require('./routes/index');
const newRoutes = require('./routes/new')

dotenv.config();
const app = express();

const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nodetest.nnpon.mongodb.net/message-board?retryWrites=true&w=majority`
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

//add routes to the app
app.use('/', indexRoutes);
app.use('/new', newRoutes);

app.listen('3000');


const express = require('express');
const bodyParser =require('body-parser');

const mongoose = require('mongoose');
const passport = require('passport');

const app = express();
const authRouters = require('./routes/auth');
const cinemaRouters = require('./routes/cinema');
const filmRouters = require('./routes/film');
const hallRouters = require('./routes/hall');
const keys = require('./config/keys');



mongoose.connect(keys.mongoURL)
    .then(() => console.log('Connect DB'))
    .catch(error => console.log(error));

 app.use(passport.initialize())
 require('./middleware/passport')(passport)

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/api/auth', authRouters)
app.use('/api/cinema', cinemaRouters)
app.use('/api/film', filmRouters)
app.use('/api/hall', hallRouters)

module.exports = app;
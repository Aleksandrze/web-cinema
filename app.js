const express = require('express');
const app = express();
const authRouters = require('./routes/auth');
const cinemaRouters = require('./routes/cinema');
const filmRouters = require('./routes/film');
const hallRouters = require('./routes/hall');


app.use('/api/auth', authRouters)
app.use('/api/cinema', cinemaRouters)
app.use('/api/film', filmRouters)
app.use('/api/hall', hallRouters)

module.exports = app;
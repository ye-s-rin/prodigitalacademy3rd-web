var createError = require('http-errors');
var express = require('express');
const cors = require('cors');  // cors 미들웨어 추가
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('./utils/Mongoose');

var app = express();
app.use((cors({
  origin: 'http://localhost:3000',
  credentials: true
})));  // cors 미들웨어 추가

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/api/users', usersRouter);

const campaignRouter = require('./routes/campaign.js');
app.use('/campaign', campaignRouter);

const commentRouter = require('./routes/comment.js');
app.use('/comment', commentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send the error response as JSON
  res.status(err.status || 500).json({ error: err.message });
});


module.exports = app;

var createError = require('http-errors');
var express = require('express');
const cors = require('cors');  // cors 미들웨어 추가
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors());  // cors 미들웨어 추가

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/sample', (req, res)=>{
  res.send("Sample");
});
app.post('/sample', (req, res)=>{
  res.send("Create First POST Router");
});

const boardRouter = require('./routes/board.js');
app.use('/board', boardRouter);

const birdsRouter = require('./routes/birds.js');
app.use('/birds', birdsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

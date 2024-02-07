var createError = require('http-errors');
var express = require('express');
const cors = require('cors');  // cors 미들웨어 추가
const session = require('express-session'); // session
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

// session 미들웨어 설정
app.use(
  session({
    secret: process.env.SESSION_SECRET || "<my-secret>",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false, // https만 가능하게 하는 옵션
    },
  })
);  

// 세션 미들웨어를 사용하여 방문한 경로를 세션 배열에 추가
app.use((req, res, next) => {
  // 세션에 방문한 경로를 저장할 배열이 없으면 새로 만듭니다.
  req.session.visitedPaths = req.session.visitedPaths || [];
  
  // 현재 요청의 경로를 세션 배열에 추가합니다.
  req.session.visitedPaths.push(req.path);
  
  console.log(req.session);
  
  // 다음 미들웨어로 제어를 전달합니다.
  next();
});

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

const todoRouter = require('./routes/todo.js');
app.use('/todo', todoRouter);

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

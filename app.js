var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
var homeRouter = require('./routes/index');
/* var homeRouter = require('./routes/home');
var adminRouter = require('./routes/admin');
var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login');
var dashboardRouter = require('./routes/dashboard');
var menuRouter = require('./routes/menu');
var burgrillRouter = require('./routes/menu/burgrill');
var lapinozRouter = require('./routes/menu/lapinoz');
var chainagriRouter = require('./routes/menu/chainagri');
//var havmorRouter = require('./routes/havmor');
var tqRouter = require('./routes/menu/tq');
var sqoneRouter = require('./routes/menu/sqone');
var cartRouter = require('./routes/cart');
//var managerHomePageRouter = require('./routes/managerhomepage');
var feedbackRouter = require('./routes/feedback');
var profileRouter = require('./routes/profile'); */

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', homeRouter);
/* 
app.use('/', homeRouter);
app.use('/home', homeRouter);
app.use('/admin', adminRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);
app.use('/menu', menuRouter);
app.use('/menu/burgrill', burgrillRouter);
app.use('/menu/lapinoz', lapinozRouter);
app.use('/menu/chainagri', chainagriRouter);
//app.use('/menu/havmor', havmorRouter);
app.use('/menu/tq', tqRouter);
app.use('/menu/sqone', sqoneRouter);
app.use('/cart', cartRouter);
//app.use('/managerhomepage', managerHomePageRouter);
app.use('/feedback', feedbackRouter);
app.use('/profile', profileRouter); */

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

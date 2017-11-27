var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var validator = require('express-validator');

var index = require('./routes/index');

var UserController = require('./lib/models/user/UserController');
var TimezoneController = require('./lib/models/timezone/TimezoneController');
var AuthController = require('./lib/auth/AuthController');


var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/qlik', { useMongoClient: true });
mongoose.Promise = global.Promise;

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
// app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
// app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
    secret: 'qlik-super-secret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', UserController);
app.use('/auth', AuthController);
app.use('/timezones', TimezoneController);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404 || 500;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500).send({ sucess: false, status: err.status, message: err.message });
    res.end();
});


module.exports = app;

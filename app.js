var express      = require('express.io');
var morgan       = require('morgan');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var mongoose = require('mongoose');
var MongoStore   = require('connect-mongo')(express);
var bcrypt       = require('bcrypt');
var swig		 = require('swig');

var app = express();
app.http().io();

//Modules
require('./models');
var home = require('./controllers/home');
var user = require('./controllers/user');
var dojo = require('./controllers/dojo');

//Engine Template View. View Engine: Swig
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//Archivos estaticos
app.use(express.static('./public'));

//Server Configuration Express 4
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(session({
	secret : '3hCQPb8KDpkU/AwCmeyE',
	store : new MongoStore({
		db : 'kyokuTest'
	})
}));

//Routes.
app.use(dojo);
app.use(home);
app.use(user);
app.listen(2000);
console.log('Listening port: 2000');
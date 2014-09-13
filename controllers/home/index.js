var express = require('express.io'),
	app = module.exports = express(),
	bcrypt = require('bcrypt');

app.set('views', __dirname + '/views');

//Middleware que verifica si un usuario no esta logueado
var isntLoggedIn = function (req, res, next) {
	if(!req.session.user){
		res.redirect('/');
		return;
	}

	next();
};

//Middleware para enviar a usuarios logged a la ventana de inicio (inicio automatico de usuarios logueados)
var isLoggedIn = function (req, res, next) {
	if(req.session.user){
		res.redirect('/index');
		return;
	}

	next();
};

app.get('/', isLoggedIn, function (req,res) {
	res.render('home');
});

app.get('/index', isntLoggedIn, function (req,res) {
	res.redirect('/profile');
});

app.get('/user_logout', function (req, res) {
	req.session.destroy();
	res.redirect('/');
});

app.post('/user_login', function (req,res) {
	var ul = req.body;
	db.User.find({nickname:ul.nickname}).exec(function (error,users) {
		if(error) return res.json(error);
		for(var i=0; i < users.length; i++){
			if(bcrypt.compareSync(ul.password,users[i].password)){
				req.session.user = req.body.nickname;
				res.redirect('/index');
			}else{
				res.redirect('/');
			}
		}
	});
});
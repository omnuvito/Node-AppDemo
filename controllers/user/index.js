var express = require('express');
var app     = module.exports = express();
var bcrypt  = require('bcrypt');

app.set('views', __dirname + '/views');

app.get('/new_user', function (req,res) {
	res.render('add');
});

app.get('/user',function (req, res){
	res.redirect('/');
});

app.get('/update', function (req, res){
	res.render('update');
});

app.get('/profile', function (req,res){
	db.User.find({
		nickname: req.session.user
	}).exec(function (error, profiles){
		if (error) return res.json(error);
		return res.render('profile', {
			profiles: profiles,
		});
	});
});

//Modulo: Create. Inserta usuario en la base de datos.
app.post('/user', function (req, res) {
	var u = req.body;
	var salt = bcrypt.genSaltSync(2);
	var hash = bcrypt.hashSync(u.password, salt);
	var newUser = new db.User({
		nombre: u.nombre,
		apellido: u.apellido,
		nickname: u.nickname,
		email: u.email,
		password: hash
	});

	newUser.save(function (error,user) {
		if (error) res.json(error);
		res.redirect('/user');
	});
});

app.put('/user', function (req, res){
	db.User.find({
		nickname: req.session.user
	}).exec(function (error, users){
		if (error) res.json(error);
		return res.render('update',{
			users: users,
		});
	});
	newUser.save(function (error, user){
		if (error) res.json(error);
		res.redirect('/user');
	});
});
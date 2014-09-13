var express = require('express');
var app     = module.exports = express();

app.set('views', __dirname + '/views');

app.get('/new_dojo', function (req,res) {
	res.render('add');
});

//Modulo: Read. Devuelve los usuarios.
app.get('/dojo',function (req,res) {
	db.Dojo.find().exec(function (error,dojos) {
		if(error) return res.json(error);
		return res.render('index',{
			dojos: dojos,
		});
	});
});

//Modulo: Create. Inserta usuario en la base de datos.
app.post('/dojo', function (req,res) {
	var d = req.body;
	var newDojo = new db.Dojo({
		nombre: d.nombredojo,
		sensei: d.nombre,
		direccion: d.direccion,
		telefono: d.telefono,
		fecha_fundacion: d.fecha_fundacion,
		horario: d.horario,
		email: d.email
	});

	newDojo.save(function (error,dojo) {
		if (error) res.json(error);
		res.redirect('/dojo');
	});
});
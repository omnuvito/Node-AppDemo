module.exports = function (mongoose) {

	var Schema = mongoose.Schema;

	var DojoSchema = new Schema({
		nombre: String,
		sensei: String,
		direccion: String,
		telefono: String,
		fecha_fundacion: Date,
		horario: String,
		email: String
	});

	return mongoose.model('Dojo', DojoSchema);
};
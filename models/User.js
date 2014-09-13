module.exports = function (mongoose) {

	var Schema = mongoose.Schema;

	var UserSchema = new Schema({
		nombre: String,
		apellido: String,
		nickname: String,
		email: String,
		password: String
	});

	return mongoose.model('User', UserSchema);
};
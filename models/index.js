if(!global.hasOwnProperty('db')){

	var mongoose = require('mongoose');
	var dbName = 'yjiWy5va';
	var username = 'hoheim';
	var password = 'Modulus4l3j4ndr0';
	var port = '27017';

	mongoose.connect('mongodb://'+username+':'+password+'@proximus.modulusmongo.net:'+port+'/'+dbName);

	global.db = {
		mongoose: mongoose,
		User: require('./User')(mongoose),
		Dojo: require('./Dojo')(mongoose),
	};
}

module.exports = global.db;
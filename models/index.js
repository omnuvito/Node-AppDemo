if(!global.hasOwnProperty('db')){

	var mongoose = require('mongoose');
	// var dbName = 'yjiWy5va';
	var dbName	= 'app29545456';
	var username = 'hoheim';
	// var password = 'Modulus4l3j4ndr0';
	var password = 'Mongo4l3j4ndr0'
	// var port = '27017';
	var port = '10079';

	// mongoose.connect('mongodb://'+username+':'+password+'@proximus.modulusmongo.net:'+port+'/'+dbName);

	mongoose.connect('mongodb://'+username+':'+password+'@kahana.mongohq.com:'+port+'/'+dbName);

	global.db = {
		mongoose: mongoose,
		User: require('./User')(mongoose),
		Dojo: require('./Dojo')(mongoose),
	};
}

module.exports = global.db;
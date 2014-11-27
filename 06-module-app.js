var ls = require('./06-module-ls.js');

var dir = process.argv[2];
var ext = process.argv[3];

var callback = function(error, files) {
	if (error) {
		console.log('Error');
		console.log(error);
	}

	files.forEach(function(file) {
		console.log(file);
	});
};

ls(dir, ext, callback);
module.exports = function(dir, ext, callback) {
	
	var fs = require('fs');
	var path = require('path');
	
	fs.readdir(dir, function(err, list) {
		if (err) {
			callback(err);
		} else {
			var files = list.filter(function(file) {
				if (path.extname(file) == '.' + ext) {
					return file;
				}
			});

			callback(null, files);
		}
	});
};
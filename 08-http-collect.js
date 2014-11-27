var http = require('http');
var bl = require('bl');

if (!process.argv[2]) {
	console.error('Missing url');
} else {
	var url = process.argv[2];

	http.get(url, function(response) {

		response.pipe(bl(function(err, data) {
			console.log(data.length);
			console.log(data.toString());
		}));

	});

}

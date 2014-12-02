var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

server = http.createServer(function(request, response){
	
	if(request.method=='POST') {
		request.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(response);
	} else {
		response.end('Only POST');
	}
	
});

server.listen(port);

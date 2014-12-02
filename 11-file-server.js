var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

server = http.createServer(function(request, response){
	
	var stream = fs.createReadStream(file);

	stream.on('readable', function() {
		var chunk;
		while (null !== (chunk = stream.read())) {
			response.write(chunk);
			response.end();
		}
	});
	
	//Or simply
	//stream.pipe(response);
	
});

server.listen(port);

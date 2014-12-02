var http = require('http');
var url = require('url');

var port = process.argv[2];

server = http.createServer(function(request, response) {

	if (request.method == 'GET') {

		response.writeHead(200, {'Content-Type' : 'application/json'});
		
		var urlInfo = url.parse(request.url, true);
		
		var date = new Date(urlInfo.query.iso);
		
		if (urlInfo.pathname == '/api/parsetime') {
			
			response.write(JSON.stringify({
				'hour' : date.getHours(),
				'minute' : date.getMinutes(),
				'second' : date.getSeconds()
			}));
			response.end();

		} else if (urlInfo.pathname == '/api/unixtime') {
			response.write(JSON.stringify({
				'unixtime' : date.getTime()
			}));
			response.end();
		} else {
			response.end('404');
		}

	} else {
		response.end('Only GET');
	}

});

server.listen(port);

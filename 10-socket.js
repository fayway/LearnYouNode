var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

server = net.createServer(function(socket){
	
	data = strftime('%F %H:%M\n');
	socket.write(data);
	socket.end();
	
});

server.listen(port);

var fs = require('fs');

if (!process.argv[2]){
	console.log('Missing file arg');
} else {
	var file = process.argv[2];
	fs.readFile(file, function callback(err, buffer) {
		var str = buffer.toString();
		var lines = str.split('\n').length-1;
		console.log(lines);
	});
}

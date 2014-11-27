var fs = require('fs');

if (!process.argv[2]) {
	console.log('Missing file arg');
} else {
	var file = process.argv[2];
	var buffer = fs.readFileSync(file);
	var str = buffer.toString();
	console.log(str.split('\n').length - 1);
}
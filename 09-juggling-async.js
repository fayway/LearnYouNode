var http = require('http');
var bl = require('bl');

var results = [];
var counts = 0;

function printResults() {
	results.forEach(function(result){
		console.log(result);
	});
}


function retreiveResults(i) {
	http.get(process.argv[2 + i], function(response) {
		response.pipe(bl(function(err, data) {
			results[i] = data.toString();
			
			counts++;
			if (counts==3){
				printResults();
			}
			
		}));
	});
}

for (var i=0; i<3; i++){
	retreiveResults(i);
}



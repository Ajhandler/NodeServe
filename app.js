

//create web server
var http = require('http');
http.createServer(function (req, res) {
  homeRoute(req,res);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

function homeRoute(req, res){
	if(req.url === "/"){
	 res.writeHead(200, {'Content-Type': 'text/plain'});
  	 res.write("Header\n");
  	 res.write("Search\n");
  	 res.end("Footer\n")
  }
}

function userRoute(req,res){
	var username = req.url.replace("/", "")
	if(username.length > 0 ){
		 res.writeHead(200, {'Content-Type': 'text/plain'});
  	   	res.write("Header\n");
  	 	res.write("Search\n");
  	 	res.end("Footer\n")
	}
}
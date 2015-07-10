var renderer = require("./renderer.js")

var commonHeader = {'Content-Type': 'text/html'}

function home(req, res){
	if(req.url === "/"){
	 res.writeHead(200, commonHeader );
  	 renderer.view("header",{}, res);
  	 renderer.view("footer",{}, res);
     res.end();
  }
}

function user(req,res){
	var username = req.url.replace("/", "")
	if(username.length > 0 ){
		 res.writeHead(200, commonHeader);
  	   	renderer.view("header",{}, res);
  	 	 res.write(username + "\n");
  	 	 renderer.view("footer",{}, res);
       res.end();
	}
}

module.exports.home = home;
module.exports.user = user
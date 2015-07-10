var fs = require("fs");

function view(templateName, values, response){
	//read from the template files
	var fc = fs.readFileSync("./views/"+ templateName + ".html");

	//insert values into content

	//write out to the response
  		response.write(fc);
}

module.exports.view = view;
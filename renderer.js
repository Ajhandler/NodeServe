var fs = require("fs");

function mergeValues(values,content){
	//cycle over keys
	for(var key in values){
		//replace all {{key}} with the vaules from the values object
		content = content.replace("{{"+ key +"}}", values[key]);
	}
	return content
}

function view(templateName, values, response){
	//read from the template files
	var fc = fs.readFileSync("./views/"+ templateName + ".html", {encoding: "utf8"});

	//insert values into content
	fc = mergeValues(values,fc)
	//write out to the response
  		response.write(fc);
}

module.exports.view = view;
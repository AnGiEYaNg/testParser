var express = require('express');
var app = express();

//serves up angular js files and htmls
app.use(express.static(__dirname+'/public'));

//serves up css files
app.use(express.static(__dirname+'/assets'));

//homepage
app.get('/', function(req, res){
	res.sendFile(__dirname+"/index.html");
})

app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
})
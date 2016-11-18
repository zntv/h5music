var express = require('express');
var path=require('path');
var app=express();
app.use(express.static(path.join(__dirname, '')));
app.listen(80,"192.168.1.10", function () {
	console.log('listen port:80 http://localhost');
});
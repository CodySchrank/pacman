//DEPENDENCIES
var express = require('express');
var app = express();

//SETUP
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
var server = app.listen(3000,function(){
	console.log('Listening on port 3000');
});

//ROUTES
app.get('/',function(req,res){
	res.render('index');
});

//SOCKETS
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
	console.log(socket.id);
});
//server.js
/* This code was written by thealchemy<mvikram9.3@gmail.com>*/

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.get('/',function(req,res,next){
	res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

io.on('connection',function(client){
	console.log('client connected');
	client.on('join',function(data){
	 console.log(data);
});
	client.on('messages',function(data){
	client.emit('thread',data);
	console.log(data);
	client.broadcast.emit('thread',data);
	});
});




server.listen(7777);

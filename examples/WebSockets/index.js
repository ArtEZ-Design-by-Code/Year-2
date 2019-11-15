const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.Server(app);

const io = socketIO(server);

const color = {
	r: 0,
	g: 0,
	b: 0
};

setInterval(() => {
	color.r = Math.floor(Math.random() * 256);
	color.g = Math.floor(Math.random() * 256);
	color.b = Math.floor(Math.random() * 256);

	io.emit('background', color);
}, 1000);

io.on('connection', socket => {
	console.log('A user has connected');

	socket.emit('background', color);
});

app.use(express.static(`${__dirname}/app`));

server.listen(8080);

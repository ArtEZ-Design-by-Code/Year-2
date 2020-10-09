const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

let cursors = {};

function newSocketConnection(socket) {
	cursors[socket.id] = {
		x: 0,
		y: 0
	};

	function socketDisconnected() {
		delete cursors[socket.id];
	}

	function cursorMoved(coordinate) {
		cursors[socket.id] = coordinate;

		io.emit('cursor-object-changed', cursors);
	}

	socket.on('disconnect', socketDisconnected);
	socket.on('cursor-moved', cursorMoved);
}

io.on('connection', newSocketConnection);

app.use(express.static('./app'));

server.listen(8080);

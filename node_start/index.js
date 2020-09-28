const express = require('express');
const app = express();

let counter = 0;

function getCounter(req, res) {
	counter++;
	res.send('Hello! You are visitor number ' + counter + '. Welcome!');
}

app.use(express.static('./app'));
app.get('/counter', getCounter);

app.listen(8888);

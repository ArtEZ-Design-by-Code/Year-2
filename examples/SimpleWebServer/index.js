const express = require('express');

const app = express();

app.use(express.static(__dirname + '/app'));

// app.get('/', function(req, res) {
// 	res.send("Hello world!");
// });

app.listen(9999);

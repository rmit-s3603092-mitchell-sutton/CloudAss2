const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static('public'))

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'app.js'));
});

app.listen(8080);
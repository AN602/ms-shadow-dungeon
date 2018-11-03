import config from "../config/server.config";

const root = require('app-root-path').path;
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('dist'));
app.use(express.static('assets'));

app.get("/", (req, res) => {
	res.sendFile(root + '/views/index.html');
});

app.listen(config.port, () => {
	console.log(`Example app listening on port ${config.port}!`)
});
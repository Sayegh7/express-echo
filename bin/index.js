#!/usr/bin/env node

var express = require('express');
var body_parser = require('body-parser');
var app = express();
var PORT = process.argv[2];
app.use(body_parser.json())
app.all('*', function (req, res) {
  console.log({headers: req.headers, body: req.body});
  res.json({headers: req.headers, body: req.body});
})

if(isNaN(parseFloat(PORT))){
  console.log("Invalid port number, defaulting to 8080");
  PORT = 8080;
}
app.listen(PORT, function () {
  console.log("listening on port " + PORT);
})

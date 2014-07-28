'use strict';

var express = require('express'); //allows browser to talk to node
var app = express(); //app represents a physically running web application
var morgan = require('morgan');

//configs express web server
app.set('views', __dirname + '/views'); // look for files in the views directory
app.set('view engine', 'ejs'); // look for files with ejs file extension

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.render('index');// it'll look in views directory for index file
});

app.get('/dogs', function(req, res){
  res.render('dogs');
});

app.get('/ninja', function(req, res){
  res.render('ninja');
});

app.get('/pirates', function(req, res){
  res.render('pirates');
});

app.listen(3000, function(){ // listen to the port (3000)
  console.log('Express.js is listening... ');
});

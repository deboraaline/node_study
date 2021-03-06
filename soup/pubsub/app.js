'use strict';

var express = require('express');
var app = express();
var badges = require('./controllers/badges');

app.use(express.json());

app.post('/', badges.save, badges.send, function(request, response){
  response.send('\n\nDONE\n\n');
});

app.get('/badges', badges.get);

app.listen(8000, function(){
  console.log("Server is listening on port %d", 8000);
});
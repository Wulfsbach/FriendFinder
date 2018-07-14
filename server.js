var express = require ("express");
var path = require('path');
var bodpar= require('body-parser');
var routesHtml = require('./app/routing/htmlRoutes');
var app= express();

var port = process.env.port || 3707;


app.use('/', routesHtml);
app.use('/survey',routesHtml);
app.listen(port,function(){
    console.log("Server listening on:localhost:" + port);
});


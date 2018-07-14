var express = require ("express");
var path = require('path');
var bodpar= require('body-parser');
var matches = require('./app/data/friends');
// -------------------------------------------------------------------------------------------//

var html = require('./app/routing/htmlRoutes.js');

var app= express();
// console.log(matches);

var port = process.env.port || 3707;
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
app.use('/', html);
app.use('/survey', html);
app.use(bodpar.json());

app.listen(port,function(){
    console.log("Server listening on:localhost:" + port);
});


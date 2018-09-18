var express = require ("express");
var path = require('path');
var bodyParser= require('body-parser');

// -------------------------------------------------------------------------------------------//

var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');

var app= express();
// console.log(matches);

var port = process.env.PORT || 3707;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./app/public')));

htmlRoutes(app);
apiRoutes(app);

app.listen(port,function(){
    console.log("Server listening on:localhost:" + port);
});


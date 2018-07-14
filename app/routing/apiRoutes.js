var express = require('express');
var path = require('path');
var matches = require('../data/friends');
// var router = express.Router();

// router.get('/api/friends', function(req,res){
//   res.send('hello');
//   s.json(matches);

// });
 
// module.exports=router;  // re

var app = express();

module.exports = function(app){

    app.set('json spaces' , 3);
    app.get('/api/friends',function(req,res){
        
        res.json(matches);
       
    });


    app.post('/api/friends', function(req,res){

        
    })
};




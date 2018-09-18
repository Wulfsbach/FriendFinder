var fs= require("fs");
var path = require('path');
var matches = JSON.parse(fs.readFileSync('app/data/friends.js', "utf8"));



 function apiRoutes(app){

  
    app.get('/api/friends',function(req,res){
        
        return res.json(matches);
       
    });


    app.post('/api/friends', function(req,res){
// var me = request.body;

// var match= topMatch(me,matches);

// matches.push(me);

// friends = json.stringify(matches);
// fs.writeFile(__dirname + "/..data/friends.js", matches, function(err) {
//     if (err) return console.log(err);
// })

    })
};



module.exports = apiRoutes;
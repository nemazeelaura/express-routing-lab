var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [{"id":1,"name":"Chewing Gum","color":"Red"},
              {"id":2,"name":"Pez","color":"Green"}, {"id":3,"name":"Marshmallow","color":"Pink"},
              {"id":4,"name":"Candy Stick","color":"Blue"}

              ];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
    // Hint: we want all candies in JSON format
	res.json(candies);
});

// Fill out the ret of the routes here
//get candy by id
router.get('/:id', function(req, res){
    var parsedData = parseInt(req.params.id);
    console.log(typeof(parsedData));
    for(i =0; i < candies.length; i++){
        if(parsedData === candies[i].id){
            res.json(candies[i]);
        }
    }
});

//post to array adding another candy
router.post('/', function(req,res) {
    req.body.id = candies.length + 1;
    candies.push(req.body);
    res.send(req.body);
    console.log(req.body);
});

//updating candy  w id 3 with new info
router.put('/:id', function(req,res) {
    var parsedData = parseInt(req.params.id);
    console.log(parsedData);
    // candies.parsedData;
    for(i =0; i < candies.length; i++){
        if(parsedData === candies[i].id){
            candies[i] = req.body;
             res.send(candies[i]);
        }
    }

});

// deleting candy with id 2 and adding message deleted

router.delete('/:id', function(req,res) {
    var parsedData = parseInt(req.params.id);
    console.log(parsedData);
      for(i =0; i < candies.length; i++){
        if(parsedData === candies[i].id){
            console.log(i);
            candies.splice(i, 1);
             res.send({"message":"deleted"});
        }
    }

 });




module.exports = router;
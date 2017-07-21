const express = require('express');
router = express.Router();
const bodyParser = require('body-parser');

//var candies;
const candies = [
	{
		"id": 1,
		"name" : "pez",
		"color" : "various"
	},

	{
		"id": 2,
		"name" : "sweet-tarts",
		"color" : "purple"	
	},

	{
		"id": 3,
		"name" : "starburts",
		"color" : "red"
	},

	{
		"id": 4,
		"name" : "Mr. Goodbar",
		"color" : "chocolate"
	}
];

//What would need to go into candies
//in order to pass our first test?
router.get('/', function(req,res) {
	// What would go here? 
	res.json(candies);
	// Hint: we want all candies in JSON format
});

router.get('/:id', function(req,res) {
	res.send(candies[req.params.id - 1]);
});

router.post('/', function(req,res) {
	candies.push(req.body);
	res.send(req.body);
});

router.get('/:id', function(req,res) {
	candies[req.params.id]=req.body;
	res.send();
});

router.put('/:id', function(req,res) {
	candies[req.params.id -1]=req.body;
	res.send(req.body);
});

router.get('/', function(req,res) {
	res.send(candies);
});

router.delete('/:id', function(req,res) {
	candies.splice(req.params.id -1, 1);
	res.send({"message":"deleted"});
});

router.get('/', function(req,res) {
	res.send(candies);
});

// Fill out the rest of the routes here

module.exports = router;
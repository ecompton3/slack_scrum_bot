"use strict"
var express = require("express");
var router = express.Router();

var configRoutes = function() {
	
	router.post('/slack/create-scrum', function(req,res) {
		res.status(200).send('Creating Scrum');
	});
	
	router.post('/slack/create-reminder', function(req,res) {
		res.status(200).send('Creating Reminder');
	});
	
	router.get('/test', function(req,res) {
		res.send('it lives!');
	});
	
	return router;
}

module.exports = configRoutes;
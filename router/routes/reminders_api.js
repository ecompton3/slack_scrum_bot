"use strict"
var express = require("express");
var router = express.Router();

var reminderRoutes = function() {
	
	router.get('/test', function(req,res) {
		res.send('it lives!');
	});
	
	return router;
}

module.exports = reminderRoutes;
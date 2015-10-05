"use strict"
var express = require("express");
var router = express.Router();

var configRoutes = function() {
	
	router.get('/test', function(req,res) {
		res.send('it lives!');
	});
	
	return router;
}

module.exports = configRoutes;
"use strict"
var express = require("express");
var router = express.Router();

var rolesRoutes = function() {
	
	router.get('/test', function(req,res) {
		res.send('it lives!');
	});
	router.post('/web/roles', function(req,res) {
		res.send('it lives!');
	});
	return router;
}

module.exports = rolesRoutes;
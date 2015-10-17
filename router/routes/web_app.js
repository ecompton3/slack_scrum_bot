"use strict"
let express = require("express");
let router = express.Router();
let dbHelper = require("../../utilities/db_helper");
let appRoutes = function() {
	
	router.get('/', function(req,res) {
        res.render('pages/scrum.html',{title: "Hey!"});
    });
	
	router.get('/reminder', function(req,res) {
		res.status(200).render('pages/reminder.html',{title: "Hey2!"});	
	});
	
	router.post('/roles', function(req,res) {
		let standupInfo = req.body;
		standupInfo.type = "scrum";
		standupInfo.roles = {};
		dbHelper.insertDocument(standupInfo, (err, body) => {
			if(!err){
				res.status(200).render('pages/roles.html',{title: "Hey3!"});
			} else {
				res.status(500).send(err);
			}
			
		});
		
	});
	
	router.post('/summary', function(req,res) {
		console.log(req.body);
		res.status(200).render('pages/summary.html',{title: "Hey4!"});
	});
	
	return router;
}

module.exports = appRoutes;
"use strict"
var express = require("express");

/*eslint new-cap: 0*/
var router = express.Router();
var routes = function (passport) {
    
    var reminders = require('./routes/reminders_api')();
    var roles = require('./routes/roles_api')();
    var config = require('./routes/config_api')();
    router.use('/reminders', reminders);
    router.use('/roles', roles);
    router.use('/config', config);
    return router;

};
module.exports = routes;

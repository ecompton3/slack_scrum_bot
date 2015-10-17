"use strict"
let express = require("express");

let router = express.Router();
let routes = function (passport) {
    
    let reminders = require('./routes/reminders_api')();
    let roles = require('./routes/roles_api')();
    let config = require('./routes/config_api')();
    let app = require('./routes/web_app')();
    router.use('/reminders', reminders);
    router.use('/roles', roles);
    router.use('/config', config);
    router.use('/app', app);
    router.get('/', function(req, res) {
        res.redirect('/app');
    });
    return router;

};
module.exports = routes;

"use strict";
let cfenv = require('cfenv');
let appEnv = cfenv.getAppEnv()
let creds = appEnv.getServiceCreds("scrum-cloudant-cloudantNoSQLDB");
if(!creds) {
	creds ={url: require('./cloudant-dev.json').url}
}
let cloudant = require('cloudant')(creds.url);
module.exports = cloudant;
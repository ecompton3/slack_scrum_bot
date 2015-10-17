"use strict";
let schedule = require('node-schedule');
let express = require("express"),
  http = require("http"),
  path = require("path"),
  bodyParser = require("body-parser"),
  serveStatic = require("serve-static"),
  cookieParser = require("cookie-parser"),
  slackConfig = require("./config/slack-config.json"),
  cfenv = require('cfenv'),
  request = require('request'),
  session = require("express-session"),
  nunjucks = require('nunjucks'),
  moment = require("moment-timezone");
  let appEnv = cfenv.getAppEnv();
  let FileStore = require("session-file-store")(session);
  // Create the application.
let app = express();
// all environments
let port = (appEnv.port || 3000)
app.set("port", port);
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ store: new FileStore(), resave: "false", saveUninitialized: "false", secret: "keyboard dog", secure: false }));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(bodyParser.json());

nunjucks.configure('./views', {
    autoescape: true,
    express: app
});
let router = require('./router')();
app.use(router);
//TODO Time Conversion
/*
    let scrumTime = moment.tz(`${scrum.startDate} ${scrum.time}`, `${scrum.timezone}`);
		console.log(scrumTime.format());
		console.log(scrumTime.utc().format());
*/
let j = schedule.scheduleJob('00 15 * * 1-5', function(){
    let responseText = "Standup Time! The call in code is 39569029. If the call is cancelled or you cannot make the call please post the following: \n " +
    "What you did yesterday, What you are going to do today, and any blockers you may have";
   
   let slackOptions = {
                url: slackConfig.slack_url,
                method: "POST",
                json: true,
                body: {
                  text : responseText,
                  channel: "scrum-bot-testing",
                  username: "Scrum Bot",
                  icon_emoji: ":information_desk_person:"
                }
                };
                request(slackOptions, function(error, response, body) {});
});

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});
module.exports = app;
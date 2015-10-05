var schedule = require('node-schedule');
var express = require("express"),
  http = require("http"),
  path = require("path"),
  bodyParser = require("body-parser"),
  serveStatic = require("serve-static"),
  cookieParser = require("cookie-parser");
  // Create the application.
var app = express();
// all environments
app.set("port", 3000);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(bodyParser.json());
var router = require('./router');
app.use(router);
var j = schedule.scheduleJob('00 15 * * 1-5', function(){
    var responseText = "Standup Time! The call in code is 39569029. If the call is cancelled or you cannot make the call please post the following: \n " +
    "What you did yesterday, What you are going to do today, and any blockers you may have";
   
   var slackOptions = {
                url: "https://hooks.slack.com/services/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",
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
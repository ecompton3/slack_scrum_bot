# slack_scrum_bot
A simple bot for Slack that sends messages at specfic times. Useful for Scrum Teams

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/ecompton3/slack_scrum_bot)

To develop and run the project:
1. `git clone`
2. `npm install`
3. `npm start` This will start the server running on localhost:3000

####Current Scrum Bot
Current scrum bot is a cron job running on Bluemix which posts to a designated slack channel with a specific quote at a designated time. We have two messages that are being sent

1. At scrum time ex. 9:45AM the scrum bot will post: ``Standup Time! The call in code is #######. If the call is cancelled or you cannot make the call please post the following: What you did yesterday, What you are going to do today, and any blockers you may have``
2. At end of day ex. 3:00PM the scrum bot will post ``Please Remember To Update Your Tasks!``

#####Plans for Scrum bot
1. Modularize deployment of the cron job so that each scrum master can control their own messages.
2. Create a data model for the posts.
3. Create a data model for the scrum bot config.
4. `idea` create slash commands which can be queried for roles on the team. ex. (`/scrum ios lead`returns "John Apples") which would look at the slack channel that the query is performed in and return the corresponding role.
5. `idea` setup cloudant to store all of the config and roles data.
6. `idea` can we query jazzhub for current points?

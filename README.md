# CheersBot 🍺
🎉 Beep boop bop it's Cheers Bot! 🎉

Feeling  lonely 😜 when you cheers 👏 on your own 🤦‍🙅‍♀️? Invite the bot to your server using [this link!](https://discordapp.com/oauth2/authorize?client_id=735652353293811722&scope=bot&permissions=3136) 🙌😩

Note 📝:
If you are forking this project, add your bot's token to the [example env](.env.example), and replace `<INSERT_TOKEN>` with your bot's token which is found on the bot tab of the developer portal after you have created your own bot

# Steps to starting your own Discord Bot 🚀
## Creating the bot 🧲
Head over to [Discord's Developer Portal](https://discord.com/developers/applications), and create a new application.
Figure out a name for your bot, and create the bot.

Once you've created your bot, copy the `CLIENT ID` and optionally give your bot an icon and description.

Then, navigate to the `Bot` page in the portal, (Make sure you're selecting the right app), and add your bot.

Then, you will want to create your [Bot's invitation link](https://discordapi.com/permissions.html). Select all relavant permissions needed, and insert your client ID, and copy your link.

For testing purposes, create a new discord server and add your bot to that.

## Creating the Backend Server 💻

First off, download and configure [Node.js](https://nodejs.org/en/) if you haven't already, then run `npm init`, using the default settings.

For Node.js, currently the best library for discord is [Discord.js](https://discord.js.org/#/)

To install it, run `npm install discord.js`

### Hiding your token 🔒
This step is optional, use it if you want to hide your token in public projects.
If you want to skip this step, just replace all future occurences of `process.env.TOKEN` with your token.

First off, copy your bot's token, which is available in the `Bot` section of your developer portal.

Create a `.env` file and add the following:
```
TOKEN="<Copied_Token>"
```
Replacing `<Copied_Token>` with the token you have copied.

Afterwards, run `npm install dotenv`

### Linking the discord bot 🔗

Create a file which will act as the entry point to the server, which will be `template.js` for this example. 

A basic bot could look like this: [File Link](template.js)
```javascript
// Loads your .env variables into process.env
require('dotenv').config()
const Discord = require('discord.js')

// Alternatively paste your token here if the project is not public
const TOKEN = process.env.TOKEN

// Create a new client object
const client = new Discord.Client()

// Notifies you if the bot successfully runs, When the 'ready' event is emitted
client.on('ready', () => console.log('The Bot is now online!'))

// Add your bot's logic here

// For example, this will mimic anything a user says, when a 'message' is emitted:
client.on('message', message => {
	// Does nothing if a bot sent the message
	if (message.author.bot) return
	message.channel.send(message.content)
})

// Always keep this in the end of the file
client.login(TOKEN)

```

To run your code, type `node filename.js` in the terminal, where filename.js is your file which you want to run

### Moving onwards
This is the end of the tutorial, for more on what you can do, Read the [Discord.js Docs](https://discord.js.org/#/docs/main/stable/general/welcome).

As an example on what you can do, [check out CheersBot's Code](index.js)

## Deploying to Heroku
If you haven't already, install [Git](https://git-scm.com/) and [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

### Create a Procfile
Create a file called `Procfile`, and add the following, replacing `index.js` with the file you want to run

```
web: node index.js
```

This will tell Heroku how to run your application

### Initialize a git repository in your CWD 

```
git init
```

### Create a new Heroku app
```
heroku create
```
This will create a new heroku app which you can push your code into with git
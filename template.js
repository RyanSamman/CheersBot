// Loads your .env variables into process.env
require('dotenv').config()
const Discord = require('discord.js')

// Alternatively paste your token here if the project is not public
const TOKEN = process.env.TOKEN

// Create a new client object
const client = new Discord.Client()

// Notifies you if the bot successfully runs, (When the 'ready' event is fired)
client.on('ready', () => console.log('The Bot is now online!'))

// Add your bot's logic here

// For example, this will mimic anything a user says when a message is recieved:
client.on('message', message => {
	// Does nothing if a bot sent the message
	if (message.author.bot) return
	message.channel.send(message.content)
})

// Always keep this in the end of the file
client.login(TOKEN)

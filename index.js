// Loads your .env variables into process.env
require('dotenv').config()
const Discord = require('discord.js')

const TOKEN = process.env.TOKEN

// Exit if no token is found
if (!TOKEN) {
	console.log('Token was not found!')
	process.exit(1)
}

const client = new Discord.Client()

client.on('ready', () => console.log('The Bot is now online!'))

const reactionMessages = [
	"Cheers m8!",
	"Cheers!",
	"Bottom's Up Chap!",
	"🍺",
	"🍻",
	"Kampaiii :D!",
]

const sendMessage = message => {
	const i = Math.floor(Math.random() * reactionMessages.length)
	message.channel.send(reactionMessages[i])
}

const addReaction = message => {
	const reaction = Math.random() > 0.5 ? '🍺' : '🍻'
	message.react(reaction)
}

client.on('message', message => {
	if (message.author.bot || !message.content.match(/cheers/gmi)) return
	
	sendMessage(message)
	addReaction(message)
})

client.login(TOKEN)

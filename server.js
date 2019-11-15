const fs = require('fs');
const Discord = require ("discord.js");
const {prefix} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.login (process.env.SECRET)
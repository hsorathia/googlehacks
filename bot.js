const fs = require("fs");
const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

fs.readdir('./commands/', (err, files) => { 
  if(err) console.error(err);

  let cmds = files.filter(f => f.split('.').pop() === 'js');
  
  if(cmds.length <= 0) {
    return console.log('No command files found...');
  }

  console.log(`Loading ${files.length} commands...`);

  cmds.forEach((f, i) => { 
    const command = require(`./commands/${f}`);
    //console.log(`Loading ${f}`);
    if(Array.isArray(command.help.name)){
      command.help.name.forEach(e => client.commands.set(e,command));
    }
    else client.commands.set(command.help.name, command);
  }); 
});

client.login (process.env.SECRET)
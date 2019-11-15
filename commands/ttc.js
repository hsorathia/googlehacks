const example = require(`/app/example.js`);
exports.run = async (bot, message, args) => {
  //if (!message.member.hasPermission("ADMINISTRATOR")) return;
  var json = {
    Name: "Game Night",
    Description: "Have fun",
    Category : "Events",
    Date: "Nov 22 6pm-10pm",
    Link: "https://discord.js.org/#/docs/main/stable/class/Client"
  }
  example.createnewchannel(message.guild, json);
};

exports.help = {
  name: ["ty"],
  desc: "(DEV ONLY) Test command",
  admin: true,
  include: false
};

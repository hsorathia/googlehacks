const example = require(`/app/example.js`);
exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
  var json = {
    Name: "jerry is dumb",
    Description: "why does he go to hackathons if he big bad",
    Date: "Nov 22 6pm-10pm"
  };
  var link = "https://discord.js.org/#/docs/main/stable/class/Client";
  example.createnewchannel(message.guild, json, link);
};

exports.help = {
  name: ["t"],
  desc: "(DEV ONLY) Test command",
  admin: true,
  include: false
};

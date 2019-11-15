
exports.run = async (bot, message, args) =>
{
  if(!message.member.hasPermission("ADMINISTRATOR"))return
  var json = {
    channelname: 'jerry is dumb'
  }

exports.help = {
  name: ['t'],
  desc: '(DEV ONLY) Test command',
  admin:true,
  include: false
}
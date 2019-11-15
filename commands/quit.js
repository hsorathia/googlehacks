exports.run = async (bot, message, args) =>
{
  if(!message.member.hasPermission("ADMINISTRATOR"))return
  await message.delete();
  process.exit(1);
}

exports.help = {
  name: ['quit'],
  desc: '(DEV ONLY) Test command',
  admin:true,
  include: false
}
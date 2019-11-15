module.exports = async (client) => {
  console.log(`googhax ${client.channels.size} Channels, ${client.guilds.size} Guilds, ${client.users.size} Users.`);
  var activityType = 0;
	try {
    console.log("start");
		//let link = await client.generateInvite(["ADMINISTRATOR"]);
    let link = await client.generateInvite(["EMBED_LINKS"]);
		//console.log (link);
	}
	catch(e) {
    console.log (`Ready Error`);
		console.log (e.stack);
	}

}
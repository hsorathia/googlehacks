var prefix = "!";
module.exports = async (client, message) => {
  let args = message.content.split(" ");
	let cmd = args[0].toLowerCase();
	args = args.slice(1);
	if (!cmd.startsWith(prefix)) return;
  let comm = client.commands.get(cmd.slice(prefix.length)); // We need to get command from our collection
  if(cmd.startsWith(prefix)&&!cmd.startsWith(prefix + prefix)){  // If command object starts with prefix
    if(comm) {
      comm.run(client, message, args); // If comm object isn't null, execute command code
    }
    else {
      /**
       * Direct the alias commands to the right js files first before handling default commands
       */
      
      switch (cmd) {
          case (prefix + "t"):
          //comm = client.commands.get("translate");
          //comm.run(client, message, args);
          break;
          
        default:
          console.log("Did not find command");
      }
    }
  }

}

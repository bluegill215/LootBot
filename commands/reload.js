exports.run = (client, message, args) => {
  
  if(message.author.id !== client.config.ownerID) {
	message.channel.send("You failed the DC15 persuasion check.");
  	return;
  }

  if(!args || args.size < 1) return message.reply("I've reloaded NOTHING!");
  const commandName = args[0];
  // Check if the command exists and is valid
  if(!client.commands.has(commandName)) {
    return message.reply("you be cray.");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`the command ${commandName} has been reloaded`);
};
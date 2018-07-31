exports.run = (client, message, args) => {
  
  if(message.author.id !== client.config.ownerID) {
	message.channel.send("You failed the strength check.");
  	return;
  }

  if(args == 'coins') {
  	message.channel.send("You got some Botcoin!");
  	return;
  }

};
exports.run = (client, message, args) => {

	let botresponse = '';
	botresponse += '**!mine**\n';
	botresponse += 'This doesn\'t do anything yet!.\n';
	botresponse += '**!bank**\n';
	botresponse += 'This doesn\'t do anything yet!.\n';
	botresponse += '**!me**\n';
	botresponse += 'This doesn\'t do anything yet!.\n';
	botresponse += '**!buy <store|product keyword>**\n';
	botresponse += 'This doesn\'t do anything yet!.\n';
	botresponse += '**!reload <command>**\n';
	botresponse += 'This will refresh the command with any updates.\n';

	message.channel.send('DM Sent!');
	message.author.send(botresponse);

}
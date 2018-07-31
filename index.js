const Discord = require("discord.js");
const path = require('path');
const fs = require("fs");

const client = new Discord.Client();
const config = require("./auth.json");

client.config = config;

const prefix = "$";

client.on("ready", () => {
  console.log("Logged on and ready to distribute loot!!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if(!message.author.username.startsWith("ste")) {
  	message.channel.send("NO COINS FOR YOU!");
    return;
  }

  if (message.content.startsWith(prefix+"coins")) {
    message.channel.send("Here! Have some coins!");
  }
});

client.login(config.token);
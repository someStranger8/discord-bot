// imports
require("dotenv").config();
const Discord = require("discord.js");

// token && prefix
const TOKEN = procces.env.TOKEN;
const PREFIX = "root@root:~# ";

// login
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]});
client.login(TOKEN);

// success message
client.on("ready", () => {
    console.log("logged in as ${client.user.tag}");
});

// listen for message
client.on("message", msg => {
    if (!msg.content.startsWith(PREFIX)) return;
    const args = msg.content.slice(PREFIX.length).split("/ +/");
    const command = args.shift().toLowerCase();
  
    // create commands
    if (command === "ping") return msg.reply("pong");
});

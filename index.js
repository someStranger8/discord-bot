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
client.on("message", async msg => {
    if (!msg.content.startsWith(PREFIX)) return;
    const args = msg.content.slice(PREFIX.length).split("/ +/");
    const command = args.shift().toLowerCase();
  
    // create commands
    if (command === "ping") return msg.reply("pong");
    if (command === "people") return msg.reply("there are ${msg.guild.messageCount} membes")
    if (command === "poll") {
        let message = await msg.reply(args.join(" "));
        await message.react("yes");
        await message.react("no");
    }
    if (command === "avatar") {
        const embed = new Discord.MessageEmbed()
            .setTitle("User Avatar")
            .setColor("#0099ff")
            .setImage(msg.author.avatarURL())
            .setThumbnail(msg.author.avatarURL())
            .setTimestamp()
        msg.channel.send({embeds: [embed]});
    }
});

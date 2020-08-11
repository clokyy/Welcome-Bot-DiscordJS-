const Discord = require('discord.js');
const bot = new Discord.Client();

const token = "YOUR_BOT_TOKEN";

const PREFIX = "!"

var version = "1.0.1";

bot.on('ready', () => {
  console.log("This bot is online!");
})

bot.on('guildMemberAdd', member => {

        const WelcomeChannel = member.guild.channels.cache.find(channel => channel.id === '742632775835713536');
        if(!WelcomeChannel) return;

        WelcomeChannel.send(`Welcome to Clokyy Fan Server, ${member}, please read the rules channel!`)
});





bot.login(token);

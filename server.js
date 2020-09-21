


require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


                                                                                                                                                      
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix, devs } = require("./config.js");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
const guildInvites = new Map();
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





const db = require("quick.db")


const applyText = (canvas, text) => {
const ctx = canvas.getContext('2d');


let fontSize = 32;

do {
  
  ctx.font = `${fontSize -= 10}px sans-serif`;
  //avatar size
} while (ctx.measureText(text).width > canvas.width - 220);


return ctx.font;
};


const guildInvites = new Map();

client.on('inviteCreate', async invite => guildInvites.set(invite.guild.id, await invite.guild.fetchInvites()));
client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
    client.guilds.cache.forEach(guild => {
        guild.fetchInvites()
            .then(invites => guildInvites.set(guild.id, invites))
            .catch(err => console.log(err));
    });
});



client.on('guildMemberAdd', async member => {
  
  
const catchedInvites = guildInvites.get(member.guild.id)
    const newInvites = await member.guild.fetchInvites();
    guildInvites.set(member.guild.id, newInvites)
    try {
        const usedInvite = newInvites.find(inv => catchedInvites.get(inv.code).uses < inv.uses)
db.add(`invites_${member.guild.id}_${usedInvite.inviter.id}`, 1)
db.set(`inviter_${member.id}`, usedInvite.inviter.id)
let inv = db.fetch(`invites_${member.guild.id}_${usedInvite.inviter.id}`)
    } catch (err) {
        console.log(err)
    }


	const channel = member.guild.channels.cache.find(ch => ch.name === 'per');
	if (!channel) return

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./welcome.png');
	ctx.drawImage(background, 0, 5, canvas.width, canvas.height);

	//ctx.strokeStyle = '#74037b';
	//ctx.strokeRect(0, 0, canvas.width, canvas.height);
	ctx.font = applyText(canvas, member.displayName);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(member.displayName, canvas.width / 2.4, canvas.height / 1.5);

	ctx.beginPath();
	ctx.arc(125, 125, 99, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 20, 20, 200, 207);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome.png');

client.channels.cache.get('748301174049996840').send(`*amoungtheclouds :* <@${usedInvite.inviter.id}>`, attachment);
  


});


    


   











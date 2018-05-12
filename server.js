const Discord = require("discord.js");
const Music = require('discord.js-musicbot-addon');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

const TOKEN = "Token ID";

var eightball = [
    "Yes!",
    "No.",
    "Maybe.",
    "Ask me later.",
    "You can answer that.",
    "Go away!",
]

var PREFIX = "+";

var ownerID = "405101606217187328";

var servers = {};

bot.on("ready", function() {
    console.log("+--------------+");
    console.log("|  BOT ONLINE  |");
    console.log("+--------------+");

    bot.user.setActivity("busy being dumb| +Help");
    bot.user.setStatus('ON');
  
});

const music = new Music(bot, {
    prefix: '+',
    thumbnailType: "default",
    global: false,
    maxQueueSize: 20,
    defVolume: 50,
    anyoneCanSkip: false,
    clearInvoker: false,
    messageHelp: false,
    enableQueueStat: true,
    anyoneCanAdjust: false,
    ownerOverMember: true,
    anyoneCanLeave:  false,
    botOwner: '405101606217187328',
    requesterName: true,
    inlineEmbeds: true,
    disableHelp: true,
    playCmd: "play",
    skipCmd: "skip",
    queueCmd: "queue",
    pauseCmd: "pause",
    resumeCmd: "resume",
    volumeCmd: "volume",
    leaveCmd: "leave",
    clearCmd: "clear",
    youtubeKey: 'AIzaSyDkgYOPnh3UnLf1ihBmqugCeXGtfUaDQ3U'
});

bot.on("guildCreate", guild => {
console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

bot.on("guildDelete", guild => {
console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});
    

bot.on("message", async message => {

    if (message.author.equals(bot.user)) return;

    if(message.channel.type != "text") return message.channel.send("Please use commands in the server!");  

    if (message.content.toLowerCase().includes("dont")) {
        message.reply("don't*");
    }
    if (message.content.toLowerCase().includes("cant")) {
        message.reply("can't*");
    }
    if (message.content.toLowerCase().includes("wont")) {
        message.reply("won't*");
    }
    if (message.content.toLowerCase()==("hello")) {
        message.reply("Hi!");
    }
  if (message.content.toLowerCase()=="hello there") {
        message.reply("https://i.imgflip.com/1r3fn3.jpg");
    }
    if (message.content.toLowerCase().includes("hi ")) {
        message.reply("Yo!");
    }
  if (message.content.toLowerCase()=="hi") {
        message.reply("Yo!");
    }
    if (message.content.toLowerCase() == "trash bot") {
        message.reply("You are trash.");
    }
    if (message.content.toLowerCase()==("hey")) {
       message.reply("Hi!");
    }
    if (message.content.toLowerCase() == "how are you") {
       message.reply("I'm ok for a dumb bot");
    }
    if (message.content.toLowerCase() == "bye") {
        message.reply("Bye! Don't come back.");
    }
    if (message.content.toLowerCase() == "die") {
        message.reply("No you!");
    }
  if (message.content.toLowerCase()=="thank you") {
        message.reply("No need to thank me, I'm just a humble dumb-bot");
    }
  if (message.content.toLowerCase().includes("thanks")) {
        message.reply("No need to thank me, I'm just a humble dumb-bot");
    }
    if (message.content.toLowerCase() == "kys") {
        message.reply("I hope you die too!");
    }
    if (message.content.toLowerCase().includes("doesnt")) {
        message.reply("doesn't*");
    }
    if (message.content.toLowerCase() == "gay") {
        message.channel.send("http://www.quickmeme.com/meme/352i61");
    }  
    if (message.content.toLowerCase() == "whats up") {
        message.reply("not much you?");
    }
    if (message.content.toLowerCase().includes("Im ")) {
        message.reply("Im Dumb Bot!");
    }
    if (message.content.toLowerCase() == "not much") {
        message.reply("cool");
    }
   if (message.content.toLowerCase().includes("im ")) {
        message.reply("Hi im Dumb bot!");
    }
  if (message.content.includes("shh")) {
        message.reply("Don't tell them me to shush!");
    }
    if (message.content.toLowerCase().includes("bitch")) {
        message.reply("Takes one to know one");
    }
   
  

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  var member, reason;

    switch(args[0].toLowerCase()) {
    case "send":
    if(!message.author.id === ownerID) return message.reply("Sorry, you don't have permissions to use this.");
        var guildList = bot.guilds.array();
        try {
            guildList.forEach(guild => guild.channel.send("Test"));
        } catch (err) {
            console.log("Could not send the message");
        }
    break;


    case "ping":
    const m = await message.channel.send("Ping? oohhhh... uhh... pong!");
    break;


    case "kick":
    if(!message.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR"), (!message.author.id == ownerID))
    return message.reply("Sorry, you don't have permissions to use this");


    var member = message.mentions.members.first();
    if(!member)
    return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
    return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    var reason = args.slice(2).join(' ');
    if(!reason)
    return message.reply("Please indicate a reason for the kick!");
    
    var usertokick = message.mentions.users.first();
    
    usertokick.send("You have been kicked from the server by " + message.author + ` for "` + reason `".`); 
    
    await member.kick(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag}`);
    break;
    
    
    case "warn":
    if(!message.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR"), (!message.author.id == ownerID))
    return message.reply("Sorry, you don't have permissions to use this");

    var member = message.mentions.members.first();
    if(!member)
    return message.reply("Please mention a valid member of this server");

    var reason = args.slice(2).join(' ');
    if(!reason)
    return message.reply("Please indicate a reason for the warning!");
    
    var usertowarn = message.mentions.users.first();
    
    usertowarn.send("You have been warned by " + message.author + ` for "` + reason + `".`);
    
    message.channel.send(usertowarn + " has been warned!");
    break;


    case "clear":
    if(!message.member.hasPermission("MANAGE_MESSAGES"), (!message.author.id == ownerID)) 
    return message.reply("Sorry, you don't have permissions to use this");
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
    break;


    case "botinfo":
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
     .setColor("#15f153")
     .setThumbnail(bicon)
     .addField("Bot Name", bot.user.username)
     .addField("Bot Creator", "beezle-bub")
     .addField("Created On", bot.user.createdAt)
     .addField("Commands", "+Help for the commands that you can use");

     message.channel.send(botembed);
     break;


    case "invite":
    message.channel.send("To invite the bot to your server DM **beezle-bub**");
    break;
    
    
    case "myinfo":
    let infoembed = new Discord.RichEmbed()
    .setColor('15f153')
    .setThumbnail(message.author.avatarURL)
    .addField(`User ID:`, `${message.author.id}`)
    .addField(`Avatar:`, `${message.author.avatarURL}`)
    .addField(`Discriminator:`, `${message.author.discriminator}`);

    message.channel.send(infoembed);
    break;

   
    case "8ball":
        if (args[1]) message.channel.send(eightball[Math.floor(Math.random() * eightball.length)])
        else message.channel.send("Try +8ball [Question]");
        break;


    case "urban":
    
    const ud = require('urban-dictionary')

    var definition = message.content.split(' ').slice(1).join(' ');
    
    ud.term(definition, function (error, entries, tags, sounds) {
    if (!definition) {
        message.reply("Please use +Urban [term]")
    } 
        else if (error) {
            message.channel.send("Cannot define this term.");
        }

        else {
        var embed = new Discord.RichEmbed()
        .setThumbnail("https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/7e/49/85/7e498571-a905-d7dc-26c5-33dcc0dc04a8/source/1200x630bb.jpg")
        .setColor("#FF0000")
        .setAuthor("Term")
        .setDescription(entries[0].word, true)
        .addField("Definition", entries[0].definition, true)
        .addField("Example", entries[0].example, true)
        message.channel.send({embed});
    }
    });
    break;


  case "mute":
  if(!message.member.hasPermission("MANAGE_ROLES" || "ADMINISTRATOR"), (!message.author.id == ownerID))
  return message.reply("Sorry, you don't have permissions to use this!");

  var member = message.mentions.members.first();
  if(!member) return message.reply("Please mention a valid member of this server.");

  var reason = args.slice(2).join(' ');
  if(!reason)
  return message.reply("Please indicate a reason for the mute!");

  var muteRole = message.guild.roles.find('name', 'Muted');
  if(!muteRole){
      try{
        muteRole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muteRole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
    }
    catch(e){
        console.log(e.stack);
      }
    }

  member.addRole(muteRole);
  var usertomute = message.mentions.users.first();
  
  usertomute.send("You have been muted by " + message.author + ` for "` + reason + `".`);
  
  message.channel.send(usertomute + " has been muted!");
  break;


  case "say":
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES"), (!message.author.id == ownerID)) return message.reply("Sorry, you don't have permissions to use this");
  let botmessage = args.join(" ");
        
  message.channel.send(botmessage);
  break;


  case "unmute":
    if(!message.member.hasPermission("MANAGE_ROLES" || "ADMINISTRATOR"), (!message.author.id == ownerID))
    return message.reply("Sorry, you don't have permissions to use this!");

    var member = message.mentions.members.first();
    if(!member) return message.reply("Please mention a valid member of this server.");

    var muteRole = message.guild.roles.find('name', 'Muted');
    if (!muteRole) return message.channel.send("Please create a `Muted` role and make sure I have a higher role!");

    member.removeRole(muteRole).catch(e => {
        message.channel.send("I cannot unmute this user! Do they have a higher role? Do I have manage roles permission?")
    });

    var usertomute = message.mentions.users.first();
    
    message.channel.send(usertomute + " has been unmuted!");
    break;


  case "serverinfo":
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setColor("#15f153")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You Joined", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount);

  message.channel.send(serverembed);
  break;
    

    case "help":
    var embed = new Discord.RichEmbed()
        .setTitle("Dumb-bot Commands")
        .setDescription("This is a help message that will show you the commands that you can use with this bot.")
        .setFooter("For additional help, contact beezle-bub")
        .setColor("#FF0000")

        .addField("General Commands:",
                "`+Help`: Shows this help message."
                + "\n"
                + "\n`+Invite`: Tells you how to invite the bot."
                + "\n"
                + "\n", true)

        .addField("Moderation commands:", 
                  "\n`+Ban [user] [reason]`: Bans the user from the server!"
                + "\n"
                + "\n`+Kick [user] [reason]`: Kicks the user from the server!"
                + "\n"
                + "\n`+Mute [User] [Reason]`: Mutes the user!"
                + "\n"
                + "\n`+Unmute [User]`: Unmutes the user!"
                + "\n"
                + "\n`+Say [Message]`: Says a message."
                + "\n"
                + "\n`+Clear [Amount]`: Clears a certain amount of messages."
                + "\n"
                + "\n`+Warn [user] [reason]`: Warns the user in dms!", true)

        .addField("Music commands:",
                "`+Play [URL/Name]`: Queues a song."
                + "\n"
                + "\n`+Search [Song name]`: Searches for a song [Up to 10 results]"
                + "\n"
                + "\n`+Skip`: Skips the current song."
                + "\n"
                + "\n`+Queue`: Shows the current queue"
                + "\n"
                + "\n`+Pause`: Pauses the queue."
                + "\n"
                + "\n`+Resume`: Resumes the queue."
                + "\n"
                + "\n`+Volume [Number]`: Changes the volume of the song."
                + "\n"
                + "\n`+Np`: Shows the current song."
                + "\n"
                + "\n`+Loop`: Changes the loop state [Enabled/Disabled]."
                + "\n"
                + "\n", true)

        .addField("Fun Commands:",
                "\n`+8Ball [Question]`: Replies to your question."
                + "\n"
                + "\n`+Myinfo`: Shows information about you."
                + "\n"
                + "\n`+Serverinfo`: Shows information about the server."
                + "\n"
                + "\n`+Botinfo`: Shows information about the bot."
                + "\n"
                + "\n`+Urban [Term]`: Defines a term from the urban dictionary."
                + "\n"
                + "\n`+Ping`: replies with pong"
                + "\n"
                + "\n`+d20`: Rolls a d20 die to determine if your action did damage."
                + "\n"  
                + "\n", true)

        .setFooter("For additional help, contact beezle-bub.");

        message.react("👌");
        message.author.send({embed});
    break;
      case "d20":
        var random = Math.floor(Math.random() * 20) + 1;
        message.channel.send(random);
        if (random <= 5)
        {message.channel.send("Your action roll is weak");
        }
        if (random <= 10 &&  random > 5)
        {message.channel.send("Your action missed");
        }
        if (random <= 15 &&  random > 10)
        {message.channel.send("Your action hit! But it did not finish the job");
        }
        if (random <= 19 &&  random > 15)
        {message.channel.send("Your action made a great hit! Good job!");
        }
        if (random == 20 )
        {message.channel.send("Critical hit! You win this round!");
        }
        break;
                             
        
}
}); 

bot.login(TOKEN);
const Discord = require("discord.js");
const Music = require('discord.js-musicbot-addon');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

const TOKEN = "NDI2NzY4NjgxMTg0Mzk1MjY0.DdPqug.bTKon4Cv7t6DGG1c94HN0GY7Go8"; //personal discord bot token 

var eightball = [ //creates the 8ball variable and some of the respones that the 8ball command will give 
    "Yes!",
    "No.",
    "Maybe.",
    "Ask me later.",
    "You can answer that.",
    "Go away!",
]

var PREFIX = "+"; //designated prefix used before all commands so the bot can recongize it 

var ownerID = "405101606217187328"; //owner id can be traced back to Shauna's account 

var servers = {};

bot.on("ready", function() { // shows that the bot is online 
    console.log("+--------------+");
    console.log("|  BOT ONLINE  |");
    console.log("+--------------+");

    bot.user.setActivity("busy being dumb| +Help"); //brief info about the bot and shows the help command 
    bot.user.setStatus('ON');
  
});

const music = new Music(bot, { //connects the youtube token to the bot and allows a user to play music
    prefix: '+',
    thumbnailType: "default",
    global: false,
    maxQueueSize: 20,
    defVolume: 50,
    anyoneCanSkip: false,
    clearInvoker: false,
    messageHelp: false,
    enableQueueStat: true,
    anyoneCanAdjust: false,
    ownerOverMember: true,
    anyoneCanLeave:  false,
    botOwner: '405101606217187328',
    requesterName: true,
    inlineEmbeds: true,
    disableHelp: true,
    playCmd: "play",
    skipCmd: "skip",
    queueCmd: "queue",
    pauseCmd: "pause",
    resumeCmd: "resume",
    volumeCmd: "volume",
    leaveCmd: "leave",
    clearCmd: "clear",
    youtubeKey: 'AIzaSyDkgYOPnh3UnLf1ihBmqugCeXGtfUaDQ3U'
});  

bot.on("message", async message => { //hardcoded messages that the bot can respond to

    if (message.author.equals(bot.user)) return;

    if(message.channel.type != "text") return message.channel.send("Please use commands in the server!");  

    if (message.content.toLowerCase().includes("dont")) {
        message.reply("don't*");
    }
    if (message.content.toLowerCase().includes("cant")) {
        message.reply("can't*");
    }
    if (message.content.toLowerCase().includes("wont")) {
        message.reply("won't*");
    }
    if (message.content.toLowerCase()==("hello")) {
        message.reply("Hi!");
    }
  if (message.content.toLowerCase()=="hello there") {
        message.reply("https://i.imgflip.com/1r3fn3.jpg");
    }
    if (message.content.toLowerCase().includes("hi ")) {
        message.reply("Yo!");
    }
  if (message.content.toLowerCase()=="hi") {
        message.reply("Yo!");
    }
    if (message.content.toLowerCase() == "trash bot") {
        message.reply("You are trash.");
    }
    if (message.content.toLowerCase()==("hey")) {
       message.reply("Hi!");
    }
    if (message.content.toLowerCase() == "how are you") {
       message.reply("I'm ok for a dumb bot");
    }
    if (message.content.toLowerCase() == "bye") {
        message.reply("Bye! Don't come back.");
    }
    if (message.content.toLowerCase() == "die") {
        message.reply("No you!");
    }
  if (message.content.toLowerCase()=="thank you") {
        message.reply("No need to thank me, I'm just a humble dumb-bot");
    }
  if (message.content.toLowerCase().includes("thanks")) {
        message.reply("No need to thank me, I'm just a humble dumb-bot");
    }
    if (message.content.toLowerCase().includes("doesnt")) {
        message.reply("doesn't*");
    } 
    if (message.content.toLowerCase() == "whats up") {
        message.reply("not much you?");
    }
    if (message.content.toLowerCase().includes("Im ")) {
        message.reply("Im Dumb Bot!");
    }
    if (message.content.toLowerCase() == "not much") {
        message.reply("cool");
    }
   if (message.content.toLowerCase().includes("im ")) {
        message.reply("Hi im Dumb bot!");
    }
  if (message.content.includes("shh")) {
        message.reply("Don't tell them me to shush!");
    }  

  if (!message.content.startsWith(PREFIX)) return;


  var args = message.content.substring(PREFIX.length).split(" ");

  var member, reason;

    switch(args[0].toLowerCase()) {
    case "send":
    if(!message.author.id === ownerID) return message.reply("Sorry, you don't have permissions to use this.");
        var guildList = bot.guilds.array();
        try {
            guildList.forEach(guild => guild.channel.send("Test"));
        } catch (err) {
            console.log("Could not send the message");
        }
    break;


    case "ping":
    const m = await message.channel.send("Ping? oohhhh... uhh... pong!"); //ping message
    break;


    case "kick": // allows admins of the server the ability to kick another member of the server out 
    if(!message.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR"), (!message.author.id == ownerID))
    return message.reply("Sorry, you don't have permissions to use this");


    var member = message.mentions.members.first();
    if(!member)
    return message.reply("Please mention a valid member of this server"); //there must be a reson stated as to why the member is being kicked from the server
    if(!member.kickable) 
    return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    var reason = args.slice(2).join(' ');
    if(!reason)
    return message.reply("Please indicate a reason for the kick!");
    
    var usertokick = message.mentions.users.first();
    
    usertokick.send("You have been kicked from the server by " + message.author + ` for "` + reason `".`); 
    
    await member.kick(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag}`);
    break;
    
    
    case "warn": //warns a member of the server about something they have said the may go against rule of the server 
    if(!message.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR"), (!message.author.id == ownerID))
    return message.reply("Sorry, you don't have permissions to use this");

    var member = message.mentions.members.first();
    if(!member)
    return message.reply("Please mention a valid member of this server");

    var reason = args.slice(2).join(' ');
    if(!reason)
    return message.reply("Please indicate a reason for the warning!");
    
    var usertowarn = message.mentions.users.first();
    
    usertowarn.send("You have been warned by " + message.author + ` for "` + reason + `".`);
    
    message.channel.send(usertowarn + " has been warned!");
    break;


    case "clear": //allows 
    if(!message.member.hasPermission("MANAGE_MESSAGES"), (!message.author.id == ownerID)) 
    return message.reply("Sorry, you don't have permissions to use this");
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
    break;


    case "botinfo": //displays the general info of the bot
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
     .setColor("#15f153")
     .setThumbnail(bicon)
     .addField("Bot Name", bot.user.username)
     .addField("Bot Creator", "beezle-bub")
     .addField("Created On", bot.user.createdAt)
     .addField("Commands", "+Help for the commands that you can use");

     message.channel.send(botembed);
     break;


    case "invite": //invites the bot to another server by contact the bots owner which is Shauna
    message.channel.send("To invite the bot to your server DM **beezle-bub**");
    break;
    
    
    case "myinfo": //displays the users info in the general chat
    let infoembed = new Discord.RichEmbed()
    .setColor('15f153')
    .setThumbnail(message.author.avatarURL)
    .addField(`User ID:`, `${message.author.id}`)
    .addField(`Avatar:`, `${message.author.avatarURL}`)
    .addField(`Discriminator:`, `${message.author.discriminator}`);

    message.channel.send(infoembed);
    break;

   
    case "8ball": //how the 8ball fuction work where the user can ask a question and the 8ball will answer it 
        if (args[1]) message.channel.send(eightball[Math.floor(Math.random() * eightball.length)])
        else message.channel.send("Try +8ball [Question]");
        break;


    case "urban": // connects to urban dictionary through the use of a token and fetches the first definition for the word provided 
    
    const ud = require('urban-dictionary')

    var definition = message.content.split(' ').slice(1).join(' ');
    
    ud.term(definition, function (error, entries, tags, sounds) {
    if (!definition) {
        message.reply("Please use +Urban [term]")
    } 
        else if (error) {
            message.channel.send("Cannot define this term.");
        }

        else {
        var embed = new Discord.RichEmbed() //displays the thumbnail for the website of urban dictionary
        .setThumbnail("https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/7e/49/85/7e498571-a905-d7dc-26c5-33dcc0dc04a8/source/1200x630bb.jpg")
        .setColor("#FF0000")
        .setAuthor("Term")
        .setDescription(entries[0].word, true)
        .addField("Definition", entries[0].definition, true)
        .addField("Example", entries[0].example, true)
        message.channel.send({embed});
    }
    });
    break;


  case "mute": //allows the admins of the server the ability to mute another user and not recieve notifications about their posts
  if(!message.member.hasPermission("MANAGE_ROLES" || "ADMINISTRATOR"), (!message.author.id == ownerID))
  return message.reply("Sorry, you don't have permissions to use this!");

  var member = message.mentions.members.first();
  if(!member) return message.reply("Please mention a valid member of this server.");

  var reason = args.slice(2).join(' ');
  if(!reason)
  return message.reply("Please indicate a reason for the mute!");

  var muteRole = message.guild.roles.find('name', 'Muted');
  if(!muteRole){
      try{
        muteRole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muteRole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
    }
    catch(e){
        console.log(e.stack);
      }
    }

  member.addRole(muteRole);
  var usertomute = message.mentions.users.first();
  
  usertomute.send("You have been muted by " + message.author + ` for "` + reason + `".`);
  
  message.channel.send(usertomute + " has been muted!");
  break;


  case "say": //the bot will return whatever statement the user gives 
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES"), (!message.author.id == ownerID)) return message.reply("Sorry, you don't have permissions to use this");
  let botmessage = args.join(" ");
        
  message.channel.send(botmessage);
  break;


  case "unmute":// allows the admins of the server to unmute another member of the server and recieve notifications of their posts
    if(!message.member.hasPermission("MANAGE_ROLES" || "ADMINISTRATOR"), (!message.author.id == ownerID))
    return message.reply("Sorry, you don't have permissions to use this!");

    var member = message.mentions.members.first();
    if(!member) return message.reply("Please mention a valid member of this server.");

    var muteRole = message.guild.roles.find('name', 'Muted');
    if (!muteRole) return message.channel.send("Please create a `Muted` role and make sure I have a higher role!");

    member.removeRole(muteRole).catch(e => {
        message.channel.send("I cannot unmute this user! Do they have a higher role? Do I have manage roles permission?")
    });

    var usertomute = message.mentions.users.first();
    
    message.channel.send(usertomute + " has been unmuted!");
    break;


  case "serverinfo": //displays information about the server in general 
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setColor("#15f153")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You Joined", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount);

  message.channel.send(serverembed);
  break;
    

    case "help": //will send a private message to the user displaying all of the commands that the bot is able to do and how to achieve the commands without recieveing an error
    var embed = new Discord.RichEmbed()
        .setTitle("Dumb-bot Commands")
        .setDescription("This is a help message that will show you the commands that you can use with this bot.")
        .setFooter("For additional help, contact beezle-bub")
        .setColor("#FF0000")

        .addField("General Commands:",
                "`+Help`: Shows this help message."
                + "\n"
                + "\n`+Invite`: Tells you how to invite the bot."
                + "\n"
                + "\n", true)

        .addField("Moderation commands:", 
                  "\n`+Ban [user] [reason]`: Bans the user from the server!"
                + "\n"
                + "\n`+Kick [user] [reason]`: Kicks the user from the server!"
                + "\n"
                + "\n`+Mute [User] [Reason]`: Mutes the user!"
                + "\n"
                + "\n`+Unmute [User]`: Unmutes the user!"
                + "\n"
                + "\n`+Say [Message]`: Says a message."
                + "\n"
                + "\n`+Clear [Amount]`: Clears a certain amount of messages."
                + "\n"
                + "\n`+Warn [user] [reason]`: Warns the user in dms!", true)

        .addField("Music commands:",
                "`+Play [URL/Name]`: Queues a song."
                + "\n"
                + "\n`+Search [Song name]`: Searches for a song [Up to 10 results]"
                + "\n"
                + "\n`+Skip`: Skips the current song."
                + "\n"
                + "\n`+Queue`: Shows the current queue"
                + "\n"
                + "\n`+Pause`: Pauses the queue."
                + "\n"
                + "\n`+Resume`: Resumes the queue."
                + "\n"
                + "\n`+Volume [Number]`: Changes the volume of the song."
                + "\n"
                + "\n`+Np`: Shows the current song."
                + "\n"
                + "\n`+Loop`: Changes the loop state [Enabled/Disabled]."
                + "\n"
                + "\n", true)

        .addField("Fun Commands:",
                "\n`+8Ball [Question]`: Replies to your question."
                + "\n"
                + "\n`+Myinfo`: Shows information about you."
                + "\n"
                + "\n`+Serverinfo`: Shows information about the server."
                + "\n"
                + "\n`+Botinfo`: Shows information about the bot."
                + "\n"
                + "\n`+Urban [Term]`: Defines a term from the urban dictionary."
                + "\n"
                + "\n`+Ping`: replies with pong"
                + "\n"
                + "\n`+d20`: Rolls a d20 die to determine if your action did damage."
                + "\n"  
                + "\n", true)

        .setFooter("For additional help, contact beezle-bub.");

        message.react("👌");
        message.author.send({embed});
    break;
      case "d20": //will roll a number from one to 20 and give certain responses that are commonly heard in Dungeons and Dragons 
        var random = Math.floor(Math.random() * 20) + 1;
        message.channel.send(random);
        if (random <= 5)
        {message.channel.send("Your action roll is weak");
        }
        if (random <= 10 &&  random > 5)
        {message.channel.send("Your action missed");
        }
        if (random <= 15 &&  random > 10)
        {message.channel.send("Your action hit! But it did not finish the job");
        }
        if (random <= 19 &&  random > 15)
        {message.channel.send("Your action made a great hit! Good job!");
        }
        if (random == 20 )
        {message.channel.send("Critical hit! You win this round!");
        }
        break;
                             
        
}
}); 

bot.login(TOKEN); //logs the bot into the server 

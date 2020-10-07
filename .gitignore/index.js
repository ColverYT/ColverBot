const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.login(process.env.TOKEN);
client.once('ready', () => {
    console.log('K-ONNN!');
    var time = 60
    var status = ["En Bêta", "Tema la kichta"]
    setInterval(function() {
        client.user.setActivity(status[ Math.floor(Math.random()*status.length) ])
    }, 1000*time)
}
)

const prefix = '!'
   client.on('message', message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase(); 

        if (command === 'ping'){
          
            var ping = Date.now() - message.createdTimestamp;
        message.channel.send("Ping : `" + `${ping}` + " ms`");
    }
      if (command === 'avatar'){
          message.reply(message.author.displayAvatarURL());
      }


   })

client.on('message', msg => {
  if (msg.content === 'tk') {
    msg.reply('my big mineur');
  }
});






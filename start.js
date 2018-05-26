const Discord = require ('Discord.js')
const bot = new Discord.Client()

var prefix = ('a.')

bot.on('ready', function () {
    bot.user.setPresence ({ game: { name: '[a.aide] | a.support', type:0}})
    console.log("Je suis connecté !")
  })
  
  bot.login('process.env.TOKEN')

  bot.on('message', message => {
    if (message.content === prefix + 'support'){
        let alphasupport = new Discord.RichEmbed()
        .setColor("f5f078")
        .setAuthor ('Alpha | Support')
        .addField('Voici le lien pour rejoindre le serveur de **support**',"https://discord.gg/rSrSRGk")
        .setFooter("Alpha developper par Uro#4094")
        return message.channel.send(alphasupport);
  }});
  bot.on('message', message => {
    if (message.content === prefix + "aide")
      var aide = new Discord.RichEmbed()
      .setColor('#F1FAB4')
      .addField("Pannaux d'aide du bot","Ci dessous les différentes commande de **Alpha**")
      .addField('a.aide',"Affiche l'aide de **Alpha**")
      .addField('a.support',"Envoie le lien du support du bot !")
      return message.channel.sendEmbed (aide);
    });

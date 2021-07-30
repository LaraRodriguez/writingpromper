const Discord = require("discord.js")
const config = require("./config.json");
const client = new Discord.Client()

//Si está activo, responde 
client.on('ready', ( ) => {
    client.user.setActivity('Online', {type: 'WATCHING'});
    console.log('Ready');
    //variable que guarda el id del canal
    var generalChannel = client.channels.cache.get("870664397301891096")
    //envia un mensaje a ese canal
    generalChannel.send("HI EVERYBODY!!")
})

client.on('message', message =>{
    if (message.content === 'Hi'){
        message.channel.send('LOOK, IT WORKS DUDE');
    }
    if(message.content === 'random'){
        message.channel.send('At the age of 16, everyone gets teleported into a small room. In front of you, is a table with all kinds of meals, from apples to gourmet meats. Whatever you take a bite of will determine what superpower you`ll get. You are the first person to take a bite of the table itself')
    }
    }
)

client.login(config.BOT_TOKEN)
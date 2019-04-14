const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if(message.content.startsWith("strawberries!")) {
        message.channel.send(":strawberry: :strawberry: :strawberry: :strawberry: ");
    }
});



client.on("message", (message) => {
    if(message.content.startsWith('image')) {
        message.channel.send({files: ["./photos/strawberry.jpg"]});
    }
});    
client.login(process.env.BOT_TOKEN);

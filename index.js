var TelegramBot = require('node-telegram-bot-api');
var fs = require('fs');

var token = process.env.BOT_TOKEN;
var bot = new TelegramBot(token, {
    polling: true
});

bot.onText(/\/(.+)/, async (msg, match) => {
    let path = `audios/${match[1]}.mp3`;
    path = path.replace('@sound_effects_bot', '');
    if(fs.existsSync(path)) {
        const stream = fs.createReadStream(path);
        bot.sendAudio(msg.chat.id, stream);
    } else {
        const stream = fs.createReadStream('audios/errou.mp3');
        bot.sendAudio(msg.chat.id, stream);
    }
});

const server = require('./src/server');
server.init();
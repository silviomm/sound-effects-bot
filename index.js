var TelegramBot = require('node-telegram-bot-api');
var fs = require('fs');

var token = "";
var bot = new TelegramBot(token, {
    polling: true
});

bot.onText(/\/(.+)/, async (msg, match) => {
    const path = `audios/${match[1]}.mp3`;
    if(fs.existsSync(path)) {
        const stream = fs.createReadStream(path);
        bot.sendAudio(msg.chat.id, stream);
    } else {
        const stream = fs.createReadStream('audios/errou.mp3');
        bot.sendAudio(msg.chat.id, stream);
    }
});

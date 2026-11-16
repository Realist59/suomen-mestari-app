const { Telegraf } = require('telegraf');

// Токен берется из секретов GitHub
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

// Слушаем команду /start
bot.start((ctx) => {
    ctx.reply('Для продолжения изучения Suomen Mestari 1 нажмите кнопку "Учить" в левом углу на нижней панели.');
});

// Запускаем бота
bot.launch().then(() => {
    console.log('Бот успешно запущен и слушает команды!');
});

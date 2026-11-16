const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.start((ctx) => {
    // 1. Отправляем текст
    ctx.reply('Для продолжения изучения Suomen Mestari 1 нажмите кнопку "Учить" в левом углу на нижней панели');
    
    // 2. Отправляем анимированный палец
    ctx.reply('👇');
});

bot.launch().then(() => {
    console.log('Бот успешно запущен и слушает команды!');
});

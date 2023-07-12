const TelegramApi = require("node-telegram-bot-api");

const token = "6333996053:AAF8AUNeJxrKb_JKGiUzS200fXgf85uklWY";

const bot = new TelegramApi(token, { polling: true });

bot.setMyCommands([
  { command: "/start", description: "privetstvie" },
  { command: "/info", description: "info whatsmyname" },
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (text === "/start") {
    await bot.sendMessage(chatId, `Здарова братуха`);
    return bot.sendMessage(chatId, `Это кек бро`);
  }

  if (text === "/info") {
    return bot.sendMessage(chatId, `your name is ${msg.from.first_name}`);
  }

  if (text === "/game") {
    await bot.sendMessage(chatId, "Zagadal chislo ot 1 do 9, otgadivay");
    const randomNumber = Math.floor(Math.random() * 10);
  }

  return bot.sendMessage(chatId, "Nichego ne ponyal, bro");
});

/* ---------------------------------------------------------------------------------/
/                                                                                   /
/             d8888 888    888                        888b     d888 8888888b.       /
/            d88888 888    888                        8888b   d8888 888  "Y88b      /
/           d88P888 888    888                        88888b.d88888 888    888      /
/          d88P 888 888888 888  8888b.  .d8888b       888Y88888P888 888    888      /
/         d88P  888 888    888     "88b 88K           888 Y888P 888 888    888      /
/        d88P   888 888    888 .d888888 "Y8888b.      888  Y8P  888 888    888      /
/       d8888888888 Y88b.  888 888  888      X88      888   "   888 888  .d88P      /
/      d88P     888  "Y888 888 "Y888888  88888P'      888       888 8888888P"       /
/                                                                                   / 
/-----------------------------------------------------------------------------------/
/ Author and Main Developer: FantoX                                                 /
/ Github: https://github.com/FantoX001/Atlas-MD                                     /
/ Powered By: Team ATLAS                                                            /
/-----------------------------------------------------------------------------------/
/             Meet Team ATLAS who holds all rights to this repository:              /
/                                                                                   /
/ 1. Pratyush - https://github.com/pratyush4932                                     /
/ 2. Ahmii - https://github.com/Ahmii-kun                                          /               
/ 3. Kai - https://github.com/Kai0071                                               /                    
/ 4. Devime - https://github.com/Devime69                                           /
/ 5. Jay JayOps - https://github.com/jayjay-ops                                     /
/                                                                                   /
/ ----------------------------------------------------------------------------------/
/                                                                                   /
/      With all of our hard work and defication you can enjoy this awesome bot!     /  
/                                                                                   / 
/----------------------------------------------------------------------------------*/

const fs = require("fs");
const { mkchar } = require("./Database/dataschema.js");
require("./BotCharacters.js");

require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "918101187835";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "NONE";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Atlas MD`;
global.author = process.env.AUTHOR || "by: Team Atlas";
global.port = process.env.PORT || "8000";

/* ---------------------------------------------------------------------------------/
/                                                                                   /
/             d8888 888    888                        888b     d888 8888888b.       /
/            d88888 888    888                        8888b   d8888 888  "Y88b      /
/           d88P888 888    888                        88888b.d88888 888    888      /
/          d88P 888 888888 888  8888b.  .d8888b       888Y88888P888 888    888      /
/         d88P  888 888    888     "88b 88K           888 Y888P 888 888    888      /
/        d88P   888 888    888 .d888888 "Y8888b.      888  Y8P  888 888    888      /
/       d8888888888 Y88b.  888 888  888      X88      888   "   888 888  .d88P      /
/      d88P     888  "Y888 888 "Y888888  88888P'      888       888 8888888P"       /
/                                                                                   / 
/-----------------------------------------------------------------------------------/
/ Author and Main Developer: FantoX                                                 /
/ Github: https://github.com/FantoX001/Atlas-MD                                     /
/ Powered By: Team ATLAS                                                            /
/-----------------------------------------------------------------------------------/
/             Meet Team ATLAS who holds all rights to this repository:              /
/                                                                                   /
/ 1. Pratyush - https://github.com/pratyush4932                                     /
/ 2. Ahmii - https://github.com/Ahmii-kun                                           /               
/ 3. Kai - https://github.com/Kai0071                                               /                    
/ 4. Devime - https://github.com/Devime69                                           /
/ 5. Jay JayOps - https://github.com/jayjay-ops                                     /
/                                                                                   /
/ ----------------------------------------------------------------------------------/
/                                                                                   /
/      With all of our hard work and defication you can enjoy this awesome bot!     /  
/                                                                                   / 
/----------------------------------------------------------------------------------*/


require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "201206178781";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://fantox:xrto71r@cluster0.dnlowts.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Moyt`;
global.author = process.env.AUTHOR || "by: Moyt";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "تم...",
  useradmin: "『 الامر دا لادمن بس! 』",
  botadmin: "『 ارفع البوت ادمن الاول 』",
  botowner: "『 الميزه دي للمطور بس!』",
  grouponly: "『 الميزه دي للجروبات بس! 』",
  privateonly: "『 الميزه دي في الخاص بس! 』",
  botonly: "『 الميزه دي للبوت بس! 』",
  waiting: "『 استني شويه... 』",
  nolink: "『 فين الرابط? 』",
  error: "『 ايرور! 』",
  banned: `『 انت محظور من استخدام البوت اتواصل مع المطور لالغاء حظرك! 』`,
  bangc: "『 تم حظر الجروب دا من استخدام البوت! 』",
  nonsfw: "Dont be a pervert Baka! This is not a NSFW enabled group!",
};

//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "arbe0243@gmail.com";
global.location = "West Bengal, India";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "India/Asia";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/EZjCgLTJfRd8LHOyVC163u";
global.website = process.env.GURL || "https://chat.whatsapp.com/EZjCgLTJfRd8LHOyVC163u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "@Adrien088";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "917439317360";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUYvazlsOTJDYjdaTGlMOXArc1NMMHVGSWwvUmsxK2h4YmNZOTFxbTYxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUpVOFdaNSt5VU5rTWpHL013NnhodGlUdTA5MEJEVFFEWmdXNmdHTGpTND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTUE0eFZCNE52WUFqeEZGYmZ1RC9zOFgrM1hhV1ByNm5lYTYzUHNSVWtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwMERTRjlRd0pNUjhaMEFKZUJ5bHdCa3JPL3E0SmZlaEpWanNYN2REcDI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLcTlyMy9UY0RuL3dVTnZpMmgwam9zdmJ5SVl2eXBGOGVDMkc2eVVqMEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdsdGdZTEVxRjVwZUZGN09ITHFSNHRuR2hEOEhyRE5mOHZmN21pcS95WGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpaTUNCaTA3VDRwSW9RdEkzOWRpZFExTHJDYXBtNmFRaDZYdzlBVklWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1AwUHhyMTAzcldZT3VzM21HMGU2anhrMW5NcFdjWEx4Q29NM2M3bzcybz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRQYlA5N3RFRTF6cXhLL1JyQnpYbWl3YUN1czJ4Sm41elFEOVcvMzEzUjhlYnlMVWtNSVlNNmZONTF2ZDM1NTlPN0w0dG1nWnhnU05RaWI5T3NNUkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiJJb0kyNmNCVEJPTUhkMDErbFBQb0R0TldOdUppY252Z1IvbmpGMUFobzRRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqZGwtbWc4QlN1eU1YaU5oZUE2QkVRIiwicGhvbmVJZCI6IjYxZWYwNzcxLTZjYjktNDQ3MS1hZjI5LTQzY2MxMTQwNWQwYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZR2QzZFMzc2JaUG5WRnRoZVRkUWJtdlY3SDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEVZZmhpdUU0d2U2QW03ZjFHKzkvdTlSWElnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlQyUzY0V0YyIiwibWUiOnsiaWQiOiI5OTQ0MDIyNTk2ODg6ODFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w3aWpNVUZFT2VldWJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ing1YjloajVPVzdRNWRVU0owVzlrN3lxemhMNFF3b2pHV09OY0hodHlJM0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZYUmYrTytVN1dyTnc2UE56WHU0YmtRVE5BYTlFUEFTSG5OV2MzUEpoRVZubFFyMlM4YnJ0VnFSRStxbVBsVzBOczhlOXUwZUVWUzF2N0pRRHJmcEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxZ0diZjVINTVCL2RYaHU3UUZJM0hsdGpQQ1JwSnFBL1JkWFltK2hDR1JnQ2JISFgwQWhiRWIzRGRSQ2lEV2U5cTBSTEFZMG5uOHN6RmJGcitpdTRDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk5NDQwMjI1OTY4ODo4MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjZVcvWVkrVGx1ME9YVkVpZEZ2Wk84cXM0UytFTUtJeGxqalhCNGJjaU53In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2ODkzOTQxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU91SiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BEAR-BOT`",
  author: process.env.PACK_AUTHER || "Made by",
  packname: process.env.PACK_NAME || "𖥻 𝚩𝚵̸̷𝚫𝐑 ꪜ"
  botname: process.env.BOT_NAME || "BEAR-BOT",
  ownername: process.env.OWNER_NAME || "Mr.Bear",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

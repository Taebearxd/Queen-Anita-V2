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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/QQFQmAG.jpeg";
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
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFAvV29EZzMvOGxLVUptYUgzMDBJd3c1UmhtcFAvamNjbXlvcEhRdS9saz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEJsMWMvYU9ZMzgvWGdOWGRBckNhYmxQQk0vcG1oL3NaTGtKMWw2UTNuaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Q2p1TzNONFRnYmpBWlF2ZVFTTmF1Ym9BTFJ0N2dvbFhzT3B0SjhWL1hJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2V3NoK0ttUXhtMkhqSzdjZ0lMTmZTQ3d5V0lUK04yRE1JREdkRUJ5Z1RZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFOdVRScUh5VWVlM3cwNEk1ZVNtc2Y4bk9ZUFN5aDBSN3hrb3BmRUpMMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1wREphVDRDSnhWQU5iclBZN1VVa1YzdXZwWUQ1aVhyQXJaL1hvQ0hIak09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZTTEs4KzJDMThhMkg0STVhWVJlWUFxcU9QY2pBdHVhWTZJZWlXYWxHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0JKc3dQZGcwSnk5ZG80T1pDQ2hBTGdFWjNPR1VCdUxoWVd2MjIvaDZXTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFHU0Y1SmMvcVl2M2d5ZnNXL1hyRVdJTkNxb0ZadlFQTVc2QVJMcU9WRjEya3Q3RnpiQnBvTzI1L0RlM0ZycEd0L3QrakxUVFZxVUloTmYwK0JITEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6ImMybnVHWUpoZll3RU9CbFdkLzFLK3BLcDUydE9aODBlam9ldnYxem9Qc289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTk0NDAyMjU5Njg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA3OTRGNkYyM0JEMDlDMkZGRDZCRjY3RDQ5NzAyMkVFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjk3NzgyNTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFBUEdLT3dOUXB1bWZ4UW5SVDBPQWciLCJwaG9uZUlkIjoiMTFhYTYyMmUtZGY1My00MzU4LTkyYjAtYzlmYjA0YTE3ODQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhTZS8zMGduUU1qNDh6MHNob3RqYzh1K2Rqbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwV0xKUXlxcWpmbWJXaE8rRUlydE1oMXNjU0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVk0xTUVaRDgiLCJtZSI6eyJpZCI6Ijk5NDQwMjI1OTY4ODo4N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUC9EbmJBRUVNR2s2YmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTWtQUTRzMEJ6YUZhRy83VFNVRHJkT01BNExQSDBNMzFVM09oUlhxd24zND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ2l3THlRRXN1WWV0S2RmVlhCVmZMQ2VseXVFRW5oMDhGZ3UxMEk2VURWQ2UwVHppSTQ3SGNDYW5qVjBXRzRkQlArYjNCNEhIbzhFcC9ia3NldTJmRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IlAvbzQrTTFKYVpIdWluUDRhK1BLcUQxTWdoREh2RWtrTytwbFdQSzJFZGl6QW0xZXJMSEU1VTJrTVlOM0U3Z1ZCODk5a1BqWExkOUI1S1U3OUpJRER3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTk0NDAyMjU5Njg4Ojg3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRKRDBPTE5BYzJoV2h2KzAwbEE2M1RqQU9Deng5RE45Vk56b1VWNnNKOSsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjk3NzgyNTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRy9mIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝐉𝐞𝐜𝐨𝐛-𝐁𝐨𝐭`",
  author: process.env.PACK_AUTHER || "Made by",
  packname: process.env.PACK_NAME || "𝝢̶𝝤̸̷⃨⃞⃞⃞⃞⃞⃞⃞⃞⃞⃞⃞⃞⃞𝝞𝗥"
  botname: process.env.BOT_NAME || "𝐉𝐞𝐜𝐨𝐛-𝐁𝐨𝐭",
  ownername: process.env.OWNER_NAME || "𝝢̶𝝤̸̷⃨⃞⃞⃞⃞⃞⃞⃞⃞⃞⃞⃞⃞⃞𝝞𝗥",
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

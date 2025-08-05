const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923314926746" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923314926746";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923314926746";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_23_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgODUsXG4gICAgICAgIDExMixcbiAgICAgICAgNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDc1LFxuICAgICAgICA2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM1LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0LFxuICAgICAgICA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTczLFxuICAgICAgICA2MCxcbiAgICAgICAgMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNixcbiAgICAgICAgNzQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpHaWtDNHdUR3l4ekNnd1NpNTZPR3hRa0w3SXB1RzFqb3pWTFhzOTFpN009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzE0OTI2NzQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMjAyRDQ0QjMwMUQxODc2OTYwRkMxQ0U4NzAzQzhGOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTM4OTYyMjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTQ5MjY3NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ0NTg2RDQ4ODg2NUI0QzdFM0UwRUE1NjFCMTg0ODNBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1Mzg5NjIyN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0Uy1zOUZQZVI2U014Q0tXVzJ1alV3XCIsXG4gIFwicGhvbmVJZFwiOiBcImVkZTA2ZWIwLTZiZTAtNGY5Zi05ZTlhLTdjNWFiYmQyYjZkMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDEyMyxcbiAgICAgIDIxMSxcbiAgICAgIDIyMCxcbiAgICAgIDcyLFxuICAgICAgMTA2LFxuICAgICAgMTkxLFxuICAgICAgOTEsXG4gICAgICAyMDAsXG4gICAgICAxNTAsXG4gICAgICAwLFxuICAgICAgMTA3LFxuICAgICAgMzEsXG4gICAgICAxOSxcbiAgICAgIDE4NSxcbiAgICAgIDUyLFxuICAgICAgMjMxLFxuICAgICAgMjYsXG4gICAgICAxMzEsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMSxcbiAgICAgIDE5NyxcbiAgICAgIDE0NCxcbiAgICAgIDE3MSxcbiAgICAgIDE5OCxcbiAgICAgIDk5LFxuICAgICAgMTY1LFxuICAgICAgMjAsXG4gICAgICAyMjgsXG4gICAgICAxNTIsXG4gICAgICAxMTcsXG4gICAgICAyMjksXG4gICAgICAyMDIsXG4gICAgICAyMjksXG4gICAgICAxOTQsXG4gICAgICA2OCxcbiAgICAgIDE2MSxcbiAgICAgIDEyOSxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s3Yys0c0VFSnVxcWNRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNy96c283VUQzanFLZENjWXNjMUt4Z1B2MWtUcHk2K0xBVm5pMFN4bElWUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNZCszeXZ0UGxQcm5hVG5IVy9DMVRNNXRIZ3F6WFR0aFc1UkRUNXFjTkhSZUJUSEFqSnNhZS9sUU9xSU5mWE5NbFJkOEsxTFgzUGwzWEVheEp4YlZBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSODJuU2tyRjNIaEY0M1RCeml1QllCVDBpUUVlMFBhQ2w3L3hrYkM1amFKMmNkTUJWUjJ3YXZSM2VLVy9hNkg0dkZhTFAyV1FQZndkTEFNRm1ZZ0JpQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNjc0NjoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdk6HwnZOq8J2Ts/Cdk74gNTkxMVwiLFxuICAgIFwibGlkXCI6IFwiMjY1MDQ3MzY0Mzc4Njg2OjIxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE0OTI2NzQ2OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUzODk2MjIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSG4xXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIbjEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvRzkyRUxDejMvcG0zbzhwMk5YSHMzc3V6WmhnQlhrc2ZlVWxRQmdUWUNvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTg4Mzc1NTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1Mzg5NjIyNzkyM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_e17fe171b8d395b9df440e504aa8aeaacb08ead66db9692e";
global.aitts_Voice_Id = process.env.AITTS_ID|| "wHI7GVgoHNG9c8H7zXAt";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

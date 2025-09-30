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


global.devs = "923014191034" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923014191034";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923014191034";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_16_09_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMyxcbiAgICAgICAgMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICAyMjksXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE5LFxuICAgICAgICA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NixcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY0LFxuICAgICAgICA5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODYsXG4gICAgICAgIDQsXG4gICAgICAgIDczLFxuICAgICAgICA1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODksXG4gICAgICAgIDE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg2LFxuICAgICAgICA2MixcbiAgICAgICAgMTc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJkQittQ1paSnhVb0xJQyticUhDdEVlMW81THoyN3FvS3o1YkthdzFEOEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDE0MTkxMDM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQjU1ODFGQ0FDQTczQkM4QTRBRTlCQUZDNDJEMUQzOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTkyMjczODNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSnN3MDU2MVRUMEdmeGxQQjFDNUNRd1wiLFxuICBcInBob25lSWRcIjogXCIwNjVmOWMwNi01ODg1LTRiOTctYTU4Yi1mM2NhMzg5MTQ2NWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgOSxcbiAgICAgIDQ1LFxuICAgICAgODEsXG4gICAgICAyNDYsXG4gICAgICAxOSxcbiAgICAgIDE4MyxcbiAgICAgIDExMyxcbiAgICAgIDIyMSxcbiAgICAgIDk3LFxuICAgICAgMjU1LFxuICAgICAgMzMsXG4gICAgICAyMDUsXG4gICAgICAyMjUsXG4gICAgICA2MixcbiAgICAgIDE4OCxcbiAgICAgIDYxLFxuICAgICAgMjM2LFxuICAgICAgMjM0LFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDE2MixcbiAgICAgIDEyMyxcbiAgICAgIDg4LFxuICAgICAgOTgsXG4gICAgICA2OCxcbiAgICAgIDE1MixcbiAgICAgIDE0NCxcbiAgICAgIDM4LFxuICAgICAgMjQ2LFxuICAgICAgODYsXG4gICAgICAyLFxuICAgICAgMTE5LFxuICAgICAgMTAsXG4gICAgICAxNjQsXG4gICAgICAwLFxuICAgICAgMjA5LFxuICAgICAgMTk4LFxuICAgICAgMixcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlB4dU1NREVPN2I3c1lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1b1Yvc1VuRlJ4R0JQRmk3TWFJR2d3d1pqblFPbk00WnhUZGUwTDc4SG5VPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJPK1h2emx0Mmd1blVmT1RTM0xOeHFhcGs1YnNSWVgzQkI2S0lucHJRMHo0bjNqZUY3VlRoTzl3eXV3STltQ0pCcEROUmgzc2JYWFA2N2NWSG5tNkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNUV1MzYkcvSGx6VWZOcU4rOUYxK3hYcTlNbnJ3QWM3YWdVYkxvbWhjZWEzRHNCSmU2TWlobHZsNFdBNFplRlFrOGg3aGhxQTFWclNTTW8xcEErZGpRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDE0MTkxMDM0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJlZHVjYXRpb25cIixcbiAgICBcImxpZFwiOiBcIjE0MzM1Mzc2MDk3Mjg5MDo0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDE0MTkxMDM0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTkyMjczNzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBdlRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF2VC5qc29uIjogIntcImtleURhdGFcIjpcIm93NzFvMXVFWGV0VlZJNmdSN2FtWTFlZnBBQzcra0VRcGtsaHBXWVFtdDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTQ2NzQ3NTM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTkyMjczODExOTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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

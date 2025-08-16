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


global.devs = "923264274230" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923264274230";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923264274230";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_45_08_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY2LFxuICAgICAgICA4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc3LFxuICAgICAgICA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1LFxuICAgICAgICA0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjksXG4gICAgICAgIDM4LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDczLFxuICBcImFkdlNlY3JldEtleVwiOiBcInlBdUFTNzBhaUt4NW5DbUVpSndVVHdMNmJvWXVQd0Z2Y1Z4VDhKdkk1OE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFHTVJLOUlCUVR1VmktNXl2N3A1alFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTQ3MTViNjQtMzVmNS00MGIyLTlkMWEtN2YwZWJhYmFmNzUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDE3NyxcbiAgICAgIDM1LFxuICAgICAgNTAsXG4gICAgICAxMjUsXG4gICAgICAyNDksXG4gICAgICAxODUsXG4gICAgICAzMSxcbiAgICAgIDEzMCxcbiAgICAgIDE5NCxcbiAgICAgIDkwLFxuICAgICAgMjQxLFxuICAgICAgOTUsXG4gICAgICAxNjIsXG4gICAgICAyNDUsXG4gICAgICAzLFxuICAgICAgMTcxLFxuICAgICAgMTkxLFxuICAgICAgMTgwLFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDI1NSxcbiAgICAgIDExNCxcbiAgICAgIDI0OSxcbiAgICAgIDMsXG4gICAgICAzNSxcbiAgICAgIDEyOSxcbiAgICAgIDExNCxcbiAgICAgIDIwMSxcbiAgICAgIDEzOCxcbiAgICAgIDE3MyxcbiAgICAgIDk1LFxuICAgICAgMzIsXG4gICAgICA3MixcbiAgICAgIDEwMSxcbiAgICAgIDE4OCxcbiAgICAgIDM3LFxuICAgICAgNjEsXG4gICAgICAxMixcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjJOZzU4RkVLUFBnc1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKT3lQYWcxMFd3blJBQ2xsczZjR1IyamZKZEg3clNJVTQrTnIwYnRYa1IwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9DSGFWd280MEVubmw2cTlxM3Y1dUZYK3pTdWhuZEFLZ25YcmxUSHdmRlgwWTZQS3dQT2RzYko3dzJoVEVaSEYvOEVLUFJPSEs0Y3NnT1YvNjZFM0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhVci8wckt6ZW5KcTl1ZTVLS1U1QXRzYnFZWGVlcTBtVDFnbXlESllMU0dIdndlWjhLWENvdXl6c0lCN2xDSjVNZm16NWg2am1Kay9QWnZqNUFickF3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjY0Mjc0MjMwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjcyMTAwMTg2NDgwODU2OjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiLlwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjY0Mjc0MjMwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NTM1OTE0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdPWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR09aLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYkxPMHdYMmFSTU5Lc1B0ZktNRjRyTXYwTmc2WmZqSDNSa0xZSFVzOUdhTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDA3MjM5OTAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTUzNTkxNDYyODJcIn0iCn0="  // PUT your SESSION_ID 


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

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


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "SUHAIL_17_54_09_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICA3NixcbiAgICAgICAgODcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc5LFxuICAgICAgICA2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrVXpMdkcrblFoRlkxZngvbkVkVmlsUmgyd2tia0dtOGFvVFlQQzVMQlFnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI2NDI3NDIzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUNEMDhBMEQ3Nzc4MEJCNDg2RDY0RkRFQ0M0MzA5RERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU4NzM2NDg5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjY0Mjc0MjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQzVBOEU0NkVENzdBMzQwQzVDQzgwMDNFNjg2NUFFRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTg3MzY0OTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicllaM3RtQ09TMFc1ZF9Sc1ZwaVdHUVwiLFxuICBcInBob25lSWRcIjogXCJhNDlhMmVhNC1hNGUwLTRhNGMtOWZjZS0xYWNjYzc2ZTY1Y2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgOTYsXG4gICAgICAxNDYsXG4gICAgICAxNTEsXG4gICAgICAyMjEsXG4gICAgICA1NixcbiAgICAgIDEyMSxcbiAgICAgIDYyLFxuICAgICAgMTA4LFxuICAgICAgOTEsXG4gICAgICAxMzcsXG4gICAgICAzLFxuICAgICAgMTg1LFxuICAgICAgMTQ1LFxuICAgICAgMjIsXG4gICAgICA5MixcbiAgICAgIDEsXG4gICAgICAyMjQsXG4gICAgICAxODcsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDIzMyxcbiAgICAgIDIyMyxcbiAgICAgIDE2MSxcbiAgICAgIDUsXG4gICAgICAxNDEsXG4gICAgICAxNTIsXG4gICAgICAyOSxcbiAgICAgIDEwOCxcbiAgICAgIDgyLFxuICAgICAgMTUyLFxuICAgICAgMjQyLFxuICAgICAgMTA4LFxuICAgICAgMjAyLFxuICAgICAgMjIyLFxuICAgICAgMTcwLFxuICAgICAgMjYsXG4gICAgICAxNzgsXG4gICAgICAxNzUsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BYdTErZ0VFT0hnME1ZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMkJtL3FLUjZqOTM1NHhrWkRFbFVGcUU0ckVLN3UwUXlTbXBNWXAxQUFFZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4aGpEaHJrZFcyNG5nU1ZFSmZkK3RRSUNEV2ZlZFl6Y08wM2s5RmJqcVY0Qit2eGpuQUV0a0U4RUc3empBd2J5OUNsd1hMMUg2czVjR1pleFVKOUZDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpUGc3NEsyR2FSUjkyK3JSVWx0Ykg2c05SZGRvRnMyWVdpcFB0T1FjbS9NV2hPMVFyS0l1aU9MS2tZSGpRZnNSMk4vRTEydzI1QnZZQldpaHBWNHhnUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI2NDI3NDIzMDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzIxMDAxODY0ODA4NTY6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiLlwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjY0Mjc0MjMwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU4NzM2NDg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDdKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIN0ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiUEJBZEgyczBBWm9LMldKYXE5ZUVnTVRuRXc4ZzFZbWtreWdMT09MUnNNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyOTMyODUyMzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1ODczNjQ4Njg2MlwifSIKfQ==", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

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

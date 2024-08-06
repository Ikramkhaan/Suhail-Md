const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongobd.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Peshawar";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923193619280" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923193619280";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923193619280,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_29_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY1LFxuICAgICAgICA5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDYzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgzLFxuICAgICAgICA5LFxuICAgICAgICAxNixcbiAgICAgICAgODMsXG4gICAgICAgIDMyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA1MSxcbiAgICAgICAgNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NixcbiAgICAgICAgMjM5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUFRsOEpmcVB3eGV4VkNBb1pTM3ozdnVGZmpJWEdqVTB4ZGxCNzdtUG11UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS2h1YnBrd0dUTnVHTVh6NGc4Mjhqd1wiLFxuICBcInBob25lSWRcIjogXCJkNjA1ODM0Yy1kNGE1LTQ4ZDAtOWE4Mi04MmMxNDU3NDFhNGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICA1NyxcbiAgICAgIDksXG4gICAgICAxNDMsXG4gICAgICAzNixcbiAgICAgIDUzLFxuICAgICAgODQsXG4gICAgICAyMjcsXG4gICAgICAyNTIsXG4gICAgICAxNjMsXG4gICAgICAxNjIsXG4gICAgICAxMDAsXG4gICAgICAxNDgsXG4gICAgICA3NyxcbiAgICAgIDI1NCxcbiAgICAgIDIwNyxcbiAgICAgIDEzNSxcbiAgICAgIDE5NyxcbiAgICAgIDIxNyxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDMxLFxuICAgICAgMjU0LFxuICAgICAgMjEwLFxuICAgICAgOTksXG4gICAgICA3LFxuICAgICAgMjQ4LFxuICAgICAgNzQsXG4gICAgICAxNzcsXG4gICAgICAyMjcsXG4gICAgICAxMTQsXG4gICAgICAxNDUsXG4gICAgICAxMzksXG4gICAgICAyMTYsXG4gICAgICAxMTQsXG4gICAgICAxMDEsXG4gICAgICAxNTQsXG4gICAgICAyMjIsXG4gICAgICAxMTMsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEtTUFIzTERcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE4OTA2MzYwMzoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdm6jwnZuv8J2bpfCdkYXwnZGHLfCdm6jwnZul8J2QtvCdm6vwnZuv8J2RhVwiLFxuICAgIFwibGlkXCI6IFwiNTAxNTcwNDc1MTcyNTk6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlBXM01BSEVMait3YlVHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRN0pySnV3RGF0Z0pYTHNjZmprbmp6ODd3Wmo2Wmx3KzZNYU5jK01Fd2dzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkY2RlgvNTVtMmkrcEdZckcwZ29MbTdsN1Fqa2hpZG5DcEJieDhlTjJWdUNiZXkzVkhwWEk1Q0VKVkdzVFNESWpnOHRuL0g4NG5qNlZYOHI4elZHaEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInI5VjJ3Y1lseVZRa0ZDaDgxQzFyWEt3T3llS1ZZbmRLQmhwUlNVOGZXd1F4UlJub3JZd05sVkZKSExEbzdBVDJ3UmNtSVprU3kxWFQrcHQ2Ui93VGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE4OTA2MzYwMzoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI4NDI5NDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMQXJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxBci5qc29uIjogIntcImtleURhdGFcIjpcIlBLMllVNFdtOFNrbkp0MjFBNm9zaEdSQlEvWmZsRHdNWVF6SVlXZXRFUlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAxNDc4NDMzNCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝛨𝛯𝛥𝑅𝑇-𝛨𝛥𝐶𝛫𝛯𝑅",
  ownername:process.env.OWNER_NAME|| "𝛪𝛫𝑅𝛥𝛭-𝛫𝛨𝛥𝛮",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "jzgBFGyb9ooZfX6oRPa1fKmN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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

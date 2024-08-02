const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_41_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM0LFxuICAgICAgICA5MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzLFxuICAgICAgICA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMxLFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzeE1UMklENHQ3KzZXQzF4NFJQN3dmRHpWWHRXTFNsbDNUMnhMTUlWMEdzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOQjZFWFNKN1FFcXdCVXR6eVZYdHdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJjMGUzNzgyLTI4NDgtNDY5NC1iMzc3LTMyOTliYWQ4ZTdkNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICA5OCxcbiAgICAgIDIxMyxcbiAgICAgIDI0NSxcbiAgICAgIDIzOSxcbiAgICAgIDg3LFxuICAgICAgMTU2LFxuICAgICAgMTQ0LFxuICAgICAgMTMyLFxuICAgICAgNTcsXG4gICAgICAzOSxcbiAgICAgIDIxLFxuICAgICAgMTc2LFxuICAgICAgMjI1LFxuICAgICAgMTU4LFxuICAgICAgMTA2LFxuICAgICAgMTE5LFxuICAgICAgMTc1LFxuICAgICAgMTkwLFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMTQ1LFxuICAgICAgMTksXG4gICAgICAyMzQsXG4gICAgICAxMTUsXG4gICAgICA5MSxcbiAgICAgIDIwMCxcbiAgICAgIDMzLFxuICAgICAgOTYsXG4gICAgICAxMTQsXG4gICAgICAyMzEsXG4gICAgICAzOCxcbiAgICAgIDIyOSxcbiAgICAgIDQ5LFxuICAgICAgMTM5LFxuICAgICAgMTQ5LFxuICAgICAgMjE3LFxuICAgICAgNzIsXG4gICAgICAyMjcsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbm9vTW9CRU1xT3NiVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxicHhBWm1NQXZkQmtPaWFKVWdPMHlVanlkYlBoRkpTOHZ2bmE0YmRwMVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVW5sYUFOcWFiMm83YW5ybzMwNXRFNmQvek1xSkE4dEJFa1BQWWdpL2g3M1BmY3M2SjhsQklGN3hFR0E0alhZNHdobVpGalhUanhIMzNvSERHSjJ2Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUEhybEJLdUcxRFN3SUpydmVpT1Qzd1ZXRWpGb1JpTldGRklzZGRwelBCOHFtN2lpQ1gyYWtuNnFQelRmU3UzclVUbjBDV0hzVmFYTGhOM1BOSGRFQ0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTM2MTkyODA6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNjM2NjYzNzI1NjcyNDozM0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE5MzYxOTI4MDozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1NjY0NzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDeWdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN5Zy5qc29uIjogIntcImtleURhdGFcIjpcIlIyZmFwTGNnaEdVRXFIQU4yaVRMNFdnSlA5NjhsZmNwS2lneUlYZHR4MEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDI0MTYyMzEzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI1NDA5OTM0MjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "k",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝛨𝛯𝛥𝑅𝑇-𝛨𝛥𝐶𝛫𝛯𝑅",
  ownername:process.env.OWNER_NAME|| "𝛪𝛫𝑅𝛥𝛭-𝛫𝛨𝛥𝛮",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
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

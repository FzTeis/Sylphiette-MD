import { watchFile, unwatchFile } from 'fs'
import * as megaDL from 'megajs'
import { getDevice } from '@whiskeysockets/baileys'
import yts from 'yt-search'
import * as scrapers2 from '@xct007/frieren-scraper'
import * as XDL from 'twitter-downloader'
import axios from 'axios'
import chalk from 'chalk'
import fg from 'api-dylux'
import fs from 'fs'
import ytdl from 'ytdl-core'
import fetch from 'node-fetch'
import { fileURLToPath } from 'url'
import * as scrapers from '@bochilteam/scraper'
import { es } from "./lib/total-idiomas.js"
global.botnumber = "";
global.confirmCode = "";
global.owner = [
  ['17146121800', '>\`\` I\'m Sylph ~', true],
  ['5212431268546', '>\` I\'m Fz ~', true],
  ['50242783087', '>\`\`\` I\'m Danny ~ 卐', true]
] //Numeros de owner 

global.mods = [''] 
global.prems = ['50489079501', '573143917092']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz',
  fzteis: 'https://api--fzteis.repl.co',
  fz: 'https://fz-api.fzteis.repl.co'
}
global.fgapis = ['ELhI4IG6', 'Ys3CfFTU', '6IbiVq6V', 'dEBWvxCY']
global.fgkey = fgapis[Math.floor(fgapis.length * Math.random())];
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': `${fgkey}` //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}
// Sticker WM
global.packname = 'Sylph | Bot - Multi Device' 
global.author = `TxKrull.fcv`
global.wm = '┊ꦿ🎄⿻ Sylph | Wa Bot❜ೃ'


global.insta = 'https://www.instagram.com/luis_fcv._?igsh=MzV5eGdyZWp3aWNh'
	
//imágenes
//global.imagen1 = fs.readFileSync('./src/atomic_logo.jpg');
global.imagen3 = 'https://telegra.ph/file/62fa3e30dc861a3fde73b.jpg';
//--info
global.botName = 'Sylph Bot - The best'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 
global.link_ = 'https://chat.whatsapp.com/CN3YieShy2S3LnVRJ7aPPm'

global.getDevice = getDevice
global.axios = axios 
global.fs = fs
global.fg = fg
global.yts = yts
global.megaDL = megaDL
global.fetch = fetch
global.XDL = XDL
global.scrapers = scrapers
global.scrapers2 = scrapers2
global.ytdl = ytdl
global.wait = '⌛ _Cargando..._ ▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
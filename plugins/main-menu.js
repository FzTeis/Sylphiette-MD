import { promises } from 'fs'
import fs from 'fs'
import moment from 'moment-timezone'
import { join } from 'path'
import fetch from 'node-fetch'
import { getDevice } from '@whiskeysockets/baileys'
import { xpRange } from '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname }) => {
let emot = `${pickRandom(['᭻', '•', '〆', '々', '✗'])}`
let ucpn = `${ucapan()}`
let user = global.db.data.users[m.sender]
let xx = '```'
let fz = '5212431268546'
let tags = {
  'main': 'ＡＣＥＲＣＡ  ＤＥ',
  'bebot': 'ＳＵＢ - ＢＯＴＳ',
  'game': 'ＪＵＥＧＯＳ',
  'econ': 'ＬＶＬ  &  ＥＣＯＮＯＭＹ',
  'rg': 'ＲＥＧＩＳＴＲＯ',
  'sticker': 'ＳＴＩＣＫＥＲ',
  'img': 'ＩＭＡＧＥＮ',
  'maker': 'ＭＡＫＥＲ',
  'prem': 'ＰＲＥＭＩＵＭ',
  'group': 'ＧＲＵＰＯＳ',
  'nable': 'ＯＮ/ＯＦＦ  ＯＰＣ', 
  'nime': 'ＡＮＩＭＥ',
  'rnime': 'ＡＮＩＭＥ  ＲＥＡＣＴ',
  'dl': 'ＤＯＮＷＬＯＡＤ',
  'tools': 'ＴＯＯＬＳ',
  'fun': 'ＦＵＮ / ＲＮＤＭ',
  'cmd': 'ＤＡＴＡＢＡＳＥ',
  'nsfw': 'ＮＳＦＷ  +１８',
  'ansfw': 'ＮＳＦＷ  ＡＮＩＭＥ', 
  'owner': 'ＯＷＮＥＲ', 
  'advanced': 'ＡＶＡＮＺＡＤＯ'
}
const defaultMenu = {
  before: `
 *⎙   ＩＮＦＯ - ＵＳＥＲ*
${xx} ------------------------------- 
 𓈃 🍄⃞  ¿Premium? : ${global.db.data.users[m.sender].premiumTime > 1 ? 'Si': 'No'}
 𓈃 ${pickRandom(['🍷', '🌴', '🍓', '🍁', '✅', '🌟', '🌅', '❄️', '🍃', '🌙', '💫', '🪴', '🪻'])}⃞  Nombre : ${await conn.getName(m.sender)}
 𓈃 ${pickRandom(['🍷', '🌴', '🍓', '🍁', '✅', '🌟', '🌅', '❄️', '🍃', '🌙', '💫', '🪴', '🪻'])}⃞  Status : ${m.sender.split`@`[0] == fz ? 'Developer' : (user.premiumTime >= 1 ? 'Premium User' : 'Free User')}
${xx}
 *>⎙   ＤＡＴＡＢＡＳＥ*
 ${xx}-------------------------------
 𓈃 ${pickRandom(['🍷', '🌴', '🍓', '🍁', '✅', '🌟', '🌅', '❄️', '🍃', '🌙', '💫', '🪴', '🪻'])}⃞  Tiempo activo : %muptime
 𓈃 ${pickRandom(['🍷', '🌴', '🍓', '🍁', '✅', '🌟', '🌅', '❄️', '🍃', '🌙', '💫', '🪴', '🪻'])}⃞  Usuarios :  ${Object.values(global.db.data.users).filter(user => user.registered == true).length}
 𓈃 ${pickRandom(['🍷', '🌴', '🍓', '🍁', '✅', '🌟', '🌅', '❄️', '🍃', '🌙', '💫', '🪴', '🪻'])}⃞  Usuarios totales : ${Object.keys(global.db.data.users).length}
${xx} 
 *⎙  ＩＮＦＯ - ＥＸＴＲＡ*
${xx} -------------------------------
 𓈃 ${pickRandom(['🍷', '🌴', '🍓', '🍁', '✅', '🌟', '🌅', '❄️', '🍃', '🌙', '💫', '🪴', '🪻'])}⃞  User Diamonds : ${user.diamond} 💎
 𓈃 ${pickRandom(['🍷', '🌴', '🍓', '🍁', '✅', '🌟', '🌅', '❄️', '🍃', '🌙', '💫', '🪴', '🪻'])}⃞  User Coins : ${user.coin} 🪙 
 𓈃 ${pickRandom(['🍷', '🌴', '🍓', '🍁', '✅', '🌟', '🌅', '❄️', '🍃', '🌙', '💫', '🪴', '🪻'])}⃞  User Level : ${user.level} 🎁
 
 %sbot
${xx} 
*⫹⫺ ＩＮＦＯ - ＭＥＮＵ*
${xx} -------------------------------
 𓈃 ${pickRandom(['🍷', '🌴', '🍓', '🍁', '✅', '🌟', '🌅', '❄️', '🍃', '🌙', '💫', '🪴', '🪻'])}⃞  💎 = Diamantes
 𓈃 ${pickRandom(['🍷', '🌴', '🍓', '🍁', '✅', '🌟', '🌅', '❄️', '🍃', '🌙', '💫', '🪴', '🪻'])}⃞  🪙 = Premium
${xx}
╭┈────────── ꒰ 🌴 ꒱
╰─┈➤ ‌ 𝗦𝘆𝗹𝗽𝗵 ❁ 𝗕𝗼𝘁
%readmore\n
`.trimStart(),
  header:`${xx}╭ִ╼࣪━━╯  𝇈⃝🍓 %category  ˙ ˚ .  🪕`,
  body: `┊┊  %cmd %isdiamond %isPremium\n`,
  footer: `╰╯ㅤㅤㅤ ⎯⎯⎯⎯⎯⎯⎯⎯${xx}\n`,
  after: `
`,
}
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `⭐ Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '💎' : '')
                .replace(/%isPremium/g, menu.premium ? '🪙' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      sbot: (conn.user.jid == global.conn.user.jid ? '' : `◈ ✨ *Sub-Bot de:*\nwa.me/${global.conn.user.jid.split`@`[0]}`), 
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./src/atomic_logo.jpg'), thumbnail: fs.readFileSync('./src/atomic_logo.jpg'),sendEphemeral: true}}}

let pp = `https://telegra.ph/file/dc68e52ff6227979070d0.jpg`
conn.sendFile(m.chat, 'https://telegra.ph/file/dc68e52ff6227979070d0.jpg', 'menu.jpg', text.trim(), fkontak, true, { contextInfo: { externalAdReply: { showAdAttribution: true,
 mediaUrl: insta,
    mediaType: 0, 
    description: '> \`\` I\'m Fz~',
    title: `Sylph is the best`,
    body: `${ucpn}`,
    thumbnail: await (await fetch('https://telegra.ph/file/d6c1f6d09e777b258d709.jpg')).buffer(),
    sourceUrl: insta
}
     }
    })
let menu = `
¡Hola! Aquí te dejo una pequeña lista de comandos más usados y/o que probablemente necesites.`.trim()
      
const buttonParamsJson = JSON.stringify({
title: "VER LISTA",
description: "Infórmate por medios oficiales sobre Sylph",
sections: [
{ title: "ℹ️ Información", highlight_label: "Popular",
rows: [
{ header: "✅ Redes", title: "🔓 Para: Todos", description: "Infórmate por medios oficiales sobre Sylph", id: usedPrefix + "cuentas" },
{ header: "📢 Grupos/Canales", title: "🔓 Para: Todos", description: "¡Te esperamos!", id: usedPrefix + "grupos" },
{ header: "🎁 ¿Dudad? ¡Contáctame!", title: "🔓 Para: Todos", description: "Sylph se mantiene activo y funcional gracias a los reportes que los usuarios envían.", id: usedPrefix + "owner" }
]},
{ title: "🔖 Atajos", highlight_label: "Popular",
rows: [
{ header: "🆕 Ser Bot (QR)", title: "🔓 Para: Todos", description: "¡Conviértete en Bot con el método de código QR!", id: usedPrefix + "serbot" },
{ header: "🌴 Reclamar recompensa", title: "🔓 Para: Todos", description: "¡Reclama tus 5000 coins cada 24h!", id: usedPrefix + "claim" },
{ header: "🚄 Velocidad", title: "🔓 Para: Todos", description: "Seleccione esto si desea saber el ping del Bot", id: usedPrefix + "ping" },
{ header: "🌴 Velocidad en MBp/s", title: "🔓 Para: Todos", description: "Conoce la velocidad de descarga que tiene Sylph", id: usedPrefix + "speedtest" }
]},
{ title: "Ⓜ️ MENÚ", highlight_label: "Popular",
rows: [
{ header: "⭐ No hay nada por aquí...", title: "", description: "¡Gracias por usar a SylphBot!", id: usedPrefix + "monthly" }
]}
]})
const interactiveMessage = {
body: { text: menu },
footer: { text: wm + ` \nSi algo no funciona utilice el comando *${usedPrefix}menu*` },
header: { title: `> Gracias por usar Sylph Bot 💖*`, subtitle: "test4", hasMediaAttachment: false },
nativeFlowMessage: { buttons: [{ 
name: "single_select",
buttonParamsJson
}]
}}
const message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage }
await await await conn.relayMessage(m.chat, { viewOnceMessage: { message } }, {})    
    m.react('🧝') 
    
  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
handler.command = ['menu', 'help', 'menú'] 
handler.register = false

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
function ucapan() {
const time = moment.tz('America/Los_Angeles').format('HH')
let res = "¡Hola! "
if (time >= 4) {
res = "⛅ Buen día"
}
if (time >= 10) {
res = "🌇Buena tarde"
}
if (time >= 15) {
res = "🌇Buena tarde"
}
if (time >= 18) {
res = "🌃 Buenas noches"
}
return res
}
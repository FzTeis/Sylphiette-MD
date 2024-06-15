import { getDevice } from '@whiskeysockets/baileys'
import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
const dispositivo = await getDevice(m.key.id)
try {

if (!/web|desktop|unknown/gi.test(dispositivo)) {  
let menu = `
¡Hola! esta es una prueba de botones`.trim()
      
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
{ header: "🆕 Ser Bot (QR)", title: "🔓 Para: Todos", description: "¡Conviértete en Bot con el método de código de 8 dígitos!", id: usedPrefix + "serbot" },
{ header: "🤖 Ser Bot (qr)", title: "🔓 Para: Todos", description: "Forma estándar de ser bot con código QR", id: usedPrefix + "serbot" },
{ header: "🚄 Velocidad", title: "🔓 Para: Todos", description: "Seleccione esto si desea saber el ping del Bot", id: usedPrefix + "ping" },
{ header: "🌴 Velocidad en MBp/s", title: "🔓 Para: Todos", description: "Conoce la velocidad de descarga que tiene Sylph", id: usedPrefix + "speedtest" }
]},
{ title: "Ⓜ️ Menú", highlight_label: "Popular",
rows: [
{ header: "⭐ Menú completo", title: "", description: "Visita todos los comandos", id: usedPrefix + "menu" }
]}
]})
const interactiveMessage = {
body: { text: menu },
footer: { text: wm + ` \nSi algo no funciona utilice el comando *${usedPrefix}menu*` },
header: { title: `⭐ *------- NUEVO MENÚ -------* \n Gracias por usar Sylph Bot💖*`, subtitle: "test4", hasMediaAttachment: false },
nativeFlowMessage: { buttons: [{ 
name: "single_select",
buttonParamsJson
}]
}}
const message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage }
await conn.relayMessage(m.chat, { viewOnceMessage: { message } }, {})
      
} else { 
let menu = `*Parece que no se pudo enviar el test de botones 😔*`.trim()
await conn.sendFile(m.chat, imagen, 'lp.jpg', menu, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: ' 🧝‍♀️ SylphBot - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen, sourceUrl: redesMenu}}}) 
}} catch (e) {
console.log(`❗❗ ERROR❗❗`)
console.log(e)}}

handler.command = /^(test)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
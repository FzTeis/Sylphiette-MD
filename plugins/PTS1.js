//import db from '../lib/database.js'

let handler = m => m
handler.before = async function (m) {
    if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.text || !/^[🔥] <- B U R D E L -> [🔥]/i.test(m.quoted.text)) return !0
    
        let math = 1
        if (m.text == math) {
            m.reply(`✅ *Chupando reata 🥵*`)
        } else {
            m.reply(`❎ Selcciona una opción`)
        }
    return !0
}
export default handler
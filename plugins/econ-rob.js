let ro = 1587
let handler = async (m, { conn, usedPrefix, command}) => {
    let time = global.db.data.users[m.sender].lastrob + 300000
    let user = global.db.data.users[m.sender]
    if (new Date - global.db.data.users[m.sender].lastrob < 300000) throw `⏱️¡Hey! Espera *${msToTime(time - new Date())}* para volver a robar`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `✳️ Etiqueta a alguien para robar`
    if (!(who in global.db.data.users)) throw `✳️ El usuario no se encuentra en mi base de datos`
    let users = global.db.data.users[who]
    let rob = Math.floor(Math.random() * ro)
    if (users.coin < rob) return m.reply(`🔖 @${who.split`@`[0]} tiene menos de *${ro} Coins 🪙*\nNo robes a un podre v":`, null, { mentions: [who] })    
   global.db.data.users[m.sender].coin += rob * user.level
   global.db.data.users[who].coin -= rob * user.level
  
    m.reply(`
  ‣ Robaste *${rob * user.level} Coins 🪙* a @${who.split`@`[0]}
  `, null, { mentions: [who] })
    global.db.data.users[m.sender].lastrob = new Date * 1
  }

  handler.help = ['rob']
  handler.tags = ['econ']
  handler.command = ['robar', 'rob']
  
  export default handler
  
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
    //  hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
   // hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
  
    return minutes + " Minuto(s) " + seconds + " Segundo(s)"
  }
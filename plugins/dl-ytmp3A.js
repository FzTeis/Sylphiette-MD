import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `✳️ ${mssg.example} :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
  if (!args[0].match(/youtu/gi)) throw `❎ ${mssg.noLink('YouTube')}`
   m.react(rwait)
 let chat = global.db.data.chats[m.chat]
 let q = '128kbps'
 
 try {
		const yt = await fg.yta(args[0])
		let { title, dl_url, quality, size, sizeB } = yt
		
		conn.sendFile(m.chat, dl_url, title + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: false })
		m.react(done)
 	} catch {
  try {
		let yt = await fg.ytmp3(args[0])
        let { title, size, sizeB, dl_url } = yt
		conn.sendFile(m.chat, dl_url, title + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: false })
		m.react(done)
        } catch {
			await m.reply(`❎ ${mssg.error}`)
} 
}

}
handler.command = ['ytmp3a'] 
handler.diamond = 5
export default handler
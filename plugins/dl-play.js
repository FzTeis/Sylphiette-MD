import yts from 'yt-search'
let handler = async (m, {conn, text, usedPrefix }) => {
  if (!text) throw `✳️ ${mssg.search('YouTube')}`
  m.react(rwait);
 let results = await yts(text)
	let tes = results.all
let messages = tes.map(({ title, timestamp, view, description, thumbnail, url}) => [
`• \`\`\`${title}\`\`\``,
`*👀${mssg.views}:* ${view}\n[ *⌚${mssg.duration}:* ${timestamp} ]\n[ *🖼️ Descripción:* ${description} ]\n[ *🔗${mssg.link}:* ${url} ]`,
`${thumbnail}`,
[['YT Audio', usedPrefix + `ytmp3a ${url}`], ['YT Video', usedPrefix + `ytmp4a ${url} 720p`], ['YTDoc Audio', usedPrefix + `ytmp3 ${url}`], ['YTDoc Video', usedPrefix + `ytmp4 ${url} 720p`]],
[[`${url}`]],
[['Sígueme en Instagram 🦦', `${insta}`]],
[[]],
]);
await conn.sendCarousel(m.chat, '> 🔎 Resultado de la busqueda:', text, '*----( YOUTUBE - SEARCH )----*\n', messages, m)  
m.react(done);
}
handler.help = ['play', 'play2', 'playvid', 'yts', 'ytsearch'] 
handler.diamond = 4
handler.tags = ['dl']
handler.command = ['play', 'play2', 'playvid', 'yts', 'ytsearch'] 
export default handler
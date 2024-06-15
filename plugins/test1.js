let handler = async (m, {conn, text, usedPrefix }) => {
  if (!text) throw `✳️ ${mssg.search('YouTube')}`
  let results = await scrapers.youtubeSearch(text);
	let tes = results.video

let messages = tes.map(({ title, duration, view, description, thumbnail, url}) => [
`• *${title}*\n\n*⌚${mssg.duration}:* ${duration}`,
`*👀${mssg.views}:* ${view} \n\n[ *🖼️ Descripción:* ${description} ]\n\n[ *🔗${mssg.link}:* ${url} ]`,
`${thumbnail}`,
[['YT audio', usedPrefix + `ytmp3a ${url}`], ['YT video', usedPrefix + `ytmp4a ${url} 720p`]],
[[`${url}`]],
[['Sígueme en Instagram', `${insta}`]],
[[]],
]);
await conn.sendCarousel(m.chat, 'Resultado de la busqueda:', text, 'YOUTUBE - SEARCH', messages, m)  
}
handler.help = ['ytsearch'] 
handler.tags = ['dl']
handler.command = ['caro'] 
export default handler
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `✳️ ${mssg.noLink('TikTok')}\n\n 📌 ${mssg.example} : ${usedPrefix + command} https://vm.tiktok.com/ZMreHF2dC/`;

if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `❎ ${mssg.noLink('TikTok')}`;
await m.react(rwait)

let data = await global.scrapers2.tiktok(`${args[0]}`);
let { nickname, unique_id, download_count, duration, description, play, wmplay, hdplay, music } = data;

conn.sendFile(m.chat, `${hdplay}`, `tiktok.mp4`, `*🌴 ${nickname}:  ${description}*\n\n> ${wm}`, m);
m.react(done)
}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
handler.diamond = 4
export default handler
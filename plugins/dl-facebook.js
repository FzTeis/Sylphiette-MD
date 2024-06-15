import fg from 'api-dylux';
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  
if (!args[0]) throw `✳️ ${mssg.noLink('Facebook')}\n\n📌 ${mssg.example} :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
  m.react(rwait);

  try {
    let result = await fg.fbdl(args[0]);
    let tex = `
╭──────────────⊜
│┌──❪ *Facebook - DL* ❫─ᱵ
││𖠡 *${mssg.title}:* ${result.title}
│└────────────ᱵ
╰──────────────⊜`;
    conn.sendFile(m.chat, result.videoUrl, 'fb.mp4', tex, m);
    m.react(done);
  } catch (error) {
    m.reply(mssg.error)
  }
};
handler.help = ['facebook'].map(v => v + ' <url>');
handler.tags = ['dl'];
handler.command = /^((facebook|fb)(downloder|dl)?)$/i;
handler.diamond = 4

export default handler;
import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';
const handler = (m) => m;

handler.before = async (m) => {
  let Prefijo = false;
  const prefixRegex = global.prefix;
  if (prefixRegex.test(m.text)) Prefijo = true;
  const bot = global.db.data.settings[mconn.conn.user.jid]   
  if (bot.modoia && !m.isGroup && !Prefijo && !m.fromMe && m.text !== '') {
     if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
        let texto = m.text;
        const name = mconn.conn.getName(m.sender)
       //m.react('🤖')
await conn.sendPresenceUpdate('composing', m.chat)
            let gpt = await fetch (`https://api.lolhuman.xyz/api/openai?apikey=Gata_Dios&text=${m.text}%20%20%20Responde%20todo%20en%20Español%20por%20favor.`);
    let res = await gpt.json();
    await m.reply(res.result);
        return;    
      
   }
  return true;
};
export default handler;
function handler(m, {groupMetadata, command, conn, text, usedPrefix}) {
  const a = global.prostituta.uno
  const b = global.prostituta.dos
  const c = global.prostituta.tres
  const d = global.prostituta.cuatro
  const e = global.prostituta.cinco
  const top = `[🔥] <- B U R D E L -> [🔥]\n
  Por favor, elija su prostituta:
    
*1. ${a}* (Zorra de primera)
*2. ${b}* (Recomendable para fetiches raros)
*3. ${c}* (Esta vieja trae pene)
*4. ${d}* (Ni idea, es nueva)
*5. ${e}* (Es la más usada, probablemente tenga alguna ETS)

>Responde a este mensaje con el número de la prostituta de su preferencia.

*B̷y̷. 𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕 - 𝙱𝚘𝚝\n*▌│█║▌║▌║║▌║▌║▌║█*`;

m.reply(top, null, {mentions: conn.parseMention(top)});
if (a === m.text) return m.reply(`Haz elegido a ${a}, a continuación se mostrarán las opciones disponibles:
1. Pene`, null, { mentions: a });
}

handler.tags = ['fun']
handler.command = ['burdel', 'prostibulo',]
export default handler
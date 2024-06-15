const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*[❗] Ingrese un texto u petición.*`;
m.react('💬');
  try {    
    let gpt = await fetch (`https://api.lolhuman.xyz/api/openai?apikey=Gata_Dios&text=${text}&user=Sylph`);
    let res = await gpt.json();
    await m.reply(res.result);
  } catch {
    throw `*[❗] Error, no se encontrarón resultados*`;
m.react('❌');
  }    
};
handler.help = ['ia']
handler.tags = ['tools']
handler.command = /^(ia|chatgpt|ai)$/i;
export default handler;
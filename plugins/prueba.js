let handler = async (m, { conn, command, args, usedPrefix }) => {
if (!args[0]) throw `🌴 Ingresa un link de teraboxapp.com. Ejemplo: ${usedPrefix + command} https://teraboxapp.com/s/1rdIr9bVY7hfuBcTf0F1ALQEl`
m.react(rwait);
// Código para descargar el archivo y enviarlo

        // Realizar la solicitud HTTP para descargar el archivo
        const response = await axios.get(`${args[0]}`, { responseType: 'arraybuffer' });
        const download = response.data;
        // Guardar el archivo en una ruta temporal
       /* const archivoTemporal = './archivo_temporal';
        fs.writeFileSync(archivoTemporal, response.data);*/
        

// Llamar a la función para descargar y enviar el archivo

await conn.sendFile(m.chat, download, 'Terabox Download', '> 🦦 Aquí tienes tu archivo');
m.react(done);
}
handler.command = ['tera']
handler.disabled = false
export default handler
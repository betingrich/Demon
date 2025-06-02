const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "marisel",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `*Hello ${pushname}* \n
❒ *I'm Marisel* \n
❒ *I made this Beautiful Bot* \n
❒ *You can always Chat me below* \n
❒ *254740007567* \n

> *Demon-Slayer*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

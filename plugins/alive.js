const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    react: "🫩",
    desc: "check bot alive",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        let madeMenu = `*Hey ${pushname}* \n
❒ *ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ is Active* \n ❒ *Enjoy Using the bot* \n ❒ *Command .ᴍᴇɴᴜ see List* \n\n ❒ *"${day}"* \n ❒ *"${hour}"* \n ❒ *"${seconds}"* 🧚‍♂ \n\n ❒ *Consider Following us* \n\n https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x \n\n
> *Demon-Skayer*`

        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: madeMenu,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363358310754973@newsletter',
                    newsletterName: 'ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek })

    } catch(e) {
        console.log(e)
        reply(`${e}`)
    }
})
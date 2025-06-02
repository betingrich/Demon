const config = require('../config')
let fs = require('fs')
const os = require("os")
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "ping",
    react: "🫩",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { 
            text: '*ᴡᴀɪᴛ.....*',
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
        })
        
        const endTime = Date.now()
        const ping = endTime - startTime
        
        await conn.sendMessage(from, { 
            text: `*ᴘᴏɴɢ : ${ping}ᴍꜱ*`,
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
        }, { quoted: message })
        
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
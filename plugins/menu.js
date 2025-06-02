const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `
> *┃ ʜᴇʏ ${pushname}* \n\n
> *❒* *ʀᴜɴᴛɪᴍᴇ* : *${runtime(process.uptime())}*
> *❒* *ᴍᴏᴅᴇ* : *${config.MODE}*
> *❒* *ᴘʀᴇғɪx* : *${config.PREFIX}*
> *❒* *ʀᴀᴍ ᴜsᴇ* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*
> *❒* *ᴏᴡɴᴇʀ* : *ᴍᴀʀɪsᴇʟ*


*╭━━┉┉━━┉┉━━┉*
*┋1 • ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
*┋2 • ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*
*┋3 • ᴀɪ ᴍᴇɴᴜ*
*┋4 • sᴇᴀʀᴄʜ ᴍᴇɴᴜ*
*┋5 • �ᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ*
*┋6 • ᴍᴀɪɴ ᴍᴇɴᴜ*
*┋7 • ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
*┋8 • ғᴜɴ ᴍᴇɴᴜ*
*┋9 • ᴀɴɪᴍᴇ ᴍᴇɴᴜ*
*╿10 • ᴏᴛʜᴇʀ ᴍᴇɴᴜ*
*╰━━┉┉┉━━┉┉━━┉*⁠⁠

*╰┈➤ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ sᴇʟᴇᴄᴛ*

> *ᴅᴇᴍᴏɴ-sʟᴀʏᴇʀ*`;

        const vv = await conn.sendMessage(from, { 
            image: { url: config.ALIVE_IMG }, 
            caption: desc,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363358310754973@newsletter', // Replace with your newsletter JID
                    newsletterName: 'ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ', // Replace with your newsletter name
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        await conn.sendMessage(from, { 
                            text: `𝙾𝚆𝙽𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃
╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *.ᴏᴡɴᴇʀ*
┋ ◉ *.ʀᴇᴘᴏ*
┋ ◉ *.ꜱʏꜱᴛᴇᴍ*
┋ ◉ *.ꜱᴛᴀᴛᴜꜱ*
┋ ◉ *.ʙʟᴏᴄᴋ*
┋ ◉ *.ᴜɴʙʟᴏᴄᴋ*
┋ ◉ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
┋ ◉ *.sᴇᴛᴘᴘ*
┋ ◉ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
┋ ◉ *.ᴊɪᴅ*
┋ ◉ *.ɢᴊɪᴅ*
┋ ◉ *.ʀᴇꜱᴛᴀʀᴛ*
┋ ◉ *.ᴜᴘᴅᴀᴛᴇ*
┋ ◉ *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
┋ ◉ *.sʜᴜᴛᴅᴏᴡɴ*
┋ ◉ *.ᴀʟɪᴠᴇ*
┋ ◉ *.ᴀʙᴏᴜᴛ*
┋ ◉ *.ᴅᴇʟᴇᴛᴇ*
╰━━━━∙⋆⋅⋆∙━ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴡɴᴇʀ: 18*

> *ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ*`,
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
                        }, { quoted: mek });
                        break;
                    case '2':               
                        await conn.sendMessage(from, { 
                            text: `𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃
╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ᴄᴏɴᴠᴇʀᴛ* 
┋ ◉ *s* 
┋ ◉ sᴛɪᴄᴋᴇʀ
╰━━━━∙⋆⋅⋆∙━ •─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 2*

> *ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ*`,
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
                        }, { quoted: mek });
                        break;
                    case '3':               
                        await conn.sendMessage(from, { 
                            text: `𝙰𝙸 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ᴀɪ* 
┋ ◉ *ᴅᴇᴇᴘꜱᴇᴇᴋ*
┋ ◉ *ᴏᴘᴇɴᴀɪ*
╰━━━━∙⋆⋅⋆∙━ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴀɪ: 3*

> *ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ*`,
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
                        }, { quoted: mek });
                        break;
                    case '4':               
                        await conn.sendMessage(from, { 
                            text: `𝚂𝙴𝙰𝚁𝙲𝙷 �𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ᴘʟᴀʏ* 
┋ ◉ *sᴏɴɢ*
┋ ◉ *ᴠɪᴅᴇᴏ* 
┋ ◉ *.ʏᴛ  <ᴛᴇxᴛ>*
┋ ◉ *.ʟᴏʟɪ <ᴛᴇxᴛ>*
┋ ◉ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
┋ ◉ *.ɪᴍɢ <ᴛᴇxᴛ>*
┋ ◉ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
╰━━━━∙⋆⋅⋆∙━ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ sᴇᴀʀᴄʜ: 8*

> *ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ*`,
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
                        }, { quoted: mek });
                        break;
                    case '5':               
                        await conn.sendMessage(from, { 
                            text: `𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ɢɪᴛᴄʟᴏɴᴇ*
┋ ◉ *ᴀᴘᴋ* 
┋ ◉ *ᴛᴡɪᴛᴛᴇʀ* 
┋ ◉ *ɢᴅʀɪᴠᴇ* 
┋ ◉ *ᴍᴇᴅɪᴀғɪʀᴇ* 
┋ ◉ *ғʙ*
┋ ◉ *ɪɢ* 
┋ ◉ *ᴍᴏᴠɪᴇ*
┋ ◉ *soɴɢ* 
┋ ◉ *ᴠɪᴅᴇᴏ*
┋ ◉ *ᴠɪᴅᴇᴏ2*
┋ ◉ *ᴠɪᴅᴇᴏ3*
┋ ◉ *ᴠɪᴅᴇᴏ4*
┋ ◉ *ᴘʟᴀʏ*
┋ ◉ *ᴘʟᴀʏ2*
┋ ◉ *ᴘʟᴀʏ3*
┋ ◉ *ᴘʟᴀʏ4*
┋ ◉ *ʏᴛ*
┋ ◉ *ᴛɪᴋᴛᴏᴋ/ᴛᴛ* 
┋ ◉ *ɪᴍɢ* 
┋ ◉ *ʏᴛᴀ*
╰━━━━∙⋆⋅⋆∙┉─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴅᴏᴡɴʟᴏᴀᴅ: 21*

> *ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ*`,
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
                        }, { quoted: mek });
                        break;
                    case '6':               
                        await conn.sendMessage(from, { 
                            text: `𝙼𝙰𝙸𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ᴀʟɪᴠᴇ* 
┋ ◉ *ᴍᴀʀɪsᴇʟ* 
┋ ◉ *ᴍᴇɴᴜ* 
┋ ◉ *ᴀʟʟᴍᴇɴᴜ*  
┋ ◉ *ꜱʏꜱᴛᴇᴍ* 
┋ ◉ *ᴘɪɴɢ* 
╰━━━━∙⋆⋅⋆∙━  • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴍᴀɪɴ: 6*

> *ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ*`,
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
                        }, { quoted: mek });
                        break;
                    case '7':               
                        await conn.sendMessage(from, { 
                            text: `𝙶𝚁𝙾𝚄𝙿 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅
┋◉ ᴘʀᴏᴍᴏᴛᴇ
┋◉ ᴅᴇᴍᴏᴛᴇ
┋◉ ᴋɪᴄᴋ
┋◉ ᴀᴅᴅ
┋◉ ɢᴇᴛᴘɪᴄ 
┋◉ sᴇᴛᴡᴇʟᴄᴏᴍᴇ
┋◉ sᴇᴛɢᴏᴏᴅʙʏᴇ
┋◉ ᴀᴅᴍɪɴs
┋◉ ɢɴᴀᴍᴇ 
┋◉ ᴛᴀɢᴀʟʟ 
┋◉ ᴛᴀɢᴀᴅᴍɪɴ 
┋◉ ᴏᴘᴇɴᴛɪᴍʀ/ᴄʟᴏsᴇᴛɪᴍᴇ 
┋◉ ɢɪɴғᴏ
┋◉ ɢʟɪɴᴋ 
┋◉ ɢᴅᴇsᴄ
┋◉ ᴍᴜᴛᴇ
┋◉ ᴜɴᴍᴜᴛᴇ
┋◉ ʟᴏᴄᴋ
┋◉ ᴜɴʟᴏᴄᴋ
┋◉ ᴅᴇʟᴇᴛᴇ
┋◉ ᴋɪᴄᴋᴀʟʟ
╰━━━━∙⋆⋅⋆∙━ ─ • ─⊷
⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ɢʀᴏᴜᴘ: 21*

> *ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ*`,
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
                        }, { quoted: mek });
                       break;
                    case '8':               
                        await conn.sendMessage(from, { 
                            text: `𝙵𝚄𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃

╭┈┉┉┉┉┉┉┈┈┈┈┈┈┈
┋◉ ᴅᴏɢ
┋◉ ғᴀᴄᴛ 
┋◉ ʜᴀᴄᴋ
┋◉ ϙᴜᴏᴛᴇ
┋◉ ʀᴠɪᴅᴇᴏ
╰━━━━∙⋆⋅⋆∙━ ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ғᴜɴ: 6*

> *ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ*`,
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
                        }, { quoted: mek });
                       break;
                    case '9':               
                        await conn.sendMessage(from, { 
                            text: `𝙰𝙽𝙸𝙼𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 

╭┈┈┈┈┈┉┉┉┈┈┈┈┈┈┈
┋◉ ᴡᴀɪғᴜ
┋◉ ɴᴇᴋᴏ
┋◉ ᴍᴇɢᴜᴍɪɴ
┋◉ ᴍᴀɪᴅ
┋◉ ᴀᴡᴏᴏ
┋◉ ʟᴏʟɪ
╰━━━━∙⋆⋅⋆∙━ ─┉┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 6*

> *ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ*`,
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
                        }, { quoted: mek });
                        break;
                    case '10':               
                        await conn.sendMessage(from, { 
                            text: `*𝙾𝚃𝙷𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃*

╭┈┈┈┈┉┉┉┉┉┉┉┉┈┈┈
┋◉ ᴛʀᴛ
┋◉ ᴀɴɪᴍᴇ
┋◉ ᴍᴏᴠɪᴇ
┋◉ ɢɪᴛ
┋◉ ɢᴘᴀꜱꜱ
┋◉ ǫᴜᴏᴛᴇ
┋◉ ғᴀɴᴄʏ
┋◉ ᴅᴇꜰɪɴᴇ
┋◉ ᴜʀʟ
┋◉ sᴀᴠᴇ
┋◉ ᴘᴀɪʀ
╰━━━━∙⋆⋅⋆∙━ ─┉─ ─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴛʜᴇʀ 11*
> *ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ*`,
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
                        }, { quoted: mek });
                        break;
                    default:
                        reply("Invalid option. Please select a valid option❗");
                }
            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
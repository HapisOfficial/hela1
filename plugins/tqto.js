let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
BIG THANKS TO

➸ Allah S.W.T
➸ Nabi Muhammad SAW
➸ My Parent
➸ HAFIZH (developer)
➸ HELA BOTZ (Bot)
➸ Penyedia Layanan API
➸ Org2 yg berdonasi
`.trim(), watermark, 'Back', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh


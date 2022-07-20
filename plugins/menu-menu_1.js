/* 



Codigo abierto - Dejar creditos

Created by https://github.com/BrunoSobrino 



👇🏻 EMPEIZA A MODIFICAR DESDE AQUÍ 👇🏻 */



import { xpRange } from '../lib/levelling.js'

const { levelling } = '../lib/levelling.js'

import PhoneNumber from 'awesome-phonenumber'

import { promises } from 'fs'

import { join } from 'path'

import fetch from 'node-fetch'

import fs from 'fs'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let who

if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender

else who = m.sender   

let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}

let { exp, limit, level, role } = global.db.data.users[m.sender]

let { min, xp, max } = xpRange(level, global.multiplier)

let name = await conn.getName(m.sender)

let d = new Date(new Date + 3600000)

let locale = 'es'

let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]

let week = d.toLocaleDateString(locale, { weekday: 'long' })

let date = d.toLocaleDateString(locale, {

day: 'numeric',

month: 'long',

year: 'numeric' })

let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {

day: 'numeric',

month: 'long',

year: 'numeric' }).format(d)

let time = d.toLocaleTimeString(locale, {

hour: 'numeric',

minute: 'numeric',

second: 'numeric' })

let _uptime = process.uptime() * 1000

let _muptime

if (process.send) {

process.send('uptime')

_muptime = await new Promise(resolve => {

process.once('message', resolve)

setTimeout(resolve, 1000)}) * 1000 }

let muptime = clockString(_muptime)

let uptime = clockString(_uptime)

let totalreg = Object.keys(global.db.data.users).length

let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let replace = {

'%': '%',

p: _p, uptime, muptime,

me: conn.getName(conn.user.jid),

npmname: _package.name,

npmdesc: _package.description,

version: _package.version,

exp: exp - min,

maxexp: xp,

totalexp: exp,

xp4levelup: max - exp,

github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',

level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,

readmore: readMore }

text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])    

    

let imagen1 = fs.readFileSync('./Menu2.jpg')

let imagen2 = fs.readFileSync('./src/nuevobot.jpg') 

let imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')

let texto1 = `╭═─═─═─═─═─═╮

║   WHATSAPP 𝙱𝙾𝚃 - 𝙼𝙳

║╰═─═─═─═─══╯
  
║- 𝙷𝙾𝙻𝙰 @${m.sender.split("@")[0]}

║- 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}

╿- 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}

  *ＣＯＭＡＮＤＯＳ*
ɪɴғᴏʀᴍᴀᴄɪᴏ́ɴ ᴅᴇʟ ʙᴏᴛ
➪ ${usedPrefix}grupos
➪ ${usedPrefix}estado
➪ ${usedPrefix}infobot
➪ ${usedPrefix}donar
➪ ${usedPrefix}grouplist
➪ ${usedPrefix}owner
➪ ${usedPrefix}script
➪ Bot (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

ᴜɴᴇ ᴜɴ ʙᴏᴛ ᴀ ᴛᴜ ɢʀᴜᴘᴏ.

➪ ${usedPrefix}join link

ᴀᴄᴛɪᴠᴀʀ ᴏ ᴅᴇsᴀᴄᴛɪᴠᴀʀ.
➪  ${usedPrefix}enable welcome
➪  ${usedPrefix}disable welcome
➪  ${usedPrefix}enable modohorny
➪ ️ ${usedPrefix}disable modohorny
➪  ${usedPrefix}enable antilink
➪ ${usedPrefix}disable antilink
➪ ️ ${usedPrefix}enable antilink2
➪  ${usedPrefix}disable antilink2
➪ ️ ${usedPrefix}enable detect
➪ ️ ${usedPrefix}disable detect
➪ ️ ${usedPrefix}enable audios
➪ ️ ${usedPrefix}disable audios
➪ ️ ${usedPrefix}enable autosticker
➪ ️ ${usedPrefix}disable autosticker
➪ ️ ${usedPrefix}enable antiviewonce
➪ ️ ${usedPrefix}disable antiviewonce


ʀᴇᴘᴏʀᴛᴇs ᴅᴇ ғᴀʟʟᴏs.

➪ ${usedPrefix}reporte texto

ᴅᴇsᴄᴀʀɢᴀs.
➪  ${usedPrefix}facebook link
➪  ${usedPrefix}instagram link
➪  ${usedPrefix}mediafire link
➪  ${usedPrefix}instagram *link
➪  ${usedPrefix}gitclone link
➪  ${usedPrefix}stickerpack link
➪  ${usedPrefix}gdrive link
➪  ${usedPrefix}tiktok link
➪  ${usedPrefix}xnxxdl link
➪  ${usedPrefix}xvideosdl link
➪  ${usedPrefix}ytmp3 link
➪  ${usedPrefix}ytmp4 link
➪  ${usedPrefix}ytmp3doc link
➪  ${usedPrefix}ytmp4doc link
➪  ${usedPrefix}play.1 texto /link
➪  ${usedPrefix}play.2 texto/ link
➪  ${usedPrefix}play texto
➪  ${usedPrefix}playdoc texto
➪  ${usedPrefix}playlist texto
➪  ${usedPrefix}playlist2 texto
➪  ${usedPrefix}spotify texto
➪  ${usedPrefix}imagen texto
➪  ${usedPrefix}pinterest texto
➪  ${usedPrefix}wallpaper texto
➪  ${usedPrefix}wallpaper2 texto
➪  ${usedPrefix}pptiktok nombre de usuario
➪  ${usedPrefix}igstalk nombre de usuario
➪  ${usedPrefix}igstory nombre de usuario
➪  ${usedPrefix}tiktokstalk nombre de usuario

ɢʀᴜᴘᴏs. 
➪  ${usedPrefix}add numero
➪  ${usedPrefix}kick @tag
➪  ${usedPrefix}grupo abrir / cerrar
➪  ${usedPrefix}promote @tag
➪  ${usedPrefix}demote @tag
➪  admins texto (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
➪  ${usedPrefix}demote @tag
➪  ${usedPrefix}infogroup
➪  ${usedPrefix}link
➪  ${usedPrefix}setname texto
➪  ${usedPrefix}setdesc texto
➪  ${usedPrefix}invocar texto
➪  ${usedPrefix}setwelcome texto
➪  ${usedPrefix}setbye texto
➪  ${usedPrefix}hidetag texto

ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs.
➪  ${usedPrefix}toimg responde a un sticker
➪  ${usedPrefix}tomp3 responde a un video / nota de voz
➪  ${usedPrefix}toptt responde a un video / audio
➪  ${usedPrefix}tovideo responde a un audio
➪  ${usedPrefix}tourl responde a un video / imagen / audio
➪  ${usedPrefix}tts es texto

ᴇғᴇᴄᴛᴏs ʏ ʟᴏɢᴏs.
➪  ${usedPrefix}logos <efecto> texto
➪ ️ ${usedPrefix}logocorazon texto
➪  ${usedPrefix}logochristmas texto
➪  ${usedPrefix}simpcard @tag
➪  ${usedPrefix}hornycard @tag
➪  ${usedPrefix}lolice @tag
➪  ${usedPrefix}ytcomment texto
➪  ${usedPrefix}itssostupid
➪  ${usedPrefix}pixelar
➪️  ${usedPrefix}blur

ᴄᴏᴍᴀɴᴅᴏs +18
➪  ${usedPrefix}pack
➪  ${usedPrefix}pack2
➪  ${usedPrefix}pack3
➪  ${usedPrefix}videoxxx
➪  ${usedPrefix}tetas
➪  ${usedPrefix}booty
➪  ${usedPrefix}ecchi
➪  ${usedPrefix}furro
➪  ${usedPrefix}imagenlesbians
➪  ${usedPrefix}panties
➪  ${usedPrefix}pene
➪  ${usedPrefix}porno
➪  ${usedPrefix}porno2
➪  ${usedPrefix}randomxxx
➪  ${usedPrefix}pechos
➪  ${usedPrefix}yaoi
➪  ${usedPrefix}yaoi2
➪  ${usedPrefix}yuri
➪  ${usedPrefix}yuri2
➪  ${usedPrefix}trapito
➪  ${usedPrefix}hentai
➪  ${usedPrefix}pies
➪  ${usedPrefix}nsfwloli
➪  ${usedPrefix}nsfworgy
➪  ${usedPrefix}nsfwfoot
➪  ${usedPrefix}nsfwass
➪  ${usedPrefix}nsfwbdsm
➪  ${usedPrefix}nsfwcum
➪  ${usedPrefix}nsfwero
➪  ${usedPrefix}nsfwfemdom
➪  ${usedPrefix}nsfwglass
------------------

const fake = { quoted: {

key : {

participant : '0@s.whatsapp.net' },

message: {

orderMessage: {

itemCount : 999999,

status: 1,

surface : 1,

message: wm, 

orderTitle: 'WaBot',

thumbnail: imagen2, 

sellerJid: '0@s.whatsapp.net' }}}}      

const owner = "5219992095479@s.whatsapp.net"

var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']

var document = doc[Math.floor(Math.random() * doc.length)]

const buttons = [

{buttonId: `#perfil`, buttonText: {displayText: ' PERFIL '}, type: 1},

{buttonId: `Bot`, buttonText: {displayText: '¿que es un bot?'}, type: 1},

let buttonMessage = {

document: imagen1, 

fileName: `ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ⁩`, 

mimetype: `application/${document}`,

jpegThumbnail: imagen1,

caption: texto1,

fileLength: "99999999999999",

mentions:[m.sender, owner],

footer: `By ixxi`,

buttons: buttons,

headerType: 4,   

contextInfo: {

"mentionedJid": [m.sender, owner],

"externalAdReply": {

"showAdAttribution": false,

"title": `CHUPAME LA PINGA`,

"mediaType": 2, 

"previewType": "VIDEO",

"thumbnail": imagen3,

"mediaUrl": 'https://youtu.be/ssugb45HSSw',

"sourceUrl": 'https://www.pornhub.com' }}} 

conn.sendMessage(m.chat, buttonMessage, fake)}

handler.help = ['menu', 'help', '?']

handler.tags = ['main']

handler.command = /^(menucompleto|menu3|menú3|memu3|memú3|help3|info3|comandos3|allmenu3|ayuda3|commands3|commandos3)$/i

export default handler

const more = String.fromCharCode(8206)

const readMore = more.repeat(4001)

function clockString(ms) {

let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}




import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
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
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
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
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    



let str = `
*boʇ oɟɟ.*

❏*ixxᴉ oɟɟ.*
❏*nʎɯos oɟɟ.*
❏*ιzαиαму oɟɟ.*
❏*kxrlos oɟɟ.*

➪ 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}
➪ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}


*ɪɴғᴏʀᴍᴀᴄɪᴏ́ɴ ᴅᴇʟ ʙᴏᴛ.*

➪ _${usedPrefix}grupos_
➪ _${usedPrefix}estado_
➪ _${usedPrefix}infobot_
➪ _${usedPrefix}donar_
➪ _${usedPrefix}grouplist_
➪ _${usedPrefix}owner_
➪ _${usedPrefix}script_
➪ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

*ᴜɴᴇ ᴜɴ ʙᴏᴛ ᴀ ᴛᴜ ɢʀᴜᴘᴏ.*

➪ _${usedPrefix}join *enlace / link / url*_

*ᴀᴄᴛɪᴠᴀʀ ᴏ ᴅᴇsᴀᴄᴛɪᴠᴀʀ.*
➪  _${usedPrefix}enable *welcome*_
➪  _${usedPrefix}disable *welcome*_
➪  _${usedPrefix}enable *modohorny*_
➪ ️ _${usedPrefix}disable *modohorny*_
➪  _${usedPrefix}enable *antilink*_
➪  _${usedPrefix}disable *antilink*_
➪ ️ _${usedPrefix}enable *antilink2*_
➪  _${usedPrefix}disable *antilink2*_
➪ ️ _${usedPrefix}enable *detect*_
➪ ️ _${usedPrefix}disable *detect*_
➪ ️ _${usedPrefix}enable *audios*_
➪ ️ _${usedPrefix}disable *audios*_
➪ ️ _${usedPrefix}enable *autosticker*_
➪ ️ _${usedPrefix}disable *autosticker*_
➪ ️ _${usedPrefix}enable *antiviewonce*_
➪ ️ _${usedPrefix}disable *antiviewonce*_

*ʀᴇᴘᴏʀᴛᴇs ᴅᴇ ғᴀʟʟᴏs.*

➪ _${usedPrefix}reporte *texto*_

*ᴅᴇsᴄᴀʀɢᴀs.*

➪  _${usedPrefix}facebook *link*_
➪  _${usedPrefix}instagram *link*_
➪  _${usedPrefix}mediafire *link*_
➪  _${usedPrefix}instagram *link_
➪  _${usedPrefix}gitclone *link*_
➪  _${usedPrefix}stickerpack *link*_
➪  _${usedPrefix}gdrive *link*_
➪  _${usedPrefix}tiktok *link*_
➪  _${usedPrefix}xnxxdl *link*_
➪  _${usedPrefix}xvideosdl *link*_
➪  _${usedPrefix}ytmp3 *link*_
➪  _${usedPrefix}ytmp4 *link*_
➪  _${usedPrefix}ytmp3doc *link*_
➪  _${usedPrefix}ytmp4doc *link*_
➪  _${usedPrefix}play.1 *texto /link*_
➪  _${usedPrefix}play.2 *texto/ link*_
➪  _${usedPrefix}play *texto*_
➪  _${usedPrefix}playdoc *texto*_
➪  _${usedPrefix}playlist *texto*_
➪  _${usedPrefix}playlist2 *texto*_
➪  _${usedPrefix}spotify *texto*_
➪  _${usedPrefix}imagen *texto*_
➪  _${usedPrefix}pinterest *texto*_
➪  _${usedPrefix}wallpaper *texto*_
➪  _${usedPrefix}wallpaper2 *texto*_
➪  _${usedPrefix}pptiktok *nombre de usuario*_
➪  _${usedPrefix}igstalk *nombre de usuario*_
➪  _${usedPrefix}igstory *nombre de usuario*_
➪  _${usedPrefix}tiktokstalk *nombre de usuario*_

*ɢʀᴜᴘᴏs.* 

➪  _${usedPrefix}add *numero*_
➪  _${usedPrefix}kick *@tag*_
➪  _${usedPrefix}grupo *abrir / cerrar*_
➪  _${usedPrefix}promote *@tag*_
➪  _${usedPrefix}demote *@tag*_
➪  _admins *texto*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
➪  _${usedPrefix}demote *@tag*_
➪  _${usedPrefix}infogroup_
➪  _${usedPrefix}link_
➪  _${usedPrefix}setname *texto*_
➪  _${usedPrefix}setdesc *texto*_
➪  _${usedPrefix}invocar *texto*_
➪  _${usedPrefix}setwelcome *texto*_
➪  _${usedPrefix}setbye *texto*
➪  _${usedPrefix}hidetag *texto*_

*ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs.*

➪  _${usedPrefix}toimg *responde a un sticker*_
➪  _${usedPrefix}tomp3 *responde a un video / nota de voz*_
➪  _${usedPrefix}toptt *responde a un video / audio*_
➪  _${usedPrefix}tovideo *responde a un audio*_
➪  _${usedPrefix}tourl *responde a un video / imagen / audio*_
➪  _${usedPrefix}tts es *texto*_

*ᴇғᴇᴄᴛᴏs ʏ ʟᴏɢᴏs.*

➪  _${usedPrefix}logos *<efecto> texto*_
➪ ️ _${usedPrefix}logocorazon *texto*_
➪  _${usedPrefix}logochristmas *texto*_
➪  _${usedPrefix}simpcard *@tag*_
➪  _${usedPrefix}hornycard *@tag*_
➪  _${usedPrefix}lolice *@tag*_
➪  _${usedPrefix}ytcomment *texto*_
➪  _${usedPrefix}itssostupid_
➪  _${usedPrefix}pixelar_
➪️  _${usedPrefix}blur_

*ᴄᴏᴍᴀɴᴅᴏs +18*

➪  _${usedPrefix}pack_
➪  _${usedPrefix}pack2_
➪  _${usedPrefix}pack3_
➪  _${usedPrefix}videoxxx_
➪  _${usedPrefix}tetas_
➪  _${usedPrefix}booty_
➪  _${usedPrefix}ecchi_
➪  _${usedPrefix}furro_
➪  _${usedPrefix}imagenlesbians_
➪  _${usedPrefix}panties_
➪  _${usedPrefix}pene_
➪  _${usedPrefix}porno_
➪  _${usedPrefix}porno2_
➪  _${usedPrefix}randomxxx_
➪  _${usedPrefix}pechos_
➪  _${usedPrefix}yaoi_
➪  _${usedPrefix}yaoi2_
➪  _${usedPrefix}yuri_
➪  _${usedPrefix}yuri2_
➪  _${usedPrefix}trapito_
➪  _${usedPrefix}hentai_
➪  _${usedPrefix}pies_
➪  _${usedPrefix}nsfwloli_
➪  _${usedPrefix}nsfworgy_
➪  _${usedPrefix}nsfwfoot_
➪  _${usedPrefix}nsfwass_
➪  _${usedPrefix}nsfwbdsm_
➪  _${usedPrefix}nsfwcum_
➪  _${usedPrefix}nsfwero_
➪  _${usedPrefix}nsfwfemdom_
➪  _${usedPrefix}nsfwglass_

*ʙᴜsᴄᴀᴅᴏʀᴇs.*

➪  _${usedPrefix}stickersearch *texto*_
➪  _${usedPrefix}xnxxsearch *texto*_
➪  _${usedPrefix}animeinfo *texto*_
➪  _${usedPrefix}google *texto*_
➪  _${usedPrefix}letra *texto*_
➪  _${usedPrefix}wikipedia *texto*_
➪  _${usedPrefix}ytsearch *texto*_
➪  _${usedPrefix}apkdone *texto*_
➪  _${usedPrefix}apkgoogle *texto*_
➪  _${usedPrefix}apkmody *texto*_
➪  _${usedPrefix}apkshub *texto*_
➪  _${usedPrefix}happymod *texto*_
➪  _${usedPrefix}hostapk *texto*_
➪  _${usedPrefix}revdl *texto*_
➪  _${usedPrefix}toraccino *texto*
➪  _${usedPrefix}uapkpro *texto*_

*ʜᴇʀʀᴀᴍɪᴇɴᴛᴀs.*

➪  _${usedPrefix}afk *motivo*_
➪  _${usedPrefix}ocr *responde a imagen*_
➪  _${usedPrefix}acortar *link*_
➪  _${usedPrefix}calc *operacion math*_
➪  _${usedPrefix}del *responder a mensaje del Bot*_
➪  _${usedPrefix}qrcode *texto*_
➪  _${usedPrefix}readmore *texto1| texto2*_
➪  _${usedPrefix}spamwa *numero|texto|cantidad*_
➪  _${usedPrefix}styletext*texto*_
➪  _${usedPrefix}traducir *texto*_

*ʀᴘɢ - ʟɪᴍɪᴛᴇs - ᴇᴄᴏɴᴏᴍɪᴀ*

➪  _${usedPrefix}balance_
➪  _${usedPrefix}claim_
➪  _${usedPrefix}top_
➪  _${usedPrefix}levelup_
➪  _${usedPrefix}myns_
➪  _${usedPrefix}perfil_
➪  _${usedPrefix}work_
➪  _${usedPrefix}minar_
➪  _${usedPrefix}buy_
➪  _${usedPrefix}buyall_
➪  _${usedPrefix}transfer *tipo <cantidad> @tag*_
➪  _${usedPrefix}verificar_
➪  _${usedPrefix}unreg *numero de serie*_

*ᴏᴡɴᴇʀ ʏ ᴍᴏᴅᴇʀᴀᴅᴏʀᴇs.*

➪  _${usedPrefix}cajafuerte_
➪  _${usedPrefix}enable *restrict*_
➪  _${usedPrefix}disable *restrict*_
➪  _${usedPrefix}enable *autoread*_
➪  _${usedPrefix}disable *autoread*_
➪  _${usedPrefix}enable *public*_
➪  _${usedPrefix}disable *public*_
➪  _${usedPrefix}enable *pconly*_
➪  _${usedPrefix}disable *pconly*_
➪  _${usedPrefix}enable *gconly*_
➪  _${usedPrefix}disable *gconly*_
➪  _${usedPrefix}banchat_
➪  _${usedPrefix}unbanchat_
➪  _${usedPrefix}banuser *@tag*_
➪  _${usedPrefix}unbanuser *@tag*_
➪  _${usedPrefix}banuser *@tag*_
➪  _${usedPrefix}bc_ *texto*
➪  _${usedPrefix}bcchats *texto*_
➪  _${usedPrefix}bcgc *texto*_
➪  _${usedPrefix}cleartpm_
➪  _${usedPrefix}restart_
➪  _${usedPrefix}update_
➪  _${usedPrefix}addprem_ *@tag*
➪  _${usedPrefix}delprem_ *@tag*
➪  _${usedPrefix}listprem_
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://www.paypal.me/TheShadowBrokers133', '𝙿𝙰𝚈𝙿𝙰𝙻', 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', [
[' Presiona ', '/pack3'],
[' Owner ', '/owner'],
[' Pajines ', '/Video']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[𝐈𝐍𝐅𝐎] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

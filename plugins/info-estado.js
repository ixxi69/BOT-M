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

	let





 handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu2.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭─[ *boʇ oɟɟ doɯᴉиa* ]
│ *𝙷𝙾𝙻𝙰 ${name}*
│
│ *𝙴𝚂𝚃𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*
│ *𝙱𝙾𝚃 𝙰𝙲𝚃𝙸𝚅𝙾 ♡*
│ *𝙱𝙾𝚃 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 □*
│ *𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
╰───────────────
`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/ixxi69/BOT-M', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

import wweb from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal'
import cron from 'node-cron'

const { Client, LocalAuth, MesaggeMedia } = wweb

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-sexurity', '--disable-setuid-sandbox'],
        headless: true
    },
    webVersion: '2.2409.2',
    webVersionCache: {
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html'
    }
})

bot.on ('ready' , async () => {
    const media = MesageMedia. fromFilePath('./src/assets/media/gatito-blanco.jpg')
    await bot.sendMessage ('5492616357497@c.us', media, { sendMediaAsSticker: true})

} )

bot.on ('qr' , (qr) => {
    qrcode.generate(qr, { small: true })
})

bot.on('message', async message => {
    const from = message.from
    const msj = message.body.toLowerCase ()
    
})
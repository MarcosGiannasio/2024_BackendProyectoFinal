const { createTransport } = require('nodemailer')
const { configObject } = require('../config')

const transport = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: configObject.gmail_user,
        pass: configObject.gmail_pass
    }
})

exports.sendEmail = async ( { userClient='', subject='', html='' } ) => {
    await transport.sendMail({
        from: `Prueba <${configObject.gmail_user}>`,
        to: userClient,
        subject,
        html,
        attachments: [{
            filename: '',
            path: '',
            cid: 'nodejs'
        }]
    })
}
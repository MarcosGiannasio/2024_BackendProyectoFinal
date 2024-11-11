const twilio = require('twilio')
const { configObject } = require('../config')

const { twilio_account_sid, twilio_auth_token, twilio_phone_number} = configObject

const client = twilio(twilio_account_sid, twilio_auth_token)

exports.sendMessage = async () => {
    return await client.messages.create({
        body: 'Prueba',
        from: twilio_phone_number,
        to: '+13852223813'
    })
}
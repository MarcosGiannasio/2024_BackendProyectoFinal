
console.log('chat.js')

const socket = io()
let user
let chatbox = document.querySelector('#chatbox')

Swal.fire({
    title: 'Identifícate',
    input: 'text',
    text: 'ingresá tu usuario',
    inputValidator: value => {
        return !value && 'Escribí tu nombre para continuar!'
    },
    allowOutsideClick: false 
}).then(result => {
    user = result.value
})

chatbox.addEventListener('keyup', evt => {
    if (evt.key === 'Enter') {
        if (chatbox.value.trim().length > 0) {
            socket.emit('message', { user, message: chatbox.value })
            chatbox.value = ''
        }
    }
})

socket.on('messageLogs', data => {
    let log = document.querySelector('#messageLogs')
    let messages = ''
    data.forEach( message => {
          messages = messages + `${message.user} dice: ${message.message}<br>`
    })
    log.innerHTML = messages
})

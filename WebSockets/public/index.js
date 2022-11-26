//tengo la conexión al socket en el archivo index
const socket = io()

let chatBox = document.getElementById('chatBox')

//c vez que presiono tecla veo letra en consola del cliente
/* chatBox.addEventListener('keyup', e =>()
    console.log(e.key)
)) */

//lo envío a la consola del back el message
/* chatBox.addEventListener('keyup', e =>{
    socket.emit('message', e.key)
    socket.emit('coderTest', "Coder")
}) */

//envía a la consola del back la palabra completa
chatBox.addEventListener('keyup', e =>{
    if(e.key==="Enter") socket.emit('message', chatBox.value)
})

socket.on('history', data => {
    let message=""
    data.forEach(text => {
        message += `[${text.userId}]: ${text.message} <br/>`
        
    }); 
    document.getElementById('history').innerHTML = message
    chatBox.value=""
})

socket.on('alert', ()=>{
    alert('Nuevo usuario conectado')
})

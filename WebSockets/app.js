const express = require('express')
const { Server } = require('socket.io')
const app = express()

const server = app.listen(8080, console.log('Server up'))

//en ruta raíz muestro pg estática
app.use(express.static('./public'))

//utilizando la cte que pongo a escuchar el puerto 8080
//la necesito para crear servidor de Web Socket
const io = new Server(server)

//en el evento conexión del WS voy a hacer la función
/* io.on('connection', (socket)=>{
    console.log('Socket connected')
    //cuando recibas un paquete de datos con etiqueta message, console loguea en el back
    socket.on('message', data =>{
        console.log(data)
    })
}) */

//emite index, el servidor lo escucha con el on, y toma acción (pushea en array)
//el servidor emite al cliente la info del array con la etiqueta history, el cliente tiene q hacer algo en index.js

let log=[]

/* io.on('connection', (socket)=>{
    console.log('Socket connected')
    //cuando recibas un paquete de datos con etiqueta message, console loguea en el back
    socket.on('message', data =>{
        //almacena en array
        log.push(data)
        //devuelve al cliente el array entero con los mensajes acumulados
        socket.emit('history', log) //solo le envía la data al cliente que se conectó
    })
}) */

//si en vez de socket pongo io, le estaría enviando a todos. 
//entonces si entro con otra ventana, pongo otra frase, y se actualizan los dos 'history' (las dos ventanas)
io.on('connection', (socket)=>{
    console.log('Socket connected')
    //broadcast --> voy a enviar msj a todos menos a mí
    socket.broadcast.emit('alert')
    //para que el cliente que se conecta ya vea todos los msjs
    socket.emit('history', log)
    socket.on('message', data =>{
        log.push({userId: socket.id, message:data})
        io.emit('history', log) 
    })
})

//así pasa en telegram, puedo ver el historial de mensajes de antes de q yo me una
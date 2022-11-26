const express = require ('express')

const app = express()

let visitas = 0

const server = app.listen(8080, ()=> console.log('Server up'))

app.get('/', (request, response) => {
    //lo que debe hacer el servidor cuando llega un solicitud GET
    //a ruta /
    response.send('<h1 style="color:blue">Bienvenidos al servidor express<h1>')
})

app.get('/alumnos', (request, response) => {
    response.send("hola alumnos")
})

app.get('/user', (request,response)=>{
    response.send({
        nombre:"Adrián",
        apellido:"Gómez",
        edad:23
    })
})


app.get('/visitas', (request,response)=>{
    visitas++
    response.send("La cantidad de visitas es " + visitas)
})

app.get('/fyh', (request,response)=>{
    let fecha = new Date()
    response.send({
        fyh: fecha
    })
    
})
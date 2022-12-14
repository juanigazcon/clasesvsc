const express = require('express')
const usersRouter = require('./rutas/users')
const petsRouter = require('./rutas/pets')

const app = express()
app.use(express.json())

//la ruta raíz me devuelve una página estática
app.use(express.static('public'))
//si tengo un pdf llamado archivo.pdf, en la url puedo poner 8080/archivo.pdf

//para que la ruta estática sea en /contenido, no hay nada en ruta raíz
//app.use('contenido', express.static('public'))


const server = app.listen(8080, ()=> console.log('Server up'))

//le pido que use esa ruta cuando el usuario solicite algo en /users
app.use('/users', usersRouter)

app.use('/pets', petsRouter)




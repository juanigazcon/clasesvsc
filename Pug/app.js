const express = require('express')
const app = express()

const server = app.listen(8080, console.log('Server up'))

//seteo que vistas(1) van a estar en carpeta(2)
app.set('views','./views')
//seteo motor d plantillas como pug
app.set('view engine','pug')

app.get('/', (req, res)=>{
    res.render('home', {
        titulo: "Clase 10 de Backend"
    })
})

app.get('/datos', (req, res)=>{
    res.render('progress', {
        min: req.query.min,
        max: req.query.max,
        nivel:req.query.nivel,
        titulo: req.query.titulo
    })
})
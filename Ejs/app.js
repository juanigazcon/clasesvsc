const express = require('express')
const app = express()

const server = app.listen(8080, console.log('Server up'))

app.set('views','./views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let fakeData=[
{fname:"Matías",
lname:"Sánchez",
age:21},
{fname:"Adrián",
lname:"Abadín"},
{fname:"Lautaro",
lname:"Vázquez",
age:24}
]

let users = []

app.get('/', (req,res)=>{
    res.render('home', {
        mensaje: "Estamos en el río"
    })
})

app.get('/alumnos', (req,res)=>{
    res.render('home', {
        alumnos: fakeData
    })
})

app.get('/actividad', (req, res)=>{
    res.render('users', {
        users
    })
})

app.post('/users', (req,res)=>{
    users.push(req.body)
    res.redirect('/actividad')
})
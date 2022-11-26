const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const server = app.listen(8080, console.log('Server up'))

//en vez de crear el motor de plantilla lo traigo desde handlebars
app.engine('handlebars', handlebars.engine())
app.set('views','./views')
app.set('view engine', 'handlebars')

//no le mando objeto porque en mi plantilla home todo es estático
app.get('/',(req,res)=>{
    res.render('home')
})

//objetito es rta a consulta a BBDD
app.get('/user',(req,res)=>{
    res.render('user', {
        name:'Alex'
    })
})

let users = [
    {
        fname:'Alex',
        lname:'Marín',
        age:45
    },{
        fname:'Leo',
        lname:'Messi',
        age:35
    }
]

app.get('/users',(req,res)=>{
    res.render('users', {
        users: users
    })
})
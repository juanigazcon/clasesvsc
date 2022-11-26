const express = require('express')
const router = express.Router()

/* {id:1,
nombre: "Juana Gazcón",
email:"juana@gazcon.com"} */

let users = []

//ejecuta antes de ejecutar la lógica que está en el post
const middlewareCoder = (req, res, next) =>{
    let user = req.body
    if(!user.name || !user.lastname || !user.age) return res.status(400).send({err: "Mandatory data required"})
    //para darle paso al post
    next()
}

//users/
router.get('/', (req,res) =>{
    res.send({users})
})

//la ruta que declaro acá va desp de la que declaro en app.js
//users/2
router.get('/:id', (req,res)=>{
    let parametro = req.params.id
    res.send(parametro)
})

router.post('/', middlewareCoder, (req,res) =>{
    let user = req.body
//   if(!user.name || !user.lastname || !user.age) return res.status(400).send({err: "Mandatory data required"})
    users.push(user)
    res.send({message: "User created", user, users})
})

module.exports = router
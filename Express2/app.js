const express = require('express')
let frase = "Hola mundo cómo están"

const app = express()

const server = app.listen(8080, ()=> console.log('Server up'))

//preparo el servidor para recibir json
app.use(express.json())

//propiedad frase que valor es frase {frase: frase} => se abrevia {frase}
app.get('/api/frase', (req, res) => {
    res.send({frase})
})


//:num es un parámetro - accedo con req.params.num
app.get('/api/letras/:num', (req, res) => {
    if((req.params.num-1> frase.length)||(req.params.num-1 <= 0)) return res.status(400).send({err: "Out of bound"})
    if(isNaN(req.params.num-1)) return res.send({err: "Not a number!"})
     res.send ({letra:frase[req.params.num-1]})
})

app.get('/api/palabras/:num', (req, res) => {
    let array = frase.split(" ")   
    if((req.params.num-1> array.length)||(req.params.num-1 <= 0)) return res.send({err: "Out of bound"})
    if(isNaN(req.params.num-1)) return res.send({err: "Not a number!"})
     res.send ({buscada:array[req.params.num-1]}) 
})


app.post('/api/palabras', (req, res) =>{
    //recibe un objeto por body
    let { palabra } = req.body
    frase = frase.concat(` ${palabra}`)
    res.send({frase})
})

app.put('/api/palabras/:pos', (req, res)=>{
    let { palabra } = req.body
    let { pos } = req.params
    let array = frase.split(" ")
    let antes = array[pos-1]
    array[pos-1] = palabra
    frase = array.join(' ')
    res.send({actualizada: palabra, anterior: antes})
    
})

app.delete('/api/palabras/:pos', (req,pos)=>{
    let { pop } = req.params
    let array = frase.split(" ")
    array.splice(pop-1, 1)
    frase = array.join(' ')
    res.send({frase})

})



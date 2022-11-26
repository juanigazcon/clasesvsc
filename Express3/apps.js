const express = require('express')
const frase = "frase inicial"

const app = express()

const server = app.listen(8080, ()=> console.log('Server up'))

//propiedad frase que valor es frase {frase: frase} => se abrevia {frase}
app.get('/api/frase', (req, res) => {
    res.send({frase})
})














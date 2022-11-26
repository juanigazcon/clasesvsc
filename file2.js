const fs = require('fs')

fs.writeFileSync('hola.txt', new Date().toLocaleString())

try{
    let contenido = fs.readFileSync('hola.txt')
    console.log(contenido.toString())
} catch (err){
 //   throw new Error(err.message)
 console.log(err.message)
}


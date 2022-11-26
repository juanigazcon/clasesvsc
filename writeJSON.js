//process.argv
//es un array con X elementos
//en consola ejecuto $ node writeJSON hola
//obtengo un array de 3 elementos string:
// 1- ruta con node
// 2- ruta con writeJSON
// 3- hola
//ARRAY de argumento vector

/* Posición 2 ya es la primera palabra que yo escribí
En consola:
$ node writeJSON red 5

Obtengo:
{
    "red": 5
} */

const { info } = require('console')
const fs = require('fs')

/* let data = `{"${process.argv[2]}": ${process.argv[3]}}`

fs.writeFile('data.json', JSON.stringify(JSON.parse(data), null, 2), err =>{
    if (!err) console.log("File created")
}) */

//voy a modificar el package.json
//leo todo que es un string, lo convierto a objeto, lo escribo nuevamente como cadena de caracteres sobre escribiendo el contenido del archivo original
try{
let contenido = fs.readFile('package.json', 'utf-8', (err, data) => {
    if(err){
        throw 'err'
        }
        const info = {
            //en string, porque puse utf-8
            contenidoStr: data,
            //lo transformo a objeto que es lo que yo domino para poder ingresar a propiedad
            contenidoObj: JSON.parse(data)
    }
    console.log(info)
    info.contenidoObj.author= "Coder";
    fs.writeFile('package.json', JSON.stringify(info.contenidoObj, null, 2), erro => {
        if (err) console.log(err.message)
    })
} )
} catch(err){
    console.log(err.message)
}


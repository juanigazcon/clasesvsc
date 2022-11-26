//importo clase fs de un módulo nativo de node
const fs = require('fs')

//fs. ya me aparecen sus métodos
//estoy escribiendo el mi primera... en el archivo clase4
//cuando ejecute se me va a crear archivo en la misma carpeta, porque no le puse ninguna ruta
//si pongo algo en un archivo existente, lo sobreescribo
fs.writeFileSync('clase4.txt', 'Mi primera vez con archivos')

//si lo tiro así nomás y no existe el archivo, me tira error de file doesn´t exist
//readFile no tiene incorporado validar la existencia del archivo como el write
let contenido = fs.readFileSync('clase4.txt', 'utf-8')
console.log(contenido)

/* 
ALTERNATIVA EQUIVALENTE
let contenido = fs.readFileSync('clase4.txt')
console.log(contenido.toString()) */

try{
    let contenido = fs.readFileSync('clase4.txt')
    console.log(contenido.toString())
}catch(err){
    console.log(err.message)
    fs.writeFileSync('clase4.txt', 'Ahora ya existe')
}

//append es agregar, se agrega el texto detrás del existente
// \n para salto de línea
// \t tabulador
fs.appendFileSync('clase4.txt', 'texto nuevo agregado')

//para eliminar archivo, no valida que exista antes
fs.unlinkSync('clase4.txt')

try{
    fs.unlinkSync('clase4.txt')
}catch(err){
    console.log(err.message)
}

//no puedo eliminar una línea en específico
//tengo que leer todo mi archivo, tratarlo como string, eliminar una línea en memoria, reemplazar el contenido por el nuevo
//por último con el writeFile lo sobreescribo

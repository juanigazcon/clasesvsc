const fs = require('fs')

//data es el contenido del archivo
//lectura tiene el contenido entonces tiene error y data
fs.readFile('clase4.txt', (err, data) =>{
    if(err){
        console.log(err.message)
    } else {
        console.log(data.toString())
    }
})

//la escritura solo tiene error
//el callback de error tiene un callback adentro
fs.writeFile('clase4.txt', 'Hola mundo', err =>{
    if(!err){
        fs.readFile('clase4.txt', (err, data)=>{
            if(!err) console.log(data.toString())
        })
    }
}

) 

//Success solo se muestra después de agregar Append al archivo
fs.appendFile('clase4.txt', 'Append', err =>{
    if (!err) console.log ("Success")
})

fs.unlink('clase4.txt', err =>{
    if(!err) console.log("Deleted")
    else console.log("No se pudo borrar el archivo porque no existe")
})


const express = require('express')
const app = express ()
const fs = require('fs')
const server = app.listen(8080, console.log('Server up'))

//nombre motor, callback que lee archivo
app.engine('cdr', (filepath, obj, callback)=>{
    fs.readFile(filepath, (err,data)=>{
        if(err) return callback(new Error(err))
        const template = data.toString()
        //transformar en un string
        .replace('^^titulo$$', ''+obj.titulo)
        .replace('^^mensaje$$', ''+obj.mensaje)
        .replace('^^autor$$', ''+obj.autor)
        .replace('^^version$$', ''+obj.version)
        return callback(null, template)
    })
})

//views van a estar en carpeta views
app.set('views', './views')
//motor de plantillas se va a llamar cdr
app.set('view engine', 'cdr')

app.get('/', (req,res)=>{
    //render es el método para renderizar una vista
    //hasta ahora solo habíamos usado send
    //sabe donde está porque yo definí la carpeta /views
    res.render('Bienvenida', {
        titulo: "Los Miserables",
        mensaje: "Estamos bien",
        autor:"Juana Gazcón",
        version: 23
    })
})
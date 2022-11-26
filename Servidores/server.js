//módulo http es nativo, no instalo dep en package
const http = require('http')

//ejecuto método 
const server = http.createServer((request, response) => {
    console.log(request)
    //console.log("Alguien me hizo una petición")
    let respuesta
    let hora = new Date().getHours()

    if(hora>= 6 && hora <=12 ){
        response = 'Buenos días'
    } else if(hora > 12 && hora < 19) {
        response = 'Buenas tardes'
    } else {
        response = 'Buenas noches'
    }
    response.end(respuesta)

})

//le pido que se ponga a escuchar el puerto 8080
const connectedServer = server.listen (8080, () =>{
    console.log("Server Up")

})

const http = require('http')

const server = http.createServer((request, response) => {
    //saber la hora ¡¡¡???
    let hora = new Date().getHours()
    // hora = 6
    //segun la hora asignar una respuesta
    let message
    if (hora>=6 && hora<=12) {
        message = 'Buenos días' + hora
    } else if (hora>=13 && hora<19) {
        message = 'Buenas tardes' + hora
    } else {
        message = 'Buenas noches' + hora
    }
    response.end(message)
})

const connectedServer = server.listen(8080, () => {
    console.log('Server Up')
})

/* let prueba = Math.floor(Math.random()* 20 + 1)
console.log(prueba)

let obj = {}

for (let i=0; i<10000; i++){
    let random = Math.floor(Math.random()* 20 + 1)
    if(obj[random]){
        obj[random]++
    } else{
        obj[random] = 1
    }
}

console.log(obj) */

const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

let nombres = productos.map(item => item.nombre)
console.log(nombres)

let precioTotal = (productos.reduce((ac,el) => ac + el.precio, 0)).toFixed(2)
console.log(precioTotal)

let precioPromedio = (precioTotal/(productos.length-1)).toFixed(2)
console.log(precioPromedio)

let menorPrecio = productos[0].precio
let index = 0;

for (i=1; i< productos.length -1; i++){
    let precio = productos[i].precio;
    if(precio<menorPrecio){
        menorPrecio=precio;
        index=i;
    }   
}
console.log(productos[index])

let mayorPrecio = productos[0].precio
let index2 = 0;

for (i=1; i< productos.length -1; i++){
    let precio = productos[i].precio;
    if(precio>mayorPrecio){
        menorPrecio=precio;
        index2=i;
    }   
}
console.log(productos[index2])

const moment = require('moment')

let date = moment("2022-10-20")

console.log(date)







/* let suma = require('./ejemplo1')
let resta = require('./ejemplo1')


console.log(suma(2,3))
console.log(resta(2,3)) */

//si ejecuto esto, nos va a dar -1 en la suma y en la resta

//así 
let operaciones = require('./ejemplo1')

console.log(operaciones.suma(2,3))
console.log(operaciones.resta(2,3))

//con destructuring
/* let { suma, resta } = require('./ejemplo1') */

//como en React. para eso tengo que poner type: module en el package.json
/* import {suma, resta} from './ejemplo1' */
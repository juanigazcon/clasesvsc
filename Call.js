//función mostrar letras
//le paso un string, me muestra las letras una por una y al finalizar llama a la función X

const fin = () => console.log("terminé")


const mostrarLetras = (cadena, callback) => {
//que se muestre cada un segundo una letra de la palabra que le pasé en cadena
//el setInterval ya es un bucle, no hace falta for each 
let index = 0;
let timer = setInterval( ()=> {
    if(index < cadena.length){
        console.log(cadena[index]);
        index ++;
    } else{
        clearInterval(timer)
        //tengo que parar el contador
        callback();
    }
}
    , 1000)
}

setTimeout(()=> mostrarLetras("Hola", fin), 0)
setTimeout(()=> mostrarLetras("Hola", fin), 250)
setTimeout(()=> mostrarLetras("Hola", fin), 500)

/* 
Programación sincrónica y asincrónica

Callbacks: es una función que se envía como argumento de otra
Las funciones son objetos
Una función puede recibir como parámetro otra función

ejecutar recibe un callback:
const ejecutar = unaFuncion => unaFuncion();
const saludar = () => console.log('saludos')
ejecutar (saludar) es como tener ejecutar(() => console.log('saludos'))




*/
/*
En lo siguiente aun con 0 segundos aparece primero el mensaje B
*/

setTimeout(function callback() {
    console.log('A');
}, 0);

console.log('B');
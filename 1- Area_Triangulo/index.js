// Version 1
/*var altura = 5;
var base = 7;

function calcularAreaTriangulo(base, altura) {
    return base * altura / 2;
}
console.log(`El área de un triangulo de altura ${altura} y base ${base} es: ${calcularAreaTriangulo(base,altura)}`);
*/
//Version 2
/*
let altura = 5;
let base = 7;

//Funciones arrow (=>)
const calcularAreaTriangulo = (base, altura) => {
    return base * altura / 2;
};
console.log(`El área de un triangulo de altura ${altura} y base ${base} es: ${calcularAreaTriangulo(base,altura)}`);
*/
//Version 3
let altura = 5,
    base = 7;
const calcularAreaTriangulo = (base, altura) => base * altura / 2;
console.log(`El área de un triangulo de altura ${altura} y base ${base} es: ${calcularAreaTriangulo(base,altura)}`);
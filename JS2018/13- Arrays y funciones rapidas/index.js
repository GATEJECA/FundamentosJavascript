//funcion que suma todos los argumentos que se le pasen
function suma(...sumandos) {
    /*let final = 0;
    for (let i = 0; i < sumandos.length; i++) {
        final += sumandos[i];
    }
    return final;*/
    /*
		El metodo reduce nos ayuda a iterar un array (como foreach) y a tener un acumulador
		como primer parametro recibe una función, en la función recibe 3 parametros
		1- el nombre del acumulador, el nombre del valor del item en curso del array y el nombre de la posición del array
		2- como segundo parametro el valor inicial del acumulador
    */
    /*return sumandos.reduce(function(acumulador, valorelementoarray, valorposicionarray) {
        console.log(`El valor del acumulador: ${acumulador}`);
        console.log(`El valor del item del array: ${valorelementoarray}`);
        console.log(`El valor del item de la posición del array: ${valorposicionarray}`);
        acumulador += valorelementoarray;
        return acumulador;
    }, 0);*/
    /*simplificando lo anterior*/
    //forma 1
    /*return sumandos.reduce((acumulador, valorelementoarray) => {
        return acumulador += valorelementoarray
    }, 0);*/
    //forma 2 si es a una linea podemos reducirlo y es implicito el retun 
    //return sumandos.reduce((acumulador, valorelementoarray) => acumulador += valorelementoarray, 0);
    //forma 3 en este el resultado se va directamente a acumulador y se retorna
    //return sumandos.reduce((acumulador, valorelementoarray) => acumulador + valorelementoarray, 0);
    //forma 4 el ultimo valor es opcional
    return sumandos.reduce((acumulador, valorelementoarray) => acumulador + valorelementoarray);
}
//función que retornará todos los argumentos que se le pasen en un array, y el valor de cada elemento por 2
function dobles(...elementos) {
    /*const resultado = [];
    for (let i = 0; i < elementos.length; i++) {
        resultado.push(elementos[i] * 2);
    }
    return resultado;*/
    /*
		Funciónn map: función integrada en los array que recibe como parametro una función que se ejecutará
		por cada uno de los elementos. La cual si se recibe dos argumentos, será el primero el valor del item
		y el segundo el index del array y si se recibe 1 solo será el valor
    */
    /*return elementos.map(function(elem, index) {
        return elem * 2;
    });*/
    //simplificando
    //return elementos.map((elem) => elem * 2);
    //si solo es un argumento en un arrow function puedo omitir los parentesis
    return elementos.map(elem => elem * 2);
}
//devuelve un arreglo con los argumentos que se le manden de tipo par
const pares = (...numeros) => {
    /*const resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            resultado.push(numeros[i]);
        }
    }
    return resultado;*/
    /*
		Función filter: función integrada en los array que tiene recibe una función cuyos argumentos seran
		el valor y el indice de cada elemennto del array. La función si devuelve true el elemento se queda 
		si no lo quita del elemento a iterar
    */
    return numeros.filter(elemento => elemento % 2 == 0);
};



//pruebas
console.log(suma(4, 1, 12, 18, 7));
console.log(dobles(5, 2, 3));
console.log(pares(1, 3, 6, 8));

/*
Extra:
Foreach como funcion interna en un arreglo
*/

["1","2"].forEach(function(elemento,index){
    console.log(elemento);
    console.log(index);
});
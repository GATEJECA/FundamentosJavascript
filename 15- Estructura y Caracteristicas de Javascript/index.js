/*
	1- Podemos asignarle cualquier valor a las variables, podemos asignarle strings, 
	números, fechas, funciones, objetos, etc.
	2- Si definimos una variable con const no podemos reasignar el valor al 
	que hacen referencia
	3- Las variables definidas con var y let pueden ser reasignadas
	4- El carácter punto y coma no es obligatorio,
*/
function saludar() {
    nombre = "Carlos";//se de clara de forma global
    console.log(`Hola ${nombre}`);
}
console.log(saludar());
console.log(nombre);
console.log(window.nombre); //en el navegador es window, en NodeJs globals
(()=>"carlos")(); //función anonima


/*
	IIFE
	Inmediately Invoked Function Expresion

	Significa lo siguiente:

	(function(){
		return "holas"
	})();
*/
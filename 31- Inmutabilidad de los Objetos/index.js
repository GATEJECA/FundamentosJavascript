/*
	La inmutabilidad de los objetos es algo muy importante para la programación funcional.

	El operador === nos ayuda a comparar objetos, ejecutando la comparación no directamente 
	a los datos del objeto sino, a la referencia del objeto.

	Cuando asignamos un objeto a otro estamos haciendo que ambos apunten a la misma referencia, 
	por eso al modificar un objeto el otro también se verá afectado, porque ambos tienen la misma 
	referencia de memoria.

	La inmutabilidad tiene por objetivo hacer que los parámetros de un objeto sean no modificables o inmutables.
	
	Cuando Javascript nota que se ha escrito una variable con igual valor pero con diferente tipo, 
	es decir cuando tienes una variable a = 4, b = ‘4’ si comparamos 
	este valor de la siguiente manera (a == b) para Javascript esta comparación 
	será igual a True, a esto se le conoce como Coercion, en cambio si comparamos en Javascript 
	de esta manera (a === b) Javascript nos indicará que esta comparación es ** False **, debido 
	a que al hacer el === se le indica a Javascript que no aplique el concepto de Coercion.
*/
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
Persona.prototype.clone = function() {
    return Object.assign({}, this);
}
const julio = new Persona('Julio', 41);
const julian = julio.clone();
const cumpleanos = function(persona) {
    return persona.edad++;
}
console.log(julio);
console.log(cumpleanos(julian));
console.log(julio, julian);
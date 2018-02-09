/*
	Iteradores

	Los iteradores nos permitirán hacer listas infinitas de elementos haciéndolos distintos a los arreglos (arrays) 
	los cuales tienen un numero finito de elementos definidos

	Para los iteradores usando la propiedad de ES 2016 podemos obtener lo siguiente:

	next() - iterará los datos
	value - nos devolverá el valor del dato
	done - será un indicador para cuando la lista se haya terminado

	es necesario que el objeto que se devuelva deba ser con esas caracteristicas si se usan los iteradores es ES2016
*/
/*
	A continueación se muestra una solución al problema de fibonacci usando un ejemplo de 
	iteradores de forma manual
*/
const fibonacci = () => {
    let a = 0,
        b = 1;
    return {
        next: (reset=false) => {
            /*
            	aquí es donde entra la magia ya que cada vez que se mande a llamar next
            	a y b ya fueron definidos en otro lado y por lo tanto se guarda su valor
            */
            if(reset) a=0; b=1; //esto se hace si quiero resetear otra vez
            let f = a;
            a = b;
            b = f + a;
            return f;
        }
    };
};
/*
	es necesario guardar el valor en una variable y constante para que siempre recuerde la localización de la memoria
*/
const operacion = fibonacci(); //aquí es necesario la ejecución de la función ya que nos interesa el objeto

// y así cada vez que se ejecute lo siguiente pondrá los nuevos valores ya que a y b 
// fueron declarados antes y el objeto viene de un clousure 
operacion.next();

/*
	Ahora lo mostraré como lo dicta ES 2016.

	para recorrer los iteradores es necesario implementar el Symbol.iterator a un objeto.
	Pero antes creó una función fibonacci2 que devolverá un objeto con el metodo next devolviendo value y done
	basta con crear un objeto donde se le asignará el prototipo de iterator
*/
const fibonacci2 = () => {
    let a = 0,
        b = 1;
    return {
        next: () => {
            /*
            	aquí es donde entra la magia ya que cada vez que se mande a llamar next
            	a y b ya fueron definidos en otro lado y por lo tanto se guarda su valor
            */
            let f = a;
            a = b;
            b = f + a;
            return {
                value: f,
                done: false
            };
        }
    };
};
const operacion2 = {};
operacion2[Symbol.iterator] = fibonacci2;
//para fines de corte agrego un i
let i = 0
for (let value of operacion2) {
    console.log(value)
    i++
    if (i > 20) break
}
/*
Las Promesas son objetos y están asociadas con alguna tarea asincrónica.

Fue una forma introducida en ES 2015 para peticiones asincronas sin generar callback hell

Existen tres estados internos de las Promesas:

Pending
Fullfiled
Rejected

El constructor Promise tiene dos parámetros:

const promise = new Promise(function (resolve, reject) { 
	// aqui se debe de hacer algo con resolve y reject
)}
y cada parametro son funciones dependiendo de lo que haya sucedido en la tarea
*/
/*
	En el siguiente ejemplo se muestra una petición a un servidor externo usando promesas
*/
const get = URL => {
    return new Promise((exito, fallo) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            const DONE = 4;
            const OK = 200;
            if (this.readyState === DONE) {
                if (this.status === OK) {
                    //Todo OK
                    exito(JSON.parse(this.responseText));
                } else {
                    //Hubo un error
                    fallo(new Error(`Se produjo un error al realizar el request ${this.status}`));
                }
            }
        }
        xhr.open('GET', URL);
        xhr.send(null);
    });
};
/* Funcion para tratar el error */
const handleError = err => console.log(`Request failed: ${err}`);
/*
	Ejecución usando el metodo get creado anteriormente
	Cuando se retorna una promesa y termina su ejecución se puede ejecutar un then para continuar 
	o un catch si retorna un error para ambos metodos retorna una respuesta (si es exitoso en el then)
	o un error si falló en el catch
*/
let personaje = null;
get('https://www.swapi.co/api/people/1/').then(respuestapeticion1 => {
    personaje = respuestapeticion1.name; //se almacena el valor para proximo uso
    return get(respuestapeticion1.homeworld); //promesa que se realiza para traer el otro valor
}).then(respuestapeticion2 => {
    //Este then se llama ya que se retorno una promesa en el anterior y se puede estar anidando
    console.log(`${personaje} nació en ${respuestapeticion2.name}`);
}).catch(err => handleError(err)); //el catch para tratar si se llega a tener algún error
/*
	Ejecución usando el metodo fetch:
	https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
	que retorna un promesa para resolver una respuesta (objeto Response)
*/
fetch('https://www.swapi.co/api/people/1/').then(respuesta => respuesta.json()).then((respuestapeticion1) => {
    personaje = respuestapeticion1.name; //se almacena el valor para proximo uso
    return fetch(respuestapeticion1.homeworld); //promesa que se realiza para traer el otro valor
}).then(respuesta => respuesta.json()).then((respuestapeticion2) => {
    //Este then se llama ya que se retorno una promesa en el anterior y se puede estar anidando
    console.log(`${personaje} nació en ${respuestapeticion2.name}`);
}).catch((err) => handleError(err)); //el catch para tratar si se llega a tener algún error
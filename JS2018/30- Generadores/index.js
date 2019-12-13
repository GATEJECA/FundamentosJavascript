/*
	Los generadores son funciones especiales (introducidas en ES 2016) que se declaran así 
	function *nombrefunción  (no funciona con arow function) y de las que se puede salir y entrar varias veces con resultados diferentes. 

	Llamar a un Generator no ejecuta la función completa inmediatamente, 
	si no que devuelve un objeto Iterator el cúal devuelve el valor del iterador ( atraves de yield) o 
	delega a otra función Generator (a través de la variable yield*). 
	Nos serviremos del método next() para seguir iterando.

	yield es una palabra reservadaque devuelve en forma de objeto el valor que asignamos a yield 
	y la propiedad done que nos indica a través de true o false si el generador 
	ya no tiene más valores que mostrar.
	
	Ejemplo:

	function *soyUnGenerador(i) {
	  yield i + 1;
	  yield i + 2;
	  yield i + 3;
	}
	var gen = soyUnGenerador(1);
	console.log(gen.next());
	//  Object {value: 2, done: false}
	console.log(gen.next());
	//  Object {value: 3, done: false}
	console.log(gen.next());
	//  Object {value: 4, done: false}
	console.log(gen.next());
	//  Object {value: undefined, done: true}

	Otro Ejemplo:

	function* idMaker(){
	  var index = 0;
	  while(index < 3)
	    yield index++;
	}
	var gen = idMaker();
	console.log(gen.next().value); // 0
	console.log(gen.next().value); // 1
	console.log(gen.next().value); // 2
	console.log(gen.next().value); // undefined
	
	Ejemplo con *yield
	
	function* anotherGenerator(i) {
	  yield i + 1;
	  yield i + 2;
	  yield i + 3;
	}

	function* generator(i){
	  yield i;
	  yield* anotherGenerator(i);
	  yield i + 10;
	}

	var gen = generator(10);

	console.log(gen.next().value); // 10
	console.log(gen.next().value); // 11
	console.log(gen.next().value); // 12
	console.log(gen.next().value); // 13
	console.log(gen.next().value); // 20	
*/
/* A continuación presento el ejercicio de fibonacci con generadores*/
function* fibonacci() {
    let a = 0,
        b = 1;
    while (true) {
        let f = a;
        a = b;
        b = f + a;
        let reset = yield f;
        if (reset) a = 0, b = 1;
    }
};
const operacion = fibonacci(); //requiero del objeto que es de tipo Iterator
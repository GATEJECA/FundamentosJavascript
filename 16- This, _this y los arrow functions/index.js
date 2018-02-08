class Persona {
    constructor(nombre, amigos = []) {
        this.nombre = nombre;
        // si no le pasamoe el valor  a amigos por default podemos hacer lo siguiente:
        //this.amigo=amigos || []; esto tomará el valor de [] si se le pasa false, null o undefined
        this.amigos = amigos;
    }
    listarAmigos() {
        //No puedo hacer lo siguiente
        /*
        this.amigos.forEach(function (amigo) {
        	console.log(`Hola soy ${this.nombre} y mi amigo es ${elemento} `);
        });
        */
        //Solución 1
        /*const _this=this;//self o _this
        this.amigos.forEach(function (amigo) {
        	console.log(`Hola soy ${_this.nombre} y mi amigo es ${amigo} `);
        });*/
        //solución 2
        //con bind sobrescribe y llama al this de fuera
        /*this.amigos.forEach(function (amigo) {
        	console.log(`Hola soy ${this.nombre} y mi amigo es ${amigo} `);
        }.bind(this));*/
        //solución 3 usando arrow function, usará el bind automaticamente
        this.amigos.forEach((elemento) => console.log(`Hola soy ${this.nombre} y mi amigo es ${elemento} `));
    }
}
const sacha = new Persona("Sacha", ["pedro", "juan", "pepe"]);
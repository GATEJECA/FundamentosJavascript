const carlos = {
    nombre: "Carlos",
    apellido: "Garcia"
};

function saludar(veces) {
    for (let i = 0; i < veces; i++) {
        //si no se le especifica this, agarra el objeto window
        console.log(`Hola ${this.nombre} ${this.apellido}`);
    }
};
//con call permite llamar a la funcion automaticamente
// pasandole quien será this y como segundo y demas parametros los parametros de la función
//saludar.call(carlos, 3);
//con el apply los parametros se mandan en array
saludar.apply(carlos, [3]);
//lo anterior con arrow function no funciona
const saludar2 = veces => {
    for (let i = 0; i < veces; i++) {
        //si no se le especifica this, agarra el objeto window
        console.log(`Hola ${this.nombre} ${this.apellido}`);
    }
};
saludar2.apply(carlos, [3]);
/*
Resumiendo:

Metodo bind(): Es un método de todas las funciones, el cual nos devuelve una función para ser 
invocada en cualquier momento. Se caracteriza por permitirnos definir el scope-contexto 
y por permitir establecer previamente los parametros

const newFunction = fun.bind(contexto, primerParametro)// Establece el scope y el-los parametros de fun

newFunction(segundoParametro) // Ejecuta fun pero con la caracteristica de que ya esta establecido el scope y los parametros. Igualmente nos permite enviarle más parametros a fun si es el caso
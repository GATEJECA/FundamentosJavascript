/*
	Los closure son funciones que recuerdan el entorno en el cual fuerón 
	creadas, esto quiere decir que al llamar la función van a recordar 
	las variables que tenian en ese momento. 
*/
/*
	En el primer ejemplodeclaro una funcion (saludar familia) que recibe 1 parametro
	llamado apellido (omito parentesis ya que es un solo parametro)
	y devuelve una función que recibirá un parametro y devolverá un saludo
	recordando el primer argumento de la primera función y usará el argumento que se le esta pasando
*/
const saludarFamilia = apellido => nombre => `Hola ${nombre} ${apellido}`;
/*
	Habiendo declarando lo anterior ahora puedo mandar a llamar a la función saludarFamilia
	y pasaré el nombre de la familia y retornará una función a cada uno donde retornará un saludo
*/
const saludarGarcia = saludarFamilia("Garcia");
const saludarPerez = saludarFamilia("Perez");
console.log(saludarGarcia("Carlos"));
console.log(saludarPerez("Eduardo"));

/*Otro ejemplo de clousures sería el siguiente*/

const generaPrefijo = prefijo => valor => prefijo + valor;
const re = generaPrefijo("re");
console.log(re("malo"));


/*
Nota: Si no pones var/let/const  a una función la podes llamar a esa funcion desde cualquier 
parte de tu codigo (global) independientemente de donde declaraste la función (hoisting), 
pero esa funciones susceptible a ser sobrescrita si declaras otra con el mismo nombre en otra 
parte del código.

Ahora si la declaras con var/let/const vas a tener que declarar la función antes de utilizarla 
(nuevamente hoisting, sube al tope del scope la declaración de variables , pero no la asignación).
Con var/let tu funcion puede ser sobreescrita pero con const no.
personalmente prefiero con const todas las funciones al principio del codigo
*/
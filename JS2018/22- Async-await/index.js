/*
	Async-await
	
	Es la nueva forma introducida en ES 2016 para realizar tareas asincronas de manera mas facil
	Para utilizarlo se declara una funcion de tipo async y cuando se vaya a recibir una promesa
	podemos poner await para esperar a que termine de ejecutarse
*/
const handleError = err => console.log(`Request failed: ${err}`);
const getLuck = async () => {
    try {
        let objeto = await (await fetch('https://www.swapi.co/api/people/1/')).json(); //lo declaro para no realizar doble petición
        console.log(`${objeto.name} nació en ${await(await(await fetch(objeto.homeworld)).json()).name}`);
    } catch (error) {
        handleError(error);
    }
}
getLuck();
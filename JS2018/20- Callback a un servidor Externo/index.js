/*
    En el siguiente ejemplo se realizan peticiones a un servidor API Rest 
    de star wars donde devuelve el nombre de Luke y donde nació:
*/

function get(URL, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        const DONE = 4;
        const OK = 200;
        if (this.readyState === DONE) {
            if (this.status === OK) {
                //Todo OK
                callback(null, JSON.parse(this.responseText));
            } else {
                //Hubo un error
                callback(new Error(`Se produjo un error al realizar el request ${this.status}`));
            }
        }
    }
    xhr.open('GET', URL);
    xhr.send(null);
}
/* Funcion para tratar el error */
function handleError(err) {
    console.log(`Request failed: ${err}`);
}
/*llamada al metodo */
//aquí ya se esta haciendo dependencias de calbacks, esto se le conoce como Callback Hell
get('https://www.swapi.co/api/people/1/', function onResponse(err, luke) {
    //if de una linea
    if (err) return handleError(err)
    /* Para traer el mundo */
    get(luke.homeworld, function onHomeworldResponse(err, homeworld) {
        if (err) return handleError(err);
        luke.homeworld = homeworld;
        console.log(`${luke.name} nació en ${luke.homeworld.name}`);
    });
});
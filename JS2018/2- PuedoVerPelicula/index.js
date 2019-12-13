class Cine {
    constructor(nombre) {
        this.nombre = nombre;
        this.peliculas = [];
        this.asignarPeliculas = (pelicula) => this.peliculas.push(pelicula);
        this.puedoVerPelicula = (pelicula, cliente) => {
            pelicula = this.encontrarPelicula(pelicula);
            if (pelicula) {
                if (cliente.edad > pelicula.pg) {
                    console.log(`El Cliente ${cliente.nombre}, con edad ${cliente.edad} puede ver la película ${pelicula.nombre}.`);
                } else if (cliente.vieneconadulto) {
                    console.log(`El Cliente ${cliente.nombre}, con edad ${cliente.edad} que viene acompañado de un adulto, puede ver la película ${pelicula.nombre}.`);
                } else {
                    console.log(`El Cliente ${cliente.nombre}, con edad ${cliente.edad} no puede ver la película ${pelicula.nombre}.`);
                }
            } else {
                console.log(`No se encontró la película`);
            }
        };
        this.encontrarPelicula = (nombrePelicula) => {
            let resultado = false;
            for (let pelicula of this.peliculas) {
                if (pelicula.nombre == nombrePelicula) {
                    resultado = pelicula;
                    break;
                }
            }
            return resultado;
        };
    }
};
class Pelicula {
    constructor(nombre, pg) {
        this.nombre = nombre;
        this.pg = pg;
    }
};
class Cliente {
    constructor(nombre, edad, vieneconadulto) {
        this.nombre = nombre;
        this.edad = edad;
        this.vieneconadulto = vieneconadulto;
    }
};
let micine = new Cine("Super Cine");
micine.peliculas.push(new Pelicula('Harry Potter 1', 10), new Pelicula('Star Wars 7', 12));
micine.puedoVerPelicula("Harry Potter 1", new Cliente("Carlos", 23, false));
var nombre = "Carlos";

function saludar(nombre) {
    /*Si declaro aquí nombre = "Nuevo"; en lugar del bloque if es lo mismo*/
    if (true) {
        //nombre = "Nuevo";
    }
    for (var i = 0; i < 10; i++) {
    	console.log(`Hola ${nombre}`);
    }
    //Existe i ya que las variables son declaradas antes a menos que se use let
    console.log(i);
    for (let f = 0; f < 10; f++) {
    	console.log(`Hola ${nombre}`);
    }
    //con let ya solo existe en el bloque, da error
    //console.log(f);
    //con const solo sería se una declaración que nunca cambia
}
saludar(nombre);
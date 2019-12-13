/**
 * El siguiente programa devuelve la cantidad de kilometros que recorre una persona en un día
 * Así como el promedio que realiza en la semana.
 */
/*Declararaciones Generales*/
const semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const minkm = 5;
const maxkm = 15;
const corredores = [{
    Nombre: "Carlos García",
    Distancia: []
}, {
    Nombre: "Junito Bodoque",
    Distancia: []
}, {
    Nombre: "Carlos Tejeda",
    Distancia: []
}, {
    Nombre: "Eduardo García",
    Distancia: []
}];
/*Funciones*/
//En esta función genero la distancia en los dias especificados
const generarDistancia = (corredor, dias) => {
    for (var i = 0; i < dias.length; i++) {
        corredor.Distancia.push({
            Dia: dias[i],
            kilometros: Math.round(Math.random() * (maxkm - minkm) + minkm)
        });
    }
    return corredor;
}
//Con esta función mando a llamar los resultados
const desplegarInformacion = (corredor) => {
    console.log(`El corredor ${corredor.Nombre} realizó las siguientes distancias:`);
    let totales = 0;
    for (var i = 0; i < corredor.Distancia.length; i++) {
        console.log(`El día ${corredor.Distancia[i].Dia} recorrió ${corredor.Distancia[i].kilometros} kilometros`);
        totales += corredor.Distancia[i].kilometros;
    }
    console.log(`En total recorrió ${totales} kilometros con un promedio semanal de ${(totales/corredor.Distancia.length).toFixed(2)} kilometros`);
}
/*Despliegue de Información*/
for (var i = 0; i < corredores.length; i++) {
    corredores[i] = generarDistancia(corredores[i], semana);
    desplegarInformacion(corredores[i]);
}
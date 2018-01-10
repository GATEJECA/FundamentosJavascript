/*Declaraciones Generales*/
let Goku = {
    vida: 100
};
let Superman = {
    vida: 100
};
const PODER_MINIMO = 5;
const PODER_MAXIMO = 12;
/*Funciones*/
const ganador = (peleador) => peleador.vida > 0;
const enCombate = (peleador1, peleador2) => peleador1.vida > 0 && peleador2.vida > 0;
const calcularGolpe = () => (Math.random() * (PODER_MAXIMO - PODER_MINIMO)) + PODER_MINIMO;
/*Ejecucion*/
let round = 0;
while (enCombate(Goku, Superman)) {
    console.log(`Round: ${++round}`);
    const golpeGoku = calcularGolpe();
    const golpeSuperman = calcularGolpe();
    if (golpeGoku > golpeSuperman) {
        console.log(`Goku ataca a superman con un golpe de ${golpeGoku}`);
        Superman.vida -= golpeGoku;
        console.log(`A Superman le quedan ${Superman.vida} puntos de vida`);
    } else {
        console.log(`Superman ataca a goku con un golpe de ${golpeSuperman}`);
        Goku.vida -= golpeSuperman;
        console.log(`A Goku le quedan ${Goku.vida} puntos de vida`);
    }
}
if (ganador(Goku)) {
    console.log(`Goku ganó la pelea. Su vida es de: ${Goku.vida}`);
} else {
    console.log(`Superman ganó la pelea. Su vida es de: ${Superman.vida}`);
}
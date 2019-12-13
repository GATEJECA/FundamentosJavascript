/**
 * El siguiente programa transforma una palabra con base en 4 reglas:
 *  1- Si la palabra termina en "ar", se le quitan esos dos caracteres
 *  2- Si la palabra inicia con Z, se le añade "pe" al final
 *  3- Si la palabra traducida (con reglas 1 y 2) tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio
 *  4- Si la palabra original es un palíndromo, ninguna regla anterior se cuenta y se devuelve, la misma palabra intercalando mayúsculas y minúsculas
 */
class Transformador {
    constructor(str) {
        /*Métodos Internos*/
        /*Regla de decisión*/
        this.revertir = (str) => str.split('').reverse().join('');
        /*Regla 4*/
        this.invertirMayusculasMinusculas = (str) => str.toUpperCase().split('').map((elem, index) => index % 2 === 0 ? elem.toUpperCase() : elem.toLowerCase()).join('');
        /*Regla 1*/
        this.termminaConAr = (str) => {
            this.traduccion = str.toLowerCase().endsWith('ar') ? str.slice(0, -2) : str;
            return this;
        };
        /*Regla 2*/
        this.empezarConZ = (str) => {
            this.traduccion = str.toLowerCase().startsWith('z') ? `${str}pe` : str;
            return this;
        };
        /*Regla 3*/
        this.muchasLetras = () => {
            const longitud = this.traduccion.length;
            const mitad = Math.round(longitud / 2);
            this.traduccion = longitud >= 10 ? `${this.traduccion.slice(0,mitad)}-${this.traduccion.slice(mitad)}` : this.traduccion;
        };
        /*Evaluación de Reglas*/
        this.traduccion = "";
        if (str === this.revertir(str)) {
            this.traduccion = this.invertirMayusculasMinusculas(str);
        } else {
            this.termminaConAr(str).empezarConZ(str).muchasLetras();
        }
        console.log(this.traduccion);
    }
}
/*Ejecución*/
new Transformador('sometemos'); // SoMeTeMoS
new Transformador('Programar'); // Program
new Transformador('Zorro'); // Zorrope
new Transformador('Zarpar'); // Zarparpe
new Transformador('abecedario'); // abece-dario
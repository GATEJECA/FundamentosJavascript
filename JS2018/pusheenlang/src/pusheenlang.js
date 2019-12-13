export default class pusheenlang {
    constructor(str) {
        /*Regla de decisión*/
        this.revertir = (str) => str.split('').reverse().join('');
        /*Regla 4*/
        this.invertirMayusculasMinusculas = (str) => str.toUpperCase().split('').map((elem, index) => index % 2 === 0 ? elem.toUpperCase() : elem.toLowerCase()).join('');
        /*Regla 1*/
        this.termminaConAr = (str) => {
            this.traduccion = str.toLowerCase().endsWith('ar') ? str.slice(0, -2) : str;
            console.log(this);
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
            this.empezarConZ(this.termminaConAr(str).traduccion).muchasLetras();
        }
    }
}
const dias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
const nacimiento = new Date(1994, 07, 21); //La estructura es año, mes - 1, día
const hoy = new Date();
const tiempomil = hoy - nacimiento;
const tiemposeg = tiempomil / 1000;
const tiempomin = tiemposeg / 60;
const tiempohor = tiempomin / 60;
const tiempodias = tiempohor / 24;
const tiempoyear = tiempodias / 365;
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
console.log(dias[proximo.getDay()]);
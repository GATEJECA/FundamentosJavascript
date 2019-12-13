class Toggable {
    constructor(elemento) {
        this.el = elemento;
        this.el.innerHTML = 'Off';
        this.activated = false;
        //solución 1 bind
        //con el bind decimos que el this será el objeto de instancia toggable y no el elemento doom
        //this.el.addEventListener('click', this.onClick.bind(this));
        //solución 2 bind
        this.onClick = this.onClick.bind(this);
        this.el.addEventListener('click', this.onClick);
    }
    onClick(ev) {
        //cambiar estado interno de off a on y viceversa
        //lamar a toggleText
        this.activated = !this.activated;
        this.toggleText();
    }
    toggleText() {
        //cambiar el texto
        this.el.innerHTML = this.activated ? 'On' : 'Off';
    }
}
const button = document.getElementById("boton");
const miboton = new Toggable(button);
//Otra opción para el metodo bind el es siguiente
const saludar = (nombre, apellido) => console.log(`Hola ${nombre} ${apellido}`);
const saludaracarlos = saludar.bind(null, "Carlos");
//el null es para cambiar el contexto como this, si estuviese referenciando
//con lo anterior  se le retorna la función saludar y se le mandará al primer parametro que reciba el valor de Carlos
console.log(saludaracarlos("Garcia"));
console.log(saludaracarlos("Tejeda"));
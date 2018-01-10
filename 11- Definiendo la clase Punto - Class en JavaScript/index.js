class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    moverEnX(x) {
        this.x += x;
    }
    moverEnY(y) {
        this.y += y;
    }
}
const p1 = new Punto(0, 4);
const p2 = new Punto(3, 0);
const niveles = 15;
//90 maxima tecla y 65 minimo
const generarTeclaAleatoria = () => Math.round(Math.random() * (90 - 65) + 65);
//con fill lleno el array (con la dimensión espeficificada previamente) 
//de 0 y despues a cada elemento lo sobrescribo con una tecla aleatoria
const generarTeclas = niveles => new Array(niveles).fill(0).map(generarTeclaAleatoria);
let teclas = generarTeclas(niveles);
const getElementByKeyCode = keyCode => document.querySelector(`[data-key="${keyCode}"`);
const activate = (keyCode, opts = {}) => {
    const el = getElementByKeyCode(keyCode);
    el.classList.add('active');
    if (opts.success) el.classList.add("success");
    else if (opts.fail) el.classList.add("fail");
    setTimeout(deactivate.bind(null, el), 500);
}
const deactivate = el => el.className = "key";
const siguienteNivel = (nivelActual) => {
    if (nivelActual == (niveles - 1)) return alert("Ganaste");
    alert(`Nivel ${nivelActual+1}`);
    for (let i = 0; i <= nivelActual; i++) {
        setTimeout(() => {
            activate(teclas[i]);
        }, 1000 * (i + 1));
    }
    let i = 0;
    let teclaActual = teclas[i];
    const onkeydown = (ev) => {
        if (ev.keyCode == teclaActual) {
            activate(teclaActual, {
                success: true
            });
            i++;
            if (i > nivelActual) {
                window.removeEventListener('keydown', onkeydown);
                setTimeout(() => siguienteNivel(i), 1500);
            }
            teclaActual = teclas[i];
        } else {
            activate(ev.keyCode, {
                fail: true
            });
            activate(teclaActual, {});
            window.removeEventListener('keydown', onkeydown);
            setTimeout(() => alert('Perdiste'), 1500);
        }
    }
    window.addEventListener("keydown", onkeydown);
}
siguienteNivel(0);
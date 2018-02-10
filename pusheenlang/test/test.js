const expect = require('chai').expect;
const pusheenlang = require('..').default;
describe('#pusheenlang', function() {
    it('Si la palabra termina con "ar", se le quitan esas dos letras', function() {
        const translation = (new pusheenlang("Programar")).traduccion;
        expect(translation).to.equal("Program");
    });
    it('Si la palabra inicia con Z, se le añade "pe" al final', function() {
        const translation = new pusheenlang("Zorro").traduccion;
        const translation2 = new pusheenlang("Zarpar").traduccion;
        expect(translation).to.equal("Zorrope");
        expect(translation2).to.equal("Zarppe");
    });
    it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function() {
        const translation = new pusheenlang("abecedario").traduccion;
        expect(translation).to.equal("abece-dario");
    });
    it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function() {
        const translation = new pusheenlang("sometemos").traduccion;
        expect(translation).to.equal("SoMeTeMoS");
    });
});
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pusheenlang = function pusheenlang(str) {
    var _this = this;

    _classCallCheck(this, pusheenlang);

    /*Regla de decisión*/
    this.revertir = function (str) {
        return str.split('').reverse().join('');
    };
    /*Regla 4*/
    this.invertirMayusculasMinusculas = function (str) {
        return str.toUpperCase().split('').map(function (elem, index) {
            return index % 2 === 0 ? elem.toUpperCase() : elem.toLowerCase();
        }).join('');
    };
    /*Regla 1*/
    this.termminaConAr = function (str) {
        _this.traduccion = str.toLowerCase().endsWith('ar') ? str.slice(0, -2) : str;
        console.log(_this);
        return _this;
    };
    /*Regla 2*/
    this.empezarConZ = function (str) {
        _this.traduccion = str.toLowerCase().startsWith('z') ? str + 'pe' : str;
        return _this;
    };
    /*Regla 3*/
    this.muchasLetras = function () {
        var longitud = _this.traduccion.length;
        var mitad = Math.round(longitud / 2);
        _this.traduccion = longitud >= 10 ? _this.traduccion.slice(0, mitad) + '-' + _this.traduccion.slice(mitad) : _this.traduccion;
    };
    /*Evaluación de Reglas*/
    this.traduccion = "";
    if (str === this.revertir(str)) {
        this.traduccion = this.invertirMayusculasMinusculas(str);
    } else {
        this.empezarConZ(this.termminaConAr(str).traduccion).muchasLetras();
    }
};

exports.default = pusheenlang;
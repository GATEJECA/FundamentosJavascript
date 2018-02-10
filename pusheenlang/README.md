# Pusheenlang

Pusheenlang es un idioma inventado para usos educativos

## Descripción del Idioma

El siguiente programa transforma una palabra con base en 4 reglas:
- Si la palabra termina en "ar", se le quitan esos dos caracteres
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida (con reglas 1 y 2) tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio
- Si la palabra original es un palíndromo, ninguna regla anterior se cuenta y se devuelve, la misma palabra intercalando mayúsculas y minúsculas

## Instalación

```
npm install pusheenlang
```
# Uso

```
import pusheenlang from 'pusheenlang'

(new pusheenlang('sometemos')).traduccion; // SoMeTeMoS
(new pusheenlang('Programar')).traduccion; // Program
(new pusheenlang('Zorro')).traduccion; // Zorrope
(new pusheenlang('Zarpar')).traduccion; // Zarparpe
(new pusheenlang('abecedario')).traduccion; // abece-dario
```
## Creditos

- [Carlos García](https://twitter.com/gatejeca)

##Licencia
[MIT](https://opensource.org/licenses/MIT)
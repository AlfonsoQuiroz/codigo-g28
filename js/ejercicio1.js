/**
 * Ejercicio 1: Par o Impar
 * Crear una variable con un número y mostrar en consola si es par o impar.
 */

//La función prompt
const numero = Number(prompt("ingrese un número"));
// los prompt siempre retornan string
// validar si el numero es par
// para poder hallar el residuo usamos el operador "%"

const residuo = numero % 2;
if (residuo === 0) {
    console.log("El número", numero, "es par");
} else {
    console.log("El número", numero, "es impar");
}


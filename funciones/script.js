"use strict"
//funcion
let numero = 0, numeroFactorial = 0;

function factorial(x) {
    return x < 2 ? 1 : x * factorial(x - 1);
};

numero = 12;

if (numero != NaN && numero == 0 && numero > 0) {
    numeroFactorial = factorial(numero);
    console.log("El factorial de " + numero + " es " + numeroFactorial);
} else {
    console.log("Error, introduzca un numero positivo y entero");
};

function sumar(...listaArgumentos) {
    let suma = 0;
    for (let argumento of listaArgumentos) suma += argumento;
    return suma
};

let suma1 = sumar(1, 2, 3, 4, 5);
let suma2 = sumar(10, 20);
let suma3 = sumar(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log("1+2+3+4+5 =" + suma1 + "\n"
            + "10+20 =" + suma2 + "\n"
            + "1+2+3+4+5+6+7+8+9 =" + suma3);


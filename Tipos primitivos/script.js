"use strict"
//boolean
let esAdulto = true;
console.log(esAdulto); 
//number
let edad = 25;
console.log(edad); 
let n = 9007199254740993n;

let sinN = 9007199254740993;

console.log(n);
console.log(sinN);
//String
let nombre = "Juan";
console.log(nombre); 

console.log('Esto es un \n salto de linea');
console.log('Esto es un \t tabulador');
console.log('Esto es \\ es una barra literalmente')

//NULL Y UNDEFINED
let nombreCompleto = null;
console.log(nombreCompleto); 
let nombreCompleto2;
console.log(nombreCompleto2); 

//Conversión a números
let edad2 = "25";
console.log(Number(edad2)); 
console.log(parseInt("123"));
console.log(parseInt("00000101", 2));
console.log(parseFloat("1.23"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

//Conversion a cadenas
console.log(String(123));
console.log((123).toString()); 
console.log(String(true)); 
console.log(String(null));

let pi = 3.14159265359;
console.log(pi.toFixed(3));
console.log(pi.toExponential(3));
console.log(pi.toPrecision(3));

//Conversion booleanos
console.log(Boolean("hola"));
console.log(Boolean(""));
console.log(Boolean(123));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean({}));

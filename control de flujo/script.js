"use strict"
//if..else
let x = 5;
let y = 10;
let mensaje;

if (x > y) {
  mensaje = "x es mayor que y";
} else {
  mensaje = "x es menor o igual que y";
}
console.log(mensaje);
//if..elseif
let edad = 20;
let carnet = true;
let m;

if (edad < 18) {
  mensaje = "No puedes conducir, eres menor de edad";
} else if (edad >= 18 && !carnet) {
  mensaje = "Tienes la edad pero te falta el carnet";
} else if (edad >= 18 && carnet) {
  mensaje = "Puedes conducir";
}

console.log(m);

//switch..case
let c = prompt("Introduce el tipo de carnet (A, B, C, D):");
let vehiculos;

switch (carnet) {
  case "A":
    vehiculos = "motos y ciclomotores";
    break;
  case "B":
    vehiculos = "coches y vehículos ligeros";
    break;
  case "C":
    vehiculos = "camiones";
    break;
  case "D":
    vehiculos = "autobuses";
    break;
  default:
    vehiculos = "Tipo de carnet desconocido";
}
console.log(vehiculos);

let w = prompt("Pon gallina o loro o serpiente o cocodrilo");
let animal = "", especie = "";

switch (animal) {
  case "gallina":
  case "loro":
    especie = "ave";
    break;
  case "serpiente":
  case "cocodrilo":
    especie = "reptil";
    break;
  default:
    especie = "desconocida";
}

//for
let numero = Number(prompt("Introduce un número para generar su tabla de multiplicar:"));
let tablaMultiplicar = "";

if (!isNaN(numero) && numero > 0 && numero % 1 === 0) {
  for (let i = 1; i <= 10; i++) {
    tablaMultiplicar += `${numero} x ${i} = ${numero * i}\n`;
  }
  console.log(tablaMultiplicar);
} else {
  console.log("Por favor, introduce un número entero positivo.");
}

//for sin inicialización
let z = 1;
for (; z <= 10; z++) {
  console.log(z);
}

//for sin condición
for (let i = 1; ; i++) {
  if (i > 10) break;
  console.log(i);
}

//for sin expresion final
for (let i = 1; i <= 10;) {
  console.log(i);
  i++;
}

//while
let numeroIteraciones = 3;
let iteracion = 0;
let me = "";

while (iteracion < numeroIteraciones) {
  mensaje += `Iteración número ${iteracion + 1}\n`;
  iteracion++;
}

if (mensaje === "") {
  mensaje = "No se ha realizado ninguna iteración";
}

console.log(me);

//do..while
let nI = 3;
let itera = 0;
let mens = "";

do {
  mensaje += `Iteración número ${iteracion + 1}\n`;
  iteracion++;
} while (iteracion < numeroIteraciones);

console.log(mens);

//Continue

let i = 0;
let mensa = "";
while (i <= 10) {
  if (i === 5) {
    i++;
    continue;
  }
  mensa += `El número ${i} no es 5\n`;
  i++;
}
console.log(mensa);



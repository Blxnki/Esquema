"use strict"
//operadores aritmeticos
let a = 10;
let b = 5;
let c = 3;
//suma
console.log(a + b);
//resta
console.log(a - b);
//multiplicacion
console.log(a * b);
//division
console.log(a / b);
//division con resto
console.log(a % b);
//operadores negacion y unario
console.log(-a);
console.log(+a);
//incremento
console.log(c++);
console.log(c);
//decremento
console.log(--b);
console.log(b)

//Operadores de Asignación
x = 27;
y = 3;
z = "hola";
console.log(x += y);  // Equivalente a: x = x + y
console.log(x -= y);  // Equivalente a: x = x - y
console.log(x += "mundo")

let d = 5; e += 5; f *= 2;
d += e -= f; 
console.log(d);

//operadores de comparacion
console.log("JavaScript" > "Java"); 
console.log("A" < "B"); 
console.log("a" < "A"); 
console.log("2" > "12"); 
console.log("12" > 2);
console.log("" == 0); 
console.log("2" === 2); 
console.log(null == undefined); 
consoloe.log(null === undefined); 

//Operadores logicos
console.log(true && true); 
console.log(true && false); 
console.log(false && true); 
console.log(false && false);
console.log(true || true); 
console.log(true || false); 
console.log(false || true); 
console.log(false || false);
console.log("" && "Hola");
console.log("Hola" || "");

//Operadores condicionales
let x = "JavaScript";
let mensaje = (x === "JavaScript") ? "Es JavaScript" : "No es JavaScript";
console.log(mensaje);

//Operador typeof
console.log(typeof 10); 
console.log(typeof "JavaScript"); 
console.log(typeof true); 
console.log(typeof null); 
console.log(typeof undefined); 

//PRECEDENCIA DE OPERADORES
console.log(2 + 3 * 5 **2);
console.log((2 + 3) * 5 ** 2);

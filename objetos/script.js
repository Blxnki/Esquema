"use strict"
const miCoche = {
    marca: "Ferrari",
    modelo: "Testarossa",
    potencia: 390,
    datosVehiculo: function() {
      return `Marca: ${this.marca}\nModelo: ${this.modelo}\nPotencia: ${this.potencia} CV`;
    }
  };

let atributo = "modelo";
console.log(miCoche[atributo]); 

miCoche.modelo = "Roma Spider";
miCoche.color = "rojo";

//delete miCoche.color;

for (let atributo in miCoche) {
    console.log(atributo + ": " + miCoche[atributo]);
  }

  const yo = {
    nombre: "Juan",
    edad: 30,
    DNI: "12345678A"
  };
  
  miCoche.propietario = yo;
  
  console.log(miCoche.propietario.nombre); 

  console.log(miCoche.datosVehiculo());

  miCoche.arrancar = function() {
    console.log("¡Arranco!");
  };
  
  miCoche.arrancar(); 
  
  //delete miCoche.arrancar;

  function Coche(marca, modelo, potencia) {
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
    this.datosVehiculo = function() {
      return `Marca: ${this.marca}\nModelo: ${this.modelo}\nPotencia: ${this.potencia} CV`;
    };
  }
  
  const miCoche = new Coche("Toyota", "Corolla", 150);
  console.log(miCoche.datosVehiculo());

  function tipoObjeto(objeto) {
    if (objeto instanceof Coche) {
      return "Coche";
    } else if (objeto instanceof Persona) {
      return "Persona";
    }
    return "Desconocido";
  }
  
  const miCoche = new Coche("Toyota", "Corolla", 150);
  console.log(tipoObjeto(miCoche)); 

let x = 10;
x = 20; // Se crea un nuevo valor 20 en memoria[10].
let str = "Hola";
str = "Mundo"; // Se crea una nueva cadena "Mundo"[10].

let persona = {
  nombre: "Juan",
  edad: 30
};

persona.edad = 31; // Modifica la propiedad edad del objeto persona[4][10].

let numeros = [1, 2, 3];
numeros.push(4); // Modifica el array original[4].

let numero1 = 5;
let numero2 = new Number(5);
console.log(numero1 == numero2); // true
console.log(numero1 === numero2); // false

let obj1 = new Number(5);
let obj2 = new Number(5);
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false

// Inicializamos la cola de pacientes
const cola = ["Juan", "María", "Pedro"];

console.log("Cola inicial:", cola);

// Llega un nuevo paciente y se une a la cola
cola.push("Ana");
console.log("Ana llega y se une a la cola:", cola);

// Se atiende al primer paciente
const atendido = cola.shift();
console.log(`Se atiende a ${atendido}. Cola actualizada:`, cola);

// Llega un paciente que se cuela
cola.unshift("Carlos");
console.log("Carlos se cuela al principio de la cola:", cola);

// Llega una urgencia
cola.unshift("Urgencia: Laura");
console.log("Llega una urgencia. Laura pasa primero:", cola);

// Se atiende al siguiente paciente (la urgencia)
const urgencia = cola.shift();
console.log(`Se atiende la ${urgencia}. Cola final:`, cola);

let marca = "Ferrari";
console.log(marca.charAt(1));

console.log(marca.length);

let cadena = "Hola";
for (let i = 0; i < cadena.length; i++) {
    console.log(cadena[i]);
};

for (let letra of cadena) {
  console.log(letra);
};

let saludo = "Hola";
let nombre = "Mundo";
console.log(saludo.concat(", ", nombre, "!"));

let texto = "JavaScript";
console.log(texto.slice(0, 4)); 
console.log(texto.slice(-6));

console.log(texto.substring(0, 4));

let frase = "Me gusta JavaScript";
console.log(frase.replace("JavaScript", "Python"));

let palabra = "Hola";
console.log(palabra.toUpperCase());
console.log(palabra.toLowerCase());

let mensaje = "   Hola Mundo   ";
console.log(mensaje.trim());

let lista = "manzana,pera,plátano";
console.log(lista.split(","));


let frase2 = "JavaScript es genial";
console.log(frase2.includes("JavaScript")); 
console.log(frase2.startsWith("Java")); 
console.log(frase2.endsWith("genial"));
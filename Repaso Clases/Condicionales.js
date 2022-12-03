// ClASE 2 CONTROL DE FLUJO (CONDICIONALES)

//Estructura basica

let edad =  parseInt(prompt("Cual es tu edad?"));

if (edad < 18) {
    alert("Puedes comprar alcohol")
} else {
    alert("No puedes comprar alcohol")
} 

// Ingresar un numero y ver si es par o impar 

let numero = parseInt(prompt("Ingrese un numero"));

if (numero%2==0) {
    alert ("Su numero es par");
} else if (numero%3==0) {
    alert ("Su numero es impar");
}

//Ingresar un numero y ver si el numero es multiplo de 3 imprimir fizz 
// Si es multiplo de 5 imprimir buzz 
// Si es multiplo de 3 y 5 imprimir FizzBuzz

let numeros = parseInt(prompt("Ingrese un numero"));

if (numeros%3 == 0 && numeros%5 == 0 ) {
    alert("FizzBuzz");
} else if (numeros%3 == 0) {
    alert("Fizz");
} else if (numeros%5== 0) {
    alert ("Buzz");
}

//Pedir al usuario ingresar kilos de manzana y kilos de naranja va a comprar
// Si el usuario compra mas de 10kg de manzana o naranja dcto 15%
// Si el usuario compra mas de 10kg de manzana y naranja dcto 20%
// Si el usuario compra 5-9kg de manzana o naranja dcto 10%

let kilosmanzana = parseInt(prompt("Ingrese los kg de manzana"));
let kilosnaranja = parseInt(prompt("Ingrese los kg de naranja"));

if (kilosmanzana >=10 && kilosnaranja >=10) {
    alert ("Tiene un descuento de 15%")
} else if  (kilosmanzana >=10 || kilosnaranja >=10) {
    alert ("Tiene un descuento de 15%")
} else if (kilosmanzana >=5 || kilosnaranja >=5) {
    alert ("Tiene un descuento de 10%")
}
// CLASE 03 CICLOS (LOOPS)


//Sacar el promedio de las calificaciones de 5 alumnos
// let calificaciones = 0;

// for (i=0; 1>5; i++) {
// let calificacion = parseFloat(prompt("Ingrese su calificacion"));
//     calificaciones=calificaciones+calificacion;
// }

// let promedio = calificaciones/5;
// console.log(promedio);




// //Preguntar a 10 usuarios que tipo de boleto de avion quieren:
// //Primera Clase o Standard
// //Contabilizar cuantos quisieron primera clase o standard 

// let acumulador_pc =0;
// let acumulador_standard = 0;

// for (i=0; i<9; i++) {
//     let boleto = parseInt(prompt("Digite: 1. Primera Clase 2. Standard"));
//     if (boleto == 1) {
//         acumulador_pc += 1;
//     } else if (boleto == 2) {
//         acumulador_standard += 1;
//     }
// }
//console.log(`Boletos primera clase: ${acumulador_pc} Boletos standard: ${acumulador_standard}`);




//Pedir un numero y mostrar los exponenciales 

// let i = 0;
// let limite = parseInt(prompt("Ingrese hasta que numero quiere calcular"));

// while (i<= limite) {
//     let resultado = i*i;
//     console.log(resultado);
//     i++;
// }



// //Incrementar una variable ingresada hasta que llegue a 10

// let i = 0;
// do {
//     let num = parseInt(prompt("Ingrese un numero"));
//     i += num;
//     console.log(i);
// } while (i<=10)




// Hay unas variantes para que son Forin y Foroff

//Forin se usa mas para recorrer las propiedades de un objeto
//Foroff se usa para recorrer los valores de un arreglo 
// const objeto = {
//     nombre: "Santiago",
//     apellido: "Maramer",
//     edad: 22
// }

// const arreglo = {
//     nombre: "Santiago",
//     apellido: "Maramer",
//     edad: 22
// }

// for (const propiedad in objeto){
//     console.log(`Key: ${propiedad} Value:${objeto[propiedad]}`);
// }

// for (const valores of arreglo) {
//     console.log(valores);
// }



//Calculadora para dos numeros usando ciclos (do-while) y condicionales (swicht)
//let operacion;
// do {
//     let num1 = parseFloat(prompt("Ingrese el primer numero"));
//     let num2 = parseFloat(prompt("Ingrese el segundo numero"));
//     operacion = prompt("Ingrese la operacion a realizar: +, -, /, *, para salir presione . ");

//     switch (operacion) {
//         case "+":
//             console.log(num1+num2);
//             break;
//         case "-":
//             console.log(num1-num2);
//             break;
//         case "/" :
//             console.log(num1/num2);
//             break; 
//         case "*":
//             console.log(num1*num2);
//             break;
//         case ".":
//             console.log("Adios, vuelve pronto")
//             break;
//     }
// } while (operacion !== ".");
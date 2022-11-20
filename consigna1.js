// // CONSIGNA CONDICIONALES

// /* Una importante marca de computadoras permite elegir cierta configuración del
// equipo a comprar. Para ello existe la siguiente escala de precios: 

// TABLA  │   i5     │    i7    │    i9    │
// 8 RAM  │ USD 800  │ USD 900  │ USD 1200 │
// 16 RAM │ USD 900  │ USD 1000 │ USD 1400 │
// 32 RAM │ USD 1000 │ USD 1400 │ USD 2000 │

// Además, el equipo viene con un disco que permite almacenar 500 GB de
// información y que se puede ampliar a 1 TB si así lo desea, lo cual tiene un costo
// adicional de USD 300.

// Hacer un programa que solicite la opción de procesador, la opción de memoria
// RAM, y si extiende el disco o no (ingresa 1 para extender y 0 para no extender)
// y calcule y emita por pantalla el monto de la máquina seleccionada.*/

// let opcionProcesador= prompt("Digite 1 si desea i5, Digite 2 si desea i7, Digite 3 si desea i9");
// let opcionRam = prompt("Digite 1 si desea 8GB RAM, Digite 2 si desea 16GB RAM, Digite 3 si desea 32GB RAM");
// let opcionDisco = prompt("Digite 1 si desea ampliar el disco de 500GB a TB, Digite 0 si no lo desea");
// let precio; 
// function almacenamiento_extra (precio) {
//     return precio + 300;    
// }

// switch (opcionProcesador) {
//     case "1": 
//         switch (opcionRam) {
//             case "1": 
//                 precio = 800;
//                 break;
//             case "2": 
//                 precio = 900;
//                 break;
//             case "3": 
//                 precio = 1000;
//                 break;
        
//             default:
//                 alert ("Opcion Invalida");
//                 break;
//         }
//         break;
    
//     case "2":
//         switch (opcionRam) {
//             case "1": 
//                 precio = 900;
//                 break;
//             case "2": 
//                 precio = 1000;
//                 break;
//             case "3": 
//                 precio = 1400;
//                 break;
        
//             default:
//                 alert ("Opcion Invalida");
//                 break;
//         }
//         break;

//     case "3":
//         switch (opcionRam) {
//             case "1": 
//                 precio = 1200;
//                 break;
//             case "2": 
//                 precio = 1400;
//                 break;
//             case "3": 
//                 precio = 2000;
//                 break;
        
//             default:
//                 alert ("Opcion Invalida");
//                 break;
//         }
        
//         break;

//     default:
//         alert ("Opcion invalida");
//         break;
// }

// if (opcionDisco == "1") {
//     let total = almacenamiento_extra(precio);
//     alert ("El precio del computador es de: "+total+" USD");
// } else {
//     alert ("El precio del computador es de: "+precio+" USD");
// }

// // CONSIGNA CICLOS 

// /*Hacer un programa que solicite 10 números y luego mostrar por pantalla el 
// máximo de ellos y la posición en la que fue ingresado. */


// for (i=0; i<10; i++) {
//     let numero = prompt("Digite un numero");
//     if (i == 0) {
//         maximo = numero;
//         posicion = 1;
//     } else if (numero > maximo) {
//         maximo = numero;
//         posicion = i+1;
//     }
// }

// alert("El maximo es: "+maximo+ " Y su pocision fue: "+posicion); 




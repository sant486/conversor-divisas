//Convertidor de temperatura 
// let opcionMenu = 0;
// let resultado = 0;

// function celciusaFarenheit (grados) {
//     resultado = (grados*9/5)+32
//     alert(`El resultado es ${resultado} °F`)
// }

// function farenheitaCelcius (grados) {
//     resultado = (grados-32)*5/9
//     alert(`El resultado es ${resultado} °C`)
// }

// do {
//     let grados = parseFloat(prompt("Digite los grados"));
//     opcionMenu = prompt("Que desea realizar? 1. Convertir de C a F  2. Convertir de F a C 3. Salir");
//     switch (opcionMenu) {
//         case "1":
//             celciusaFarenheit(grados)
//             break;
        
//         case "2":
//             farenheitaCelcius(grados); 
//             break;
//         default:
//             alert("Opcion invalida")
//             break;
//     }
// } while (opcionMenu !== "3");


//Funciones anonimas 

// let opcionMenu = 0;
// let resultado = 0;

// const celciusaFarenheit = function (grados) {
//     resultado = (grados*9/5)+32
//     alert(`El resultado es ${resultado} °F`)
// }

// const farenheitaCelcius= function (grados) {
//     resultado = (grados-32)*5/9
//     alert(`El resultado es ${resultado} °C`)
// }

// do {
//     let grados = parseFloat(prompt("Digite los grados"));
//     opcionMenu = prompt("Que desea realizar? 1. Convertir de C a F  2. Convertir de F a C 3. Salir");
//     switch (opcionMenu) {
//         case "1":
//             celciusaFarenheit(grados)
//             break;
        
//         case "2":
//             farenheitaCelcius(grados); 
//             break;
//         default:
//             alert("Opcion invalida")
//             break;
//     }
// } while (opcionMenu !== "3");

//Funciones de flecha 

let opcionMenu = 0;
let resultado = 0

const mostraresultado = (resultado) => {
    alert (`El resultado es ${resultado}`)
}
const celciusaFarenheit = (grados) => {
    resultado = (grados*9/5)+32
    mostraresultado(resultado);
}

const farenheitaCelcius = (grados) => {
    resultado = (grados-32)*5/9
    mostraresultado(resultado);
}

do {
    let grados = parseFloat(prompt("Digite los grados"));
    opcionMenu = prompt("Que desea realizar? 1. Convertir de C a F  2. Convertir de F a C 3. Salir");
    switch (opcionMenu) {
        case "1":
            celciusaFarenheit(grados)
            break;
        
        case "2":
            farenheitaCelcius(grados); 
            break;
        default:
            alert("Opcion invalida")
            break;
    }
} while (opcionMenu !== "3");

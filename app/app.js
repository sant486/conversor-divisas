//Login

let usuario;
let contraseña;
let usuarioLS;

usuarioLS = localStorage.getItem("usuario");
console.log(usuarioLS);

if (usuarioLS==null){
    usuario=prompt("Ingrese usuario");
    contraseña=prompt("Ingrese su contraseña");
    localStorage.setItem("usuario", usuario);
} else {
    alert("Hola, ya estas logeado, disfruta");
}

//Objetos 
const dolares = {
    //Recordar que es el precio de cada moneda respecto al dolar (1USD)
    dolar_a_peso:4797,
    dolar_a_euro:0.96586,
}

const peso_colombiano = {
    peso_a_dolar:0.00021,
    peso_a_euro: 0.0002,
}

const euros = {
    euro_a_dolar:1.035,
    euro_a_peso:4965,
}


//funciones 
function convertir () {
    let valor = parseFloat(document.getElementById("ingreso").value);
    let de=document.getElementById("de").value;
    let a=document.getElementById("a").value;
    let boton_convertidor = document.getElementById("convertidor");
    let peso= dolares.dolar_a_peso;
    let euro = dolares.dolar_a_euro;
    let resultado = 0;

    //Dolar a peso
    if (de==1&&a==2) {
        resultado=valor*peso;
    }
    //Dolar a dolar
    else if (de==1&&a==1) {
        resultado=valor;
    }
    //Dolar a euro
    else if (de==1&&a==3) {
        resultado=valor*euro;
    }
    //Peso a dolar
    else if (de==2&&a==1) {
        resultado=valor/peso;
    }
    //Peso a peso
    else if (de==2&&a==2) {
        resultado=valor;
    }
    //Peso a euro
    else if (de==2&&a==3) {
        resultado=valor/euro;
    }
    else {
        resultado=valor;
    }
    document.getElementById("resultado").value=resultado.toFixed(0);
}


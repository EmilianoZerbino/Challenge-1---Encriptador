var txt1 = document.querySelector("#txt-1");
var txt2 = document.querySelector("#txt-2");

var btn1 = document.querySelector(".boton-1");
var btn2 = document.querySelector(".boton-2");
var btn3 = document.querySelector(".boton-3");
var btn4 = document.querySelector(".boton-4");


btn1.addEventListener("click", function (event) {

    navigator.clipboard.readText().then(texto => {
        txt1.value = texto;
    })
        .catch(error => {
            // Por si el usuario no da permiso u ocurre un error
            console.log("Hubo un error: ", error);
        });

});

btn2.addEventListener("click", function (event) {
    txt2.value = encriptar(txt1.value);
});

btn3.addEventListener("click", function (event) {
    txt2.value = desencriptar(txt1.value);
});

btn4.addEventListener("click", function (event) {
    
    navigator.clipboard.writeText(txt2.value)
        .then(() => {
            console.log("El texto ha sido copiado :-)");
        })
        .catch(error => {
            // Por si el usuario no da permiso u ocurre un error
            console.log("Hubo un error: ", error);
        });
});

function encriptar(txt) {

    var resultado = "";

    for (var i = 0; i < txt.length; i++) {
        if (txt[i] == "a") {
            resultado += "ai";
        }
        else if (txt[i] == "e") {
            resultado += "enter";
        }
        else if (txt[i] == "i") {
            resultado += "imes";
        }
        else if (txt[i] == "o") {
            resultado += "ober";
        }
        else if (txt[i] == "u") {
            resultado += "ufat";
        }
        else {
            resultado += txt[i];
        }
    }

    return resultado;
}

function desencriptar(mensaje) {

    mensaje = corregir(mensaje, "ai", "a");
    mensaje = corregir(mensaje, "enter", "e");
    mensaje = corregir(mensaje, "imes", "i");
    mensaje = corregir(mensaje, "ober", "o");
    mensaje = corregir(mensaje, "ufat", "u");

    return mensaje;

}

function corregir(mensaje, input, output) {

    var n;

    while (n != -1) {
        n = mensaje.search(input);
        if (n != -1) {
            mensaje = mensaje.replace(input, output);
        }
    }

    return mensaje;
}
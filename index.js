let textoEntrada = document.getElementById("entrada");
let textoSaida = document.getElementById("saida");

let botaoCriptografar = document.getElementById("btn-criptografar");
let botaoDescriptografar = document.getElementById("btn-descriptografar");
let botaoCopiar = document.getElementById("btn-copiar");

botaoCriptografar.onclick = criptografa;
botaoDescriptografar.onclick = descriptografa;
botaoCopiar.onclick = copiar;

function criptografa(){
    let textoCriptografado = textoEntrada.value;

    let result = textoCriptografado
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    textoSaida.value = result;
}

function descriptografa(){
    let textoCriptografado = textoEntrada.value;

    let result = textoCriptografado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    textoSaida.value = result;
}

function copiar() {
    resultado = document.getElementById("saida");

    resultado.select();
    document.execCommand("cut")
}
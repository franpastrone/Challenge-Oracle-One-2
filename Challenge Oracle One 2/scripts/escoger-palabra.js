let palabras = [
    "JAVASCRIPT",
    "INNOVACION",
    "CODIGO",
    "EDITOR",
    "RED",
    "WEB",
    "ALURA",
    "HTML",
    "LATAM",
];

function escogerPalabra() {
    var indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}
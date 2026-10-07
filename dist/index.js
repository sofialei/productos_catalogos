"use strict";
const botonPrueba = document.querySelector("#boton-prueba");
const mensajePrueba = document.querySelector("#mensaje-prueba");
if (botonPrueba !== null && mensajePrueba !== null) {
    botonPrueba.addEventListener("click", () => {
        mensajePrueba.textContent = "¡La conexión funciona!";
    });
}
const botonAgregar = document.querySelector("#boton-agregar");
const mensajeAgregar = document.querySelector("#mensaje-agregar");
if (botonAgregar !== null && mensajeAgregar !== null) {
    botonAgregar.addEventListener("click", () => {
        mensajeAgregar.textContent = "¡Se ha agregado el producto!";
    });
}
const buscador = document.querySelector("#f-nombre");
if (buscador !== null && mensajePrueba !== null) {
    buscador.addEventListener("input", () => {
        mensajePrueba.textContent = "Estás buscando: " + buscador.value;
    });
}

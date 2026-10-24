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
const teclado = {
    id: 1,
    nombre: "Teclado",
    categoria: "Periféricos",
    precio: 25000,
    stock: 8
};
const productos = [
    { id: 1, nombre: "Teclado", categoria: "Periféricos", precio: 25000, stock: 8 },
    { id: 2, nombre: "Mouse", categoria: "Periféricos", precio: 15000, stock: 0 },
    { id: 3, nombre: "Monitor", categoria: "Pantallas", precio: 180000, stock: 4 },
    { id: 4, nombre: "Silla gamer", categoria: "otro", precio: 96013, stock: 9 },
    { id: 5, nombre: "mousepad", categoria: "otro", precio: 305, stock: 5 }
];
const lista = document.querySelector("#lista");
if (lista !== null) {
    const mostrarProductos = () => {
        lista.textContent = ""; // vacía la lista antes de dibujar
        for (const p of productos) {
            const tarjeta = document.createElement("article");
            tarjeta.className = "producto";
            if (p.stock === 0) {
                tarjeta.classList.add("agotado");
            }
            else if (p.stock <= 5) {
                tarjeta.classList.add("bajo");
            }
            const titulo = document.createElement("h3");
            titulo.textContent = p.nombre;
            const categoria = document.createElement("div");
            categoria.className = "cat";
            categoria.textContent = p.categoria;
            const precio = document.createElement("div");
            precio.className = "precio";
            precio.textContent = "$" + p.precio.toLocaleString("es-AR");
            const fila = document.createElement("div");
            fila.className = "fila";
            const estado = document.createElement("span");
            estado.className = "estado";
            if (p.stock === 0) {
                estado.textContent = "Sin stock";
            }
            else if (p.stock <= 5) {
                estado.textContent = "Stock bajo: " + p.stock;
            }
            else {
                estado.textContent = p.stock + " en stock";
            }
            fila.append(estado);
            tarjeta.append(titulo, categoria, precio, fila);
            lista.append(tarjeta);
        }
    };
    mostrarProductos(); // se dibujan al cargar la página
}
const resumenProductos = document.querySelector("#r-productos");
const resumenUnidades = document.querySelector("#r-unidades");
const resumenValor = document.querySelector("#r-valor");
const resumenAgotados = document.querySelector("#r-agotados");
const contador = document.querySelector("#contador");
if (resumenProductos !== null && resumenUnidades !== null &&
    resumenValor !== null && resumenAgotados !== null && contador !== null) {
    const mostrarResumen = () => {
        let unidades = 0;
        let valor = 0;
        let agotados = 0;
        for (const p of productos) {
            unidades += p.stock;
            valor += p.precio * p.stock;
            if (p.stock === 0) {
                agotados++;
            }
        }
        resumenProductos.textContent = String(productos.length);
        resumenUnidades.textContent = String(unidades);
        resumenValor.textContent = "$" + valor.toLocaleString("es-AR");
        resumenAgotados.textContent = String(agotados);
        contador.textContent = "(" + productos.length + " de " + productos.length + ")";
    };
    mostrarResumen(); // se calcula al cargar la página
}

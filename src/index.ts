const botonPrueba = document.querySelector<HTMLButtonElement>("#boton-prueba");
const mensajePrueba = document.querySelector<HTMLParagraphElement>("#mensaje-prueba");
if (botonPrueba !== null && mensajePrueba !== null) {
    botonPrueba.addEventListener("click", () => {
        mensajePrueba.textContent = "¡La conexión funciona!";
    });
}

const botonAgregar = document.querySelector<HTMLButtonElement>("#boton-agregar");
const mensajeAgregar = document.querySelector<HTMLParagraphElement>("#mensaje-agregar");
if (botonAgregar !== null && mensajeAgregar !== null) {
    botonAgregar.addEventListener("click", () => {
        mensajeAgregar.textContent = "¡Se ha agregado el producto!";
    });
}

const buscador = document.querySelector<HTMLInputElement>("#f-nombre");
if (buscador !== null && mensajePrueba !== null) {
    buscador.addEventListener("input", () => {
      mensajePrueba.textContent = "Estás buscando: " + buscador.value;
    });
  }
  
  

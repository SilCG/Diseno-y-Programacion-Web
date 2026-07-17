/* ESTE ES EL ARCHIVO DE LA PROFESORA */
/* El DOM es una representación de la estructura de un documento HTML en forma de árbol, donde cada nodo representa un elemento del documento. */

/* Seleccionar los elementos del DOM */
const inputIdentificacion = document.getElementById("identificacion"); /* Utilizar el mismo ID del HTML */
const inputNombre = document.getElementById("nombre-completo");
const inputCorreo = document.getElementById("correo");
const inputTelefono = document.getElementById("telefono");
const inputFechaRegistro = document.getElementById("fecha-registro");

const btnRegistrarEgresado = document.getElementById("guardar-egresado");


function validarIdentificacion(identificacion) { /* Lo que está entre // es una expresión regular que valida la identificación */
    return /^[0-9]{9,12}$/.test(identificacion) // Entre 9 y 12 ítems y solo entre 0-9
    /* el .test compara la cadena con la expresión regular */
}

function validarNombreCompleto(nombre) {
    return nombre.length >= 2;
}

function validarCorreo(correo) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo); // Uno o más caracteres que no sean espacios ni arrobas, seguido de una arroba, otro bloque similar, un punto y otro bloque final sin espacios ni arrobas.
}

function validarTelefono(telefono) {
    return /^[0-9]{8,12}$/.test(telefono); // Dígitos numéricos, con una longitud total de entre 8 y 12 caracteres, desde el inicio hasta el final
}

function establecerFechaActual() {
    const hoy = new Date(); // Objeto Date que representa la fecha y hora actual 
    const anno = hoy.getFullYear();
    /* 
    getMonth(): Devuelve el mes como un número de 0 al 11
              + 1: Mes del 1 al 12
    padStart(2, "0"): en los meses de solo un número (1 - 9) agrega un 0 antes (01 - 09)
    */
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); 
    const dia = String(hoy.getDate()).padStart(2, '0');
    /*
    A inputFechaRegistro se le asigna el atributo value interpolando las variables
    */
    inputFechaRegistro.value = `${anno}-${mes}-${dia}`;
}

function resaltarCamposVacios() {
    let error = false; // Asumir que no hay errores

    // Identificación
    const identificacion = inputIdentificacion.value.trim(); /* el ".value" lo que hace es extraer el valor del input */
    if (!validarIdentificacion(identificacion)) {
        inputIdentificacion.classList.add("input-error");
        error = true;
    } else {
        inputIdentificacion.classList.remove("input-error");
    }

    // Nombre completo
    const nombre = inputNombre.value.trim();
    if (!validarNombreCompleto(nombre)) {
        inputNombre.classList.add("input-error");
        error = true;
    } else {
        inputNombre.classList.remove("input-error");
    }

    // Correo
    const correo = inputCorreo.value.trim();
    if (!validarCorreo(correo)) {
        inputCorreo.classList.add("input-error");
        error = true;
    } else {
        inputCorreo.classList.remove("input-error");
    }

    // Teléfono
    const telefono = inputTelefono.value.trim();
    if (!validarTelefono(telefono)) {
        inputTelefono.classList.add("input-error");
        error = true;
    } else {
        inputTelefono.classList.remove("input-error");
    }

    /* // Fecha de registro - esta la agregó la profe en la clase pero luego la cambio por una fecha fija
    if (!inputFechaRegistro.value == "") {
        inputFechaRegistro.classList.add("input-error");
    } else {
        inputFechaRegistro.classList.remove("input-error");
    }
    */

    return error;
}

function validarCamposVacios() { /* creada apenas se creó el escuchador de eventos del botón btnRegistrarEgresado */
    resaltarCamposVacios(); /* Llamar a la función resaltarCamposVacios para que se ejecute cuando se haga click en el botón */
}

btnRegistrarEgresado.addEventListener("click", validarCamposVacios);
/* Creo este escuchador de eventos para que cuando se haga click en el botón de registrar egresado */
/* Junto con esto se crea la función validarCamposVacios que se activa cuando se hace click en el botón */

establecerFechaActual(); 

/* Reglas de == y ===:
    1 == "1": true 
    0 == false: true

    1 === "1": false 1. Se compara el tipo de dato (number == string), 2. Se compara el dato (1 == 1)
    1 === 1: true 1. Se compara el tipo de dato (number == number), 2. Se compara el dato (1 == 1)
    */

console.log(1 == "1");
console.log(1 === "1");
console.log(0 == false);
console.log(0 === false);

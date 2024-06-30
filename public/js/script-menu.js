/* Selecciono las etiquetas HTML */
let selectEstacion = document.getElementById("estacion");
let dias = document.getElementById("dias");
let comensales = document.getElementById("comensales");
let btnGenerar = document.getElementById("generar");
let devuelveMenu = document.getElementById("devuelve-menu");
let menuForm = document.getElementById("menu-form");
let btnResetear = document.getElementById("resetear");
let textoOculto = document.getElementById("texto-oculto");
let devuelveCompras = document.getElementById("devuelve-compras");

/* Inicializamos variables */
let estacionElegida = "";
let cantDias = "";
let cantComensales = "";
let planificacion = ["Desayuno", "Almuerzo", "Merienda", "Cena"];
const regexNumero = /^[0-9]*$/;
let allMenu = [];

/* Obtenemos los valores ingresados en los campos HTML */
selectEstacion.addEventListener("change", (event) => {
  estacionElegida = event.target.value;

  btnResetear.disabled = false;

  toggleButtons();
});

// Validamos los días Ingresados
dias.addEventListener("keyup", (event) => {
  cantDias = event.target.value;
  validarEntrada(cantDias);
});

// Validamos los comensales
comensales.addEventListener("keyup", (event) => {
  cantComensales = event.target.value;
  validarEntrada(cantComensales);
});

/* Validamos que lo ingresado por el usuario sea un numero */
function validarEntrada(entrada) {
  if (regexNumero.test(entrada)) {
    btnResetear.disabled = false;
    textoOculto.style.display = "none";
  } else {
    textoOculto.style.display = "block";
  }
  toggleButtons();
}

/* Obtenemos los datos del archivo JSON */
function getData() {
  fetch("../data/menues.json")
    .then((res) => res.json())
    .then((dataMenu) => {
      allMenu = dataMenu;
    });
}

/* Ejecutamos la funcion para obtener los datos del JSON */
getData();

/* Código del botón GENERAR */
btnGenerar.addEventListener("click", () => {
  devuelveMenu.innerHTML = "";
  devuelveCompras.innerHTML = "";
  generarMenuPorEstacion();
  mostrarListaCompras();
  
  // Volvemos todo al estado original
  menuForm.reset();
  borrarCampos();
  btnGenerar.disabled = true;
  btnResetear.disabled = true;
});

// Para almacenar los ingredientes y las cantidades
let ingredientesContados = {};

// Función para generar menú por estación
function generarMenuPorEstacion() {
  let menuFiltrado = [];
  switch (estacionElegida) {
    case "1":
      menuFiltrado = allMenu.filter((menu) => menu.estacion !== "invierno");
      break;
    case "2":
      menuFiltrado = allMenu.filter((menu) => menu.estacion !== "verano");
      break;
    case "3":
      menuFiltrado = allMenu.filter((menu) => menu.estacion === "todas");
      break;
  }
  const snacks = menuFiltrado.filter((menu) => menu.tipo == "snack");
  const comidas = menuFiltrado.filter((menu) => menu.tipo == "comida");
  const infusiones = menuFiltrado.filter((menu) => menu.tipo == "infusion");
  for (let i = 1; i <= cantDias; i++) {
    const desayunoSnack =
      snacks.length > 0
        ? snacks[Math.floor(Math.random() * snacks.length)]
        : null;
    const desayunoInfusion =
      infusiones.length > 0
        ? infusiones[Math.floor(Math.random() * infusiones.length)]
        : null;
    const almuerzo =
      comidas.length > 0
        ? comidas[Math.floor(Math.random() * comidas.length)]
        : null;
    const meriendaSnack =
      snacks.length > 0
        ? snacks[Math.floor(Math.random() * snacks.length)]
        : null;
    const meriendaInfusion =
      infusiones.length > 0
        ? infusiones[Math.floor(Math.random() * infusiones.length)]
        : null;
    const cena =
      comidas.length > 0
        ? comidas[Math.floor(Math.random() * comidas.length)]
        : null;

    actualizarIngredientes(desayunoSnack);
    actualizarIngredientes(desayunoInfusion);
    actualizarIngredientes(almuerzo);
    actualizarIngredientes(meriendaSnack);
    actualizarIngredientes(meriendaInfusion);
    actualizarIngredientes(cena);

    devuelveMenu.innerHTML += `
        <ul><u>DÍA: ${i}</u></ul>
        <li><strong>Desayuno:</strong> ${desayunoSnack.nombre} y ${desayunoInfusion.nombre}</li>
        <li><strong>Almuerzo:</strong> ${almuerzo.nombre}</li>
        <li><strong>Merienda:</strong> ${meriendaSnack.nombre} y ${meriendaInfusion.nombre}</li>
        <li><strong>Cena:</strong> ${cena.nombre}</li>
        <br>
        `;
  }
}

// Función para actualizar la lista de compras
function actualizarIngredientes(menu) {
  if (!menu) {
    console.warn("Menu no encontrado:", menu);
    return;
  }
  menu.ingredientes.forEach((ingrediente) => {
    if (ingredientesContados[ingrediente]) {
      ingredientesContados[ingrediente] += parseInt(cantComensales);
    } else {
      ingredientesContados[ingrediente] = parseInt(cantComensales);
    }
  });
}

// Función para mostrar la lista de compras
function mostrarListaCompras() {
  devuelveCompras.innerHTML = "<h3>Lista de Compras:</h3><ul>";
  for (let ingrediente in ingredientesContados) {
    devuelveCompras.innerHTML += `<li>${ingrediente}: ${ingredientesContados[ingrediente]}</li>`;
  }
  devuelveCompras.innerHTML += "</ul>";
}

/* Función que habilita y deshabilita botones */
function toggleButtons() {
  btnGenerar.disabled = !(
    dias.value.trim() !== "" &&
    comensales.value.trim() !== "" &&
    selectEstacion.value !== ""
  );
}

/* Función para el botón resetear */
btnResetear.addEventListener("click", () => {
  menuForm.reset();
  borrarCampos();
  btnGenerar.disabled = true;
  btnResetear.disabled = true;
});

/* Seteamos en "0" los campos del menu */
function borrarCampos() {
  cantDias = 0;
  cantComensales = 0;
  estacionElegida = 0;
}

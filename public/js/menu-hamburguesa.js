const navBar = document.querySelector("#nav-bar");
const abrirMenuHamburguesa = document.querySelector("#abrir-menu-hamburguesa");
const cerrarMenuHamburguesa = document.querySelector("#cerrar-menu-hamburguesa");
const imgJirafa = document.querySelector("#img-jirafa");

abrirMenuHamburguesa.addEventListener("click", () => {
    navBar.classList.add("visible");
});

cerrarMenuHamburguesa.addEventListener("click", () => {
    navBar.classList.remove("visible");
});

let mediaquery = window.matchMedia("(min-width: 551px)");
function funcion() {
    navBar.classList.remove("visible");
};
mediaquery.addListener(funcion);

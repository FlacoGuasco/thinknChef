/* Selecciono las etiquetas HTML */
let usuario = document.getElementById('usuario');
let password = document.getElementById('password');
let btnLogin = document.getElementById('login');
let loginForm = document.getElementById('login-form');
let btnResetear = document.getElementById('resetear');
let textoOculto = document.getElementById('texto-oculto');


/* Inicializamos variables */
let usuarioElegido = "";
let passwordElegido = "";


/* Obtenemos los valores ingresados en los campos HTML */
/* Validamos el uso de los botones del formulario menú a campos completos */
usuario.addEventListener('keyup', (event) => { 
    usuarioElegido = event.target.value;

    btnResetear.disabled = false;

   toggleButtons();
});

password.addEventListener('keyup', (event) => {
    passwordElegido = event.target.value;
    
    btnResetear.disabled = false;

    toggleButtons();

});

function toggleButtons(){
    if(usuario.value.trim() !== "" && password.value.trim() !== ""){
        btnLogin.disabled = false;
    } else {
        btnLogin.disabled = true;
        btnResetear.disabled = true;
    }
};


btnResetear.addEventListener('click', () => {
    loginForm.reset();
    borrarCampos();
    btnLogin.disabled = true;
    btnResetear.disabled = true;
});


function borrarCampos(){
    usuario = "";
    password = "";
};




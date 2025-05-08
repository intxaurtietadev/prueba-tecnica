const usuarioInput = document.getElementById('usuarioNombre');
const contrasenaInput = document.getElementById('usuarioContrasena');
const verContrasenaInput = document.getElementById('verContrasenaBtn');
const terminosCheck =document.getElementById('terminosCheck');
const logeoBtn = document.getElementById('btnLogeo');
const loginForm = document.getElementById('formularioLogin');

function verContrasenaCandado () {
    if (contrasenaInput.type === 'password') {
        contrasenaInput.type = 'text';
            if (verContrasenaInput) {
                verContrasenaInput.textContent = "👀";
            }
    } else {
        contrasenaInput.type = 'password';
        if (verContrasenaInput) {
        verContrasenaInput.textContent = "🙈";
    }
    }
};

function habilitarLogeo() {
    if (terminosCheck.checked === true) {
        logeoBtn.disabled = false;
    }else{
        logeoBtn.disabled = true;
    }
};

function loguear(event) {
    event.preventDefault();
    
    let usuario = usuarioInput.value.trim();
    let contrasena = contrasenaInput.value.trim();

    if (usuario === 'thais' && contrasena === '1234') {
        alert(`Bienvenido ${usuario}!`);
    } else {
        alert('Usuario o contraseña incorrectos');
    }
};

if (verContrasenaInput) {
    verContrasenaInput.addEventListener('click', verContrasenaCandado);
}
if (terminosCheck) {
    terminosCheck.addEventListener('change', habilitarLogeo);
}
if (loginForm) {
    loginForm.addEventListener('submit', loguear);
}
if (terminosCheck &&logeoBtn) {
    habilitarLogeo();
};
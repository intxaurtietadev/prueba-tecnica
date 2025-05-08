function habilitarBoton() {
    let checkbox = document.getElementById('condiciones');
    let btn = document.getElementById('btn-contacto');
    if (checkbox.checked) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}
document.getElementById('condiciones').addEventListener('change', habilitarBoton);

habilitarBoton();

function fechaHoraActualizada() {
    const ahora = new Date();
    const formato = {
        dateStyle: 'long',
        timeStyle: 'medium',
    };

    document.getElementById('fecha-hora').innerText = ahora.toLocaleString('es-ES',formato);
}

setInterval (fechaHoraActualizada, 1000);
fechaHoraActualizada();
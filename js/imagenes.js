function cambiarImagen() {
    const imagen = document.getElementById('imagen');

    const atributo = imagen.getAttribute('src');

    const foto1 = 'img/about.jpg';
    const foto2 = 'img/papeleo.jpg';

    if (atributo === foto1) {
        imagen.setAttribute('src', foto2)
    } else {
        imagen.setAttribute('src', foto1)
    }
};

imagen.addEventListener('mouseover', cambiarImagen);
imagen.addEventListener('mouseout', cambiarImagen);

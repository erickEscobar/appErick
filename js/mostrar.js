let elementos = document.querySelectorAll("[data-ocultar]");
// elementos.classList.add("mostrarCursor");
elementos.forEach(el => {
    el.classList.add("mostrarCursor");
});

document.addEventListener("click", e => {
    if(e.target.matches("[data-ocultar]")){
        let element = e.target;
        element.nextElementSibling.classList.toggle("ocultarContenido");
        console.log(element);
    }
});


let contenido = document.getElementById("cambiarAvaluos");
console.log(contenido)

const getContenido = async (id) => {
    try {
        let url = `../assets/img/avaluos.html/${id}`;
        let resp = await fetch(url);
        let html = await resp.text();

        if(!resp.ok) throw {status: resp.status, statusText: resp.statusText}//Si la respuesta es un error se va hacia el catch


        console.log(html);
        contenido.innerHTML = html;
    } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrio un error";
        // $table.insertAdjacentHTML("afterend", `<p>Error ${err.status}: ${message}</p>`)
    }
}

document.addEventListener("click", e => {
    if(e.target.matches("[data-atribute]")){
        // console.log(e.target.id)
        getContenido(e.target.id)
    }
})
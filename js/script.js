let logoHeader = document.querySelector(".logo-header");

console.log(logoHeader)
document.addEventListener("click", e=>{

    if(e.target === logoHeader){
        let v= window.open("index.html", '_self');
    }
    // if(e.target.matches("header nav ul li a")){
    //     actualizar(e.target);
    // }
})

// let actualizar = (link) => {
//     link.classList.add("linkActivado");
// }
// document.addEventListener("DOMContentLoaded", actualizar)



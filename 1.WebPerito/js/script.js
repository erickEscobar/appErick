// let p = document.querySelector('#pp');
let logoHeader = document.querySelector(".logo-header");

console.log(logoHeader)
document.addEventListener("click", e=>{
    console.log(e.target);
    // if(e.target === p || e.target === p.parentElement){
    //     alert(e.target);
    // }
    if(e.target === logoHeader){
        let v= window.open("index.html", '_self');
    }
})



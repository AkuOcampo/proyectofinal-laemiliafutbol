let abrir= document.getElementById('abrir');
let cerrar= document.getElementById('cerrar');
let popup= document.getElementById('popup');

abrir.addEventListener("click", ()=>{
    popup.classList.add('mostrar');
});

cerrar.addEventListener("click", ()=>{
    popup.classList.remove('mostrar');
});

//-------------------------------------------------------------------
let div = document.querySelector(".fecha2");

document.querySelector(".boton-fecha2").addEventListener("click", () => {
    div.classList.add(".div-fecha2");
});
/* document.querySelector(".show").addEventListener("click", () => {
    div.classList.remove("div_hide");
}); */
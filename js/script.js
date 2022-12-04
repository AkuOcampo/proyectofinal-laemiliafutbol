let abrir= document.getElementById('abrir');
let cerrar= document.getElementById('cerrar');
let popup= document.getElementById('popup');

abrir.addEventListener("click", ()=>{
    popup.classList.add('mostrar');
});

cerrar.addEventListener("click", ()=>{
    popup.classList.remove('mostrar');
});
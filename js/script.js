//----------------------POP UP NOTAS-----------------------//
let abrir1= document.getElementById('abrir-popup1');
let cerrar1= document.getElementById('cerrar-popup1');
let popup1= document.getElementById('popup1');

abrir1.addEventListener("click", ()=>{
    popup1.classList.add('mostrar');
});

cerrar1.addEventListener("click", ()=>{
    popup1.classList.remove('mostrar');
});

let abrir2= document.getElementById('abrir-popup2');
let cerrar2= document.getElementById('cerrar-popup2');
let popup2= document.getElementById('popup2');

abrir2.addEventListener("click", ()=>{
    popup2.classList.add('mostrar');
});

cerrar2.addEventListener("click", ()=>{
    popup2.classList.remove('mostrar');
});

let abrir3= document.getElementById('abrir-popup3');
let cerrar3= document.getElementById('cerrar-popup3');
let popup3= document.getElementById('popup3');

abrir3.addEventListener("click", ()=>{
    popup3.classList.add('mostrar');
});

cerrar3.addEventListener("click", ()=>{
    popup3.classList.remove('mostrar');
});


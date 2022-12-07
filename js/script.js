/* let edad=confirm("Eres mayor de 18?");
if (edad==false) {
	alert("Entras bajo tu responsabilidad")
}; */

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
//-------------------------------------------------------------------
let div = document.querySelector(".fecha2");

document.querySelector(".boton-fecha2").addEventListener("click", () => {
    div.classList.add(".div-fecha2");
});
/* document.querySelector(".show").addEventListener("click", () => {
    div.classList.remove("div_hide");
}); */

let swiper = new mySwiper('.mySwiper', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
    });
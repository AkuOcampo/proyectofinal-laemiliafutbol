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
let clave = document.querySelector(".clave");
let boton = document.querySelector(".boton");

let central = document.querySelector(".cuerpo-central");
let img = document.querySelector(".cuerpo-img");

boton.addEventListener("click", e =>{

	if(clave.value == "7"){
	   alert("I appreciate you.");
	   alert("♥ Gracias por haber estudiado. Eres la mejor. ♥");
	   central.style.display = "none";
	   img.style.display = "flex";
	}else{
		alert("Error");
	}

}) 
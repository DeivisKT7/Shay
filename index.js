let clave = document.querySelector(".clave");
let boton = document.querySelector(".boton");

boton.addEventListener("click", e =>{

	if(clave.value == "7"){
	   alert("I appreciate you.");
	   alert("♥ Gracias por haber estudiado. Eres la mejor. ♥")
	}else{
		alert("Error");
	}

}) 
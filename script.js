document.addEventListener("DOMContentLoaded", function () {
const header = document.querySelector("header"); //Aseguramos que el header exista en el DOM antes de ser llamado al script... Si lo ponemos arriba de todo, arruina por ejemplo el toggle.
//Este script es para cuando scrolleás, el header se torna en un sólido.
window.addEventListener("scroll", () => {
	if (window.scrollY > 60) {
    header.classList.add("scrolled");
    }
		else {
		header.classList.remove("scrolled");
		}
	});
});

//Este script funciona como interruptor de toggle. -->
function toggleMenu() {
	var x = document.getElementById("navegacion");
	if (x.classList.contains("mostrar")) {
		x.classList.remove("mostrar");
	} else {
		x.classList.add("mostrar");
	}
}
//Estuve teniendo problemas con la adaptación del banner para que cuando este quede chico, el botón de "ver colección" desaparezca para que así puedas solamente tocar el banner, por eso está este script.
		
document.addEventListener("DOMContentLoaded", function() {
	const banner = document.querySelector(".banner")
	// Esta parte verifica que la pantalla sea más pequeña que la resolución del mediaQuery, o sea, 600px.
	const mediaQuery = window.matchMedia("(max-width: 600px)");

	// Esta función existe para manejar el click únicamente en pantallas menores a 600px.
	function handleBannerClick() {
	window.location.href = "carteras.html";
	}

	// Si nuestra pantalla es menor a 600px, agregamos el evento
	if (mediaQuery.matches) {
	  banner.addEventListener("click", handleBannerClick);
	}

// Pongo acá un listener, o sea, una respuesta a los eventos, para manejar los cambios en la pantalla.
	mediaQuery.addEventListener("change", function() {
	if (mediaQuery.matches) {
	banner.addEventListener("click", handleBannerClick); // agregamos evento en pantalla menor a 600px...
		} else {
		banner.removeEventListener("click", handleBannerClick); // eliminamos evento en pantalla mayor a 600px...
		}
	});
});
//Este es el script del slider.

document.addEventListener("DOMContentLoaded", function() {
const slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let isTransitioning = false;

	// Clonamos el primer slide y lo agregamos al final
	const firstClone = slides[0].cloneNode(true);
	slider.appendChild(firstClone);

	slides = document.querySelectorAll('.slide'); // actualizamos la lista

	function updateSlider() {
		slider.style.transition = "transform 0.5s ease-in-out";
		slider.style.transform = `translateX(-${currentSlide * 100}%)`;
	}

	function autoSlide() {
		if (isTransitioning) return;
		currentSlide++;
		updateSlider();
		isTransitioning = true;
	}

	// Detectamos cuando termina la transición
	slider.addEventListener("transitionend", () => {
		isTransitioning = false;
		// Si estamos en el clon, saltamos instantáneamente al real
		if (currentSlide === slides.length - 1) {
			slider.style.transition = "none";
			currentSlide = 0;
			slider.style.transform = `translateX(0%)`;
		}
	});

	setInterval(autoSlide, 3000); // Cambia de imagen cada 3 segundos
});

//Timer para carteras.html//
document.addEventListener("DOMContentLoaded", function() {
function updateCountdown() {
	const now = new Date();
	const nextSunday = new Date();
	nextSunday.setDate(now.getDate() + (7 - now.getDay()));
	nextSunday.setHours(0, 0, 0, 0);

	const diff = nextSunday - now;

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((diff / (1000 * 60)) % 60);
	const seconds = Math.floor((diff / 1000) % 60);

	const text = `Faltan ${days}d ${hours}h ${minutes}m ${seconds}s para el cambio.`;
	document.getElementById("countdown-text").textContent = text;

	setTimeout(updateCountdown, 1000);
	}

	updateCountdown();
});

const formularioContacto = document.getElementById("formulario-contacto");
if (formularioContacto) {
    formularioContacto.addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("mensaje-exito").style.display = "block";
        this.reset();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    let carrito = []; /*Creamos una lista vacia...*/
    const contadorCarrito = document.getElementById("contador-carrito"); /*Buscamos el elemento donde muestra cuantos productos hay en el carrito, guardándolo más adelante*/
    const listaCarrito = document.getElementById("lista-carrito"); 

    document.querySelectorAll(".btn-comprar").forEach(boton => { /*Buscamos TODOS los elementos con la clase .btn-comprar y agregamos un evento click*/
        boton.addEventListener("click", function () {
            const producto = this.closest(".producto");
            const nombre = producto.querySelector("h3").textContent;
            const precio = producto.querySelector("p strong").textContent;

            carrito.push({ nombre, precio });
            actualizarCarrito();
        });
    });

    function actualizarCarrito() { /*Acá es donde ocurre la actualización */
        contadorCarrito.textContent = carrito.length;
        listaCarrito.innerHTML = "";

        carrito.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = `${item.nombre} - ${item.precio}`;
            listaCarrito.appendChild(li);
        });
    }
});
// SCROLL MENU

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goToTopBtn").style.display = "block";
  } else {
    document.getElementById("goToTopBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

// REDIRIGIR CON BOTONES

function irASucursales() {
  window.location.href = 'sucursales.html';
}

function redireccionar() {
  window.location.href = "menu.html"; 
} 

// MENU RESPONSIVE

document.getElementById ("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById ("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementsByClassName("header-list-nav")[0];
background_menu = document.getElementById("back_menu");

function mostrar_menu() { 
  nav.style.right = "0px";
  background_menu.style.display = "block";
} 

function ocultar_menu() { 
  nav.style.right = "-250px";
  background_menu.style.display = "none";
} 

 
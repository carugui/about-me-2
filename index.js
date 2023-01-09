let mybutton = document.querySelector('#button');
let mynav = document.querySelector('#nav');

window.onscroll = function() {scrollFunction(), scrollNav()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.classList.add('show');
  } else {
    mybutton.classList.remove('show');
  }
}

function scrollNav() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mynav.classList.add('nav-green');
  } else {
    mynav.classList.remove('nav-green');
  }
}
// Cuando hagas click en el botón, subirá a arriba de la página
mybutton.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; //Chrome, Firefox, IE and Opera
}


// Para que cuandom a partir de 900px de ancho de la ventana, se haga scroll
// horizontal cuando se le da a la rueda del ratón
const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
  if (window.innerWidth > 900) {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  }
});
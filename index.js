let mybutton = document.getElementById("button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.classList.add('show');
  } else {
    mybutton.classList.remove('show');
  }
}
// Cuando hagas click en el botón, subirá a arriba de la página
mybutton.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; //Chrome, Firefox, IE and Opera
}
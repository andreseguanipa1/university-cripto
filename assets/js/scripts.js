document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

let publicidadOne = document.getElementById("publicity-1");
const botonOne = document.getElementById("boton-1");

botonOne.addEventListener('click', function () {

  publicidadOne.style.display = "none";

});


let publicidadTwo = document.getElementById("publicity-2");
const botonTwo = document.getElementById("boton-2");

botonTwo.addEventListener('click', function () {

  publicidadTwo.style.display = "none";

});

let publicidadThree = document.getElementById("publicity-3");
const botonThree = document.getElementById("boton-3");

botonThree.addEventListener('click', function () {

  publicidadThree.style.display = "none";

});
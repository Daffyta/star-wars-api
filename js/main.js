var cargarPagina = function() {
  cargarPersonajes();

};

var cargarPersonajes = function() {
  var url = "http://swapi.co/api/people/";
  $.get( url, function (response) {
    var personajes = response.results;
    var total = response.count;
    mostrarTotalPersonajes(total);
    mostrarPersonajes(personajes);
  });

};

var mostrarTotalPersonajes = function (total) {
  $("#total").text(total);
};

var mostrarPersonajes = function (personajes) {
  var $ul = $("#personajes");
  // arreglo nativo de javascript por eso usamos forEach
  personajes.forEach(function (personaje) {
    var $li =$("<li/>");
    $li.text(personaje.name + "-" + personaje.height);
    $ul.append($li);
  });
};

$(document).ready(cargarPagina);

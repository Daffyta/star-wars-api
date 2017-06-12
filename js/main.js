var cargarPagina = function() {
  cargarPersonajes();

};

var cargarPersonajes = function() {
  // este es un objeto que permite obtener la información que contiene el api de star wars
  // la url como parámetro de tipo string por eso va entre comillas
  $.ajax("http://swapi.co/api/people/", {
    // estas son las minimas propiedades que hay que usar
    method : "GET",
    dataType : "json",
  // success y error son dos métodos
    success: function(response) {
      // del objeto que nos arroja el api, cuya propiedad results tiene un arreglo de objetos
      var personajes = response.results;
      var total = response.count;
      mostrarTotalPersonajes(total);
      mostrarPersonajes(personajes);

    },
    error: function(error) {
      console.log("error",error);
    }
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

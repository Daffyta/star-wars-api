var cargarPagina = function() {
  cargarPersonajes();
  $(document).on("click", ".personaje", mostarDetallePersonaje);
};

var cargarPersonajes = function() {
  var url = "http://swapi.co/api/people/";
  // get es obtener data que puede ser dada como string o como quieran
  // el metodo mas adecuado es getJSON porque sé que el tipo de info recibido será JSON
  $.getJSON( url, function (response) {
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
    $li.addClass("personaje");
    $li.attr("data-url", personaje.homeworld);
    $li.text(personaje.name + "-" + personaje.height);
    $ul.append($li);
  });
};

var plantillaPLaneta = "<h2>Planeta</h2>" +
"<p><strong>__nombre__</strong></p>" +
"<p><strong>__clima__</strong></p>";

var mostarDetallePersonaje = function () {
  var url = ($(this).data("url"));
  var $planetaContenedor = $("#planeta");
  $.getJSON(url, function (response) {
    $planetaContenedor.html(
      plantillaPLaneta.replace("__nombre__", response.name)
        .replace("__clima__", response.climate)
    );
  });
};

$(document).ready(cargarPagina);

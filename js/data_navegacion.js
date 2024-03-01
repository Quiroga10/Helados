document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos de enlace de navegación
    var enlaces = document.querySelectorAll(".helado");

    // Agregar un evento clic a cada enlace
    enlaces.forEach(function(enlace) {
        enlace.addEventListener("click", function(event) {
            event.preventDefault(); // Evitar que el enlace cambie la página

            var target = this.getAttribute("data-target"); // Obtener el atributo data-target

            // Construir la ruta al archivo JSON utilizando la carpeta "json"
            var jsonPath = "./json/" + target + ".json";

            // Realizar una solicitud AJAX para cargar el JSON correspondiente
            var xhr = new XMLHttpRequest();
            xhr.open("GET", jsonPath, true);
            xhr.onload = function() {
                if (xhr.status == 200) {
                    var data = JSON.parse(xhr.responseText);
                    
                    // Aquí puedes mostrar los datos en la página como desees
                    // Por ejemplo, podrías mostrarlos en un div con un id específico
                    document.getElementById("opcion_seleccionada").innerHTML = JSON.stringify(data);
                }
            };
            xhr.send();
        });
    });
});

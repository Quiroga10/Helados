document.addEventListener('DOMContentLoaded', async () => {
    async function obtenerSabores(){
        try {
            const respuesta = await fetch("./json/sabores.json");
            const datos = await respuesta.json();
            return datos;
        } catch (error) {
            console.error("Error al obtener los datos de sabores:", error);
            return []; // Retorna un array vacío en caso de error
        }
    }

    // Función para mostrar los sabores  
    function mostrarSabores() {
        obtenerSabores()
            .then(sabores => {
                const opcionSeleccionada = document.querySelector(".opcion_seleccionada");
                opcionSeleccionada.innerHTML = ''; // Limpiar contenido existente

                sabores.forEach(sabor => {
                    const containerCardTotal = document.createElement("div");
                    containerCardTotal.classList.add("container_card-total");

                    const containerCardUno = document.createElement("div");
                    containerCardUno.classList.add('face');
                    containerCardUno.classList.add('container_card-uno');

                    let nombreSabor = document.createElement("p");
                    nombreSabor.classList.add('title');
                    nombreSabor.textContent = `${sabor.nombre}`;

                    let nombreOpcion = document.createElement("p");
                    nombreOpcion.textContent = `${sabor.opcion}`;

                    containerCardUno.appendChild(nombreSabor);
                    containerCardUno.appendChild(nombreOpcion);

                    containerCardTotal.appendChild(containerCardUno);

                    const containerCardDos = document.createElement("div");
                    containerCardDos.classList.add('face');
                    containerCardDos.classList.add("container_card-dos");

                    let imagenSabor = document.createElement("img");
                    imagenSabor.classList.add('imagen_sabor');
                    imagenSabor.src = `${sabor.imagen}`;
                    imagenSabor.alt = `${sabor.alt}`;

                    let descripcionSabor = document.createElement("p");
                    descripcionSabor.textContent = `${sabor.descripcion}`;

                    containerCardDos.appendChild(imagenSabor);
                    containerCardDos.appendChild(descripcionSabor);

                    containerCardTotal.appendChild(containerCardDos);

                    containerCardTotal.addEventListener('mouseenter', () => {
                        containerCardDos.style.transform = "perspective(600px) rotateY(360deg)";
                    });

                    containerCardTotal.addEventListener('mouseleave', () => {
                        containerCardDos.style.transform = "perspective(600px) rotateY(180deg)";
                    });

                    opcionSeleccionada.appendChild(containerCardTotal);
                });
            })
            .catch(error => {
                console.error("Error al mostrar los sabores:", error);
            });
    }

    // Llamar a mostrarSabores al cargar la página
    mostrarSabores();

    // Agregar evento de clic al enlace de sabores
    const saboresLink = document.querySelector('.helado.active');
    saboresLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        mostrarSabores(); // Mostrar sabores al hacer clic en el enlace
    });

});

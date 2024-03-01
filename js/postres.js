document.addEventListener('DOMContentLoaded', async () => {
    async function obtenerPostres() {
        try {
            const respuesta = await fetch("./json/postres.json");
            const datos = await respuesta.json();
            return datos;
        } catch (error) {
            console.error("Error al obtener los datos de postres:", error);
            return []; // Retorna un array vacío en caso de error
        }
    }

    // Función para mostrar los postrees  
    function mostrarPostres() {
        obtenerPostres()
            .then(postres => {
                const opcionSeleccionada = document.querySelector(".opcion_seleccionada");
                opcionSeleccionada.innerHTML = ''; // Limpiar contenido existente

                postres.forEach(postre => {
                    const containerCardTotal = document.createElement("div");
                    containerCardTotal.classList.add("container_card-total");

                    const containerCardUno = document.createElement("div");
                    containerCardUno.classList.add('face');
                    containerCardUno.classList.add('container_card-uno');

                    let nombrePostre = document.createElement("p");
                    nombrePostre.classList.add('title');
                    nombrePostre.textContent = `${postre.nombre}`;
                    
                    containerCardUno.appendChild(nombrePostre);
                    containerCardTotal.appendChild(containerCardUno);

                    const containerCardDos = document.createElement("div");
                    containerCardDos.classList.add('face');
                    containerCardDos.classList.add("container_card-dos");

                    let imagenPostre = document.createElement("img");
                    imagenPostre.classList.add('imagen_sabor');
                    imagenPostre.src = `${postre.imagen}`;

                    containerCardDos.appendChild(imagenPostre);

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
                console.error("Error al mostrar los postres:", error);
            });
    }

    // Llamar a mostrarPostres al cargar la página
    mostrarPostres();

    // Agregar evento de clic al enlace de sabores
    const postresLink = document.querySelector('.helado.active');
    postresLink.addEventListener('click', () => {
        mostrarPostres(); // Mostrar sabores al hacer clic en el enlace
    });

});

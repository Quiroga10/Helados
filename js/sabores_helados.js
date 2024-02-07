document.addEventListener('DOMContentLoaded', async () => {
    async function obtenerSabores(){
        const respuesta = await fetch("./json/sabores_helados.json");
        const datos = await respuesta.json();
        return datos;
    }
    const sabores = await obtenerSabores();

    mostrarSabores(sabores);
});

//funcion para mostrar los sabores
function mostrarSabores(sabores){
    //Obtengo el contenedor
    const opcionSeleccionada = document.querySelector(".opcion_seleccionada");
    
    sabores.forEach((sabor) => {
        const containerCardTotal = document.createElement("div");
        containerCardTotal.classList.add("container_card-total");
        
        //creo el 1er Div
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

        //agrego todo al contendor principal
        containerCardTotal.appendChild(containerCardUno);
        
        //creo el 2do Div
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
        
        // Add a hover event listener to each containerCardTotal
        containerCardTotal.addEventListener('mouseenter', () => {
            containerCardDos.style.transform = "perspective(600px) rotateY(360deg)";
        });

        containerCardTotal.addEventListener('mouseleave', () => {
            containerCardDos.style.transform = "perspective(600px) rotateY(180deg)";
        });

        opcionSeleccionada.appendChild(containerCardTotal);
    });
    opcionSeleccionada.appendChild(buttonVerSabores);
}
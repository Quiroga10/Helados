// Se envuelve el código dentro de un evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', async () => {
    // Se declara la función como async
    async function obtenerHelados() {
        // Se obtiene el archivo JSON
        const respuesta = await fetch("./json/helados_de_la_casa.json");
        // Se convierte la respuesta en un objeto JSON
        const datos = await respuesta.json();
        // Se devuelve el objeto JSON
        return datos;
    }

    // Se llama a la función obtenerHelados()
    const helados = await obtenerHelados();

    // Se muestra la información de los helados
    mostrarHelados(helados);
});

// Función para mostrar los helados
function mostrarHelados(helados) {
    const listaHelados = document.querySelector(".lista_helados");

    helados.forEach((helado) => {
        const li = document.createElement("li");
        li.classList.add('item_helados');
        
        const imagen_helado = document.createElement("img");
        imagen_helado.src = `${helado.imagen}`;
        li.appendChild(imagen_helado);

        const info_helados = document.createElement("div");
        info_helados.classList.add("container_info_helados");
        li.appendChild(info_helados);
        
        const nombre_helado = document.createElement("h2");
        nombre_helado.textContent = `${helado.nombre}`;
        info_helados.appendChild(nombre_helado);

        const precio_helado = document.createElement("p");
        precio_helado.textContent = `S/${parseFloat(helado.precio)}`;
        info_helados.appendChild(precio_helado);

        listaHelados.appendChild(li);
    });
}
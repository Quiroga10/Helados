const texto_bienvenida = document.querySelector(".is-visible");
const letras = texto_bienvenida.querySelectorAll("i");
let i = 0;

function escribir(){
    if(i < letras.length){
        letras[i].style.opacity = 1;
        i++;
        setTimeout(escribir, 75);//(75 ms equivale a una velocidad moderada)
    }else{
        setTimeout(reiniciar, 3000); //// Reinicia la animación después de 3 segundos
    }
}

function reiniciar(){
    letras.forEach((letra) => (letra.style.opacity = 0));
    i=0;
    escribir();
}

escribir();
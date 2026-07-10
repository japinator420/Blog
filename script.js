// Variables a usar
var posicion = 0;
let botonSiguiente = document.getElementById("boton-siguiente");
let botonAnterior = document.getElementById("boton-anterior")

const tarjetas = document.querySelectorAll('.personaje');
const totalTarjetas = tarjetas.length;

console.log(totalTarjetas)
// Captura de eventos y movimiento de galería
function actualizarGaleria() {
    galeria.style.transform = `translateX(-${posicion*1200}px)`
}

botonSiguiente.addEventListener("click", () =>{
    if(posicion< totalTarjetas - 1){
        posicion++;
        actualizarGaleria();
    }
})

botonAnterior.addEventListener("click", () =>{
    if(posicion>0){
        posicion--;
        actualizarGaleria();
    }
})
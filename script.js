// Variable para los personajes
let posicion = 0;

const galeria = document.getElementById("galeria")
const botonSiguiente = document.getElementById("boton-siguiente");
const botonAnterior = document.getElementById("boton-anterior")

const tarjetas = document.querySelectorAll('.personaje');
const totalTarjetas = tarjetas.length;

// Captura de eventos y movimiento de galería personajes
function actualizarGaleriaPersonajes() {
    const anchoTarjeta = tarjetas[0].offsetWidth;
    console.log(posicion*anchoTarjeta)
    galeria.style.transform = `translateX(-${posicion*anchoTarjeta}px)`
}

if(botonSiguiente){
    botonSiguiente.addEventListener("click", () =>{
        if(posicion < totalTarjetas - 1){
            posicion++;
            actualizarGaleriaPersonajes();
        }
    })
}

if(botonAnterior){
        botonAnterior.addEventListener("click", () =>{
        if(posicion>0){
            posicion--;
            actualizarGaleriaPersonajes();
        }
    })
}

// Variables para las series
let posicionSeries = 0;

const botonSiguienteSeries = document.getElementById("boton-siguiente-series");
const botonAnteriorSeries = document.getElementById("boton-anterior-series");

const galeriaSeries = document.getElementById("galeria-series");
const tarjetasSeries = document.querySelectorAll('.serie');
const totalTarjetasSeries = tarjetasSeries.length;
console.log(totalTarjetasSeries)

// Captura de eventos y moviento de galeria series
function actualizarGaleriaSeries() {
    const anchoTarjetaSeries = tarjetasSeries[0].offsetWidth;
    console.log(posicionSeries*anchoTarjetaSeries)
    galeriaSeries.style.transform = `translateX(-${posicionSeries*anchoTarjetaSeries}px)`
}
// Respuesta de los botones
if(botonSiguienteSeries){
    botonSiguienteSeries.addEventListener("click", () =>{
        if(posicionSeries < totalTarjetasSeries - 1){
            posicionSeries++;
            actualizarGaleriaSeries();
        }
    })
}

if(botonAnteriorSeries){
    botonAnteriorSeries.addEventListener("click", () =>{
        if(posicionSeries>0){
            posicionSeries--;
            actualizarGaleriaSeries();
        }
    })
}
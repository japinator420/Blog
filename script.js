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

// Para los villanos
let posicionVillanos = 0;

const galeriaVillanos = document.getElementById("galeria-villanos");
const botonSiguienteVillanos = document.getElementById("boton-siguiente-villanos");
const botonAnteriorVillanos = document.getElementById("boton-anterior-villanos");

const tarjetasVillanos = document.querySelectorAll('.villano');
const totalTarjetasVillanos = tarjetasVillanos.length;

function actualizarGaleriaVillanos() {
    const anchoTarjetaVillano = tarjetasVillanos[0].offsetWidth;
    console.log(posicionVillanos*anchoTarjetaVillano)
    galeriaVillanos.style.transform = `translateX(-${posicionVillanos*anchoTarjetaVillano}px)`
}

if(botonAnteriorVillanos){
    botonAnteriorVillanos.addEventListener("click", () => {
        if(posicionVillanos > 0){
            posicionVillanos--;
            actualizarGaleriaVillanos();
        }
    })
}

if(botonSiguienteVillanos){
    botonSiguienteVillanos.addEventListener("click", () => {
        if(posicionVillanos < totalTarjetasVillanos-1){
            posicionVillanos++;
            actualizarGaleriaVillanos();
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

// Para las peliculas
let posicionPeliculas = 0;

const botonSiguientePeliculas = document.getElementById("boton-siguiente-peliculas")
const botonAnteriorPeliculas = document.getElementById("boton-anterior-peliculas")

const galeriaPeliculas = document.getElementById("galeria-peliculas")
const tartejatPeliculas = document.querySelectorAll('.pelicula')
const totalTarjetasPeliculas = tartejatPeliculas.length

function actualizarGaleriaPeliculas() {
    const anchoTarjetaPeliculas = tartejatPeliculas[0].offsetWidth;
    galeriaPeliculas.style.transform = `translateX(-${posicionPeliculas*anchoTarjetaPeliculas}px)`
}


if(botonSiguientePeliculas){
    botonSiguientePeliculas.addEventListener("click", () =>{
        if(posicionPeliculas < totalTarjetasPeliculas - 1){
            posicionPeliculas++;
            actualizarGaleriaPeliculas();
        }
    })
}

if(botonAnteriorPeliculas){
    botonAnteriorPeliculas.addEventListener("click", () =>{
        if(posicionPeliculas > 0){
            posicionPeliculas--;
            actualizarGaleriaPeliculas();
        }
    })
}
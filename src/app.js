const simb = ["♠", "♥", "♦", "♣"];
const num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const color = ["red", "black"];


const generarCarta = () => {
    const simboloRandom = simb[Math.floor(Math.random() * simb.length)];
    const numeroRandom = num[Math.floor(Math.random() * num.length)];
    
    const colorRandom = (simboloRandom === "♥" || simboloRandom === "♦") ? "red" : "black";
    
    return { simboloRandom, numeroRandom, colorRandom };
};

const writeCarta = () => {
    const nuevaCarta = generarCarta();
    const numeroElemento = document.querySelectorAll(".sibul");
    const simboloElemento = document.getElementById("cards");
    
    if (numeroElemento.length > 0 && simboloElemento) {
        numeroElemento[0].innerHTML = nuevaCarta.simboloRandom;
        numeroElemento[1].innerHTML = nuevaCarta.simboloRandom;
        simboloElemento.innerHTML = nuevaCarta.numeroRandom;
        
        numeroElemento[0].style.color = nuevaCarta.colorRandom;
        numeroElemento[1].style.color = nuevaCarta.colorRandom;
        simboloElemento.style.color = nuevaCarta.colorRandom;
    }
};

window.onload = () => {
    // Capturamos los elementos después de que cargue el HTML
    const boton = document.getElementById("btn-cambiar");
    const inputWidth = document.getElementById("inputWidth");
    const inputHeight = document.getElementById("inputHeight");
    const carta = document.getElementById("carta-contenedor");

    // Evento del botón
    if (boton) {
        boton.addEventListener("click", writeCarta);
    }

  
    inputWidth.addEventListener("input", () => {
        const widthValue = inputWidth.value;
        if (widthValue > 50) {
            carta.style.width = widthValue + "px";
        }
    });

    inputHeight.addEventListener("input", () => {
        const heightValue = inputHeight.value;
        if (heightValue > 50) {
            carta.style.height = heightValue + "px";
        }
    });

    // Temporizador cada 10 seg
    setInterval(writeCarta, 10000);

    // Primera ejecución
    writeCarta();
};
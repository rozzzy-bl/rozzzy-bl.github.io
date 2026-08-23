const musica = document.getElementById("musica");

const botonMusica =
    document.getElementById("botonMusica");


botonMusica.addEventListener("click", function() {

    if (musica.paused) {

        musica.play();

        botonMusica.textContent =
            "⏸️ Pausar música";

    } else {

        musica.pause();

        botonMusica.textContent =
            "🎵 Reproducir música";

    }

});


function mensajeBonito() {

    document.getElementById("mensaje").textContent =
        "✨ Gracias por visitar mi página 💗🌷✨";

}

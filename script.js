function generarPoema() {
    var nombre = document.getElementById("nombre").value.trim().toLowerCase(); 
    var poema = "";

    if (nombre !== "") {
        switch (nombre) {
            case "luz":
                poema = `Querida ${nombre},<br>
                          Eres la luz de mi vida,<br>
                          La razón de mi alegría.<br>
                          En cada momento contigo,<br>
                          Siento que el amor florece.<br>
                          Eres mi todo, mi inspiración,<br>
                          Y en tu presencia encuentro paz.<br>
                          Siempre juntos, de la mano,<br>
                          Porque contigo, el amor es eterno.`;
                break;
            case "rocio":
                poema = `Querida Rocio,<br>
                          Eres como la gota de rocío,<br>
                          Que refresca mi alma cada día.<br>
                          Tu belleza ilumina mi existencia,<br>
                          Como un amanecer lleno de presencia.<br>
                          En tus ojos encuentro la pureza,<br>
                          Y en tu risa, la más dulce belleza.<br>
                          Eres mi inspiración, mi luz,<br>
                          Rocio, eres mi eterna musa.`;
                break;
            default:
                alert("Lo siento, no hay un poema disponible para ese nombre.");
                break;
        }

        // Mostrar el poema en la página
        document.getElementById("poema").innerHTML = poema;
    } else {
        alert("Por favor, ingresa un nombre antes de generar el poema.");
        document.getElementById("poema").innerHTML = "";
    }
}

// Agregar el evento click al botón
var botonGenerar = document.getElementById("boton-generar");
if (botonGenerar) {
    botonGenerar.addEventListener("click", generarPoema);
}

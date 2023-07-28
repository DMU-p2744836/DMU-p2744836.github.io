
    // Open new window with the sound
function abrirVentanaAudio() {
    window.open("audio.html", "VentanaAudio", "width=200,height=100");
}

//funcion para desplegar el menu en el index
function openMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

//funcion para cerrar el memu en el index
function closeMenu() {
    var menu = document.getElementById('menu');
    menu.classList.remove('show');
}
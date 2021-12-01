const turnOn = document.getElementById("turnOn") //botão que vai ligar
const turnOff = document.getElementById("turnOff") //botão que vai desligar
const lamp = document.getElementById("lamp") //lampada

function lampOn () {
    lamp.src = "./img/ligada.jpg"
}

turnOn.addEventListener("click", lampOn)
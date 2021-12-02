const turnOn = document.getElementById("turnOn") //botão que vai ligar
const turnOff = document.getElementById("turnOff") //botão que vai desligar
const lamp = document.getElementById("lamp") //lampada
//ambos linkados com o ID do html.

function lampOn () { //função ligar lampada

    if (!checkLampBroken ()){ //se a lamp não estiver quebrada, liga
    lamp.src = "img/ligada.jpg"
    }
}

function lampOff () { //função desligar lampada

    if (!checkLampBroken ()){ //se a lamp não estiver quebrada, desliga
    lamp.src = "img/desligada.jpg"
    }
}

function lampBroken () {
    lamp.src = "img/quebrada.jpg"
}

function checkLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1 
    //aqui ele está procurando dentro do src da lamp se existe a palavra
    //"quebrada", pra saber se ela esta quebrada. Se tiver a palavra ela
    //retorna um numero positivo, se não tiver ela retorna -1. Retorna true ou false
}

turnOn.addEventListener("click", lampOn)
turnOff.addEventListener("click", lampOff)
//basicamente, quando ocorre o evento "click", ele chama a funçao lampOn/lampOff
lamp.addEventListener("mouseover", lampOn)
lamp.addEventListener("mouseleave", lampOff)
//quando o evento "mouseover" ou "mouseleave" (passar ou tirar o mouse de 
//cima da lampada) ele chama a funçao lampOn/lampOff
lamp.addEventListener("dblclick", lampBroken)


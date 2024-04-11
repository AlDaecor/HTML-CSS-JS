// Declarando de funciones
function aleatorio(min, max) {
    n = Math.floor(Math.random()*(max-min+1)+1) //Es para conseguir un entero 'aleatorio' dentro de un rango definido 
    return n
}


function eleccion(jugador, numero) {
    if(numero == 1) {
        response = alert(jugador + " ha elegido piedra")
    } else if(numero == 2) {
        response = alert(jugador + " ha elegido papel")
    } else if (numero == 3) {
        response = alert(jugador + " ha elegido tijeras")
     } else {
        response = alert(jugador + " Ha elegido perder")
    }

    return response
}

// Definiendo variables
let playernum = 0
let pcnum = 0
let triunfos = 0
let derrotas = 0

while (triunfos < 3 && derrotas < 3) {
    // Seccion del jugador
    playernum = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    eleccion("Usted", playernum)
            
            
    // Seccion del pc
    pcnum = aleatorio(1, 3)
    eleccion("pc", pcnum)

    //Combate
    if(pcnum == playernum) {
        alert("Empate!")
    } else if (playernum == 1 && pcnum == 3) {
        triunfos = triunfos + 1
        alert("Ganaste!")
    } else if (playernum == 2 && pcnum == 1) {
        triunfos = triunfos + 1
        alert("Ganaste!")
    } else if (playernum == 3 && pcnum == 2) {
        triunfos = triunfos + 1
        alert("Ganaste!")
    }else {
        derrotas = derrotas + 1
        alert("Perdiste!")
    }
            
    alert("Has ganado: " + triunfos + " veces y has perdido: " + derrotas + " veces")
}

if (triunfos == 3) {
    alert("Felicidades! Ganaste el juego!")
} else if (derrotas == 3) {
    alert("Has perdido el juego, mejor suerte la proxima vez!")
}
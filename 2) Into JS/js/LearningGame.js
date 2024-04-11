//Definicion de variables globales
let VarAtaqueJugador = ''
let VarVidasJugador = 3
let VarAtaqueEnemigo = ''
let VarVidasEnemigo = 3
let resultado = ''


function IniciarJuego() {
    //Esta funcion es para iniciar todo el js del juego
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let BotonMascotaJugador = document.getElementById('Boton-SeleccionarMascota')
    BotonMascotaJugador.addEventListener('click', SeleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-ataquefuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let BotonAgua = document.getElementById('boton-ataqueagua')
    BotonAgua.addEventListener('click', ataqueAgua)

    let BotonTierra = document.getElementById('boton-ataquetierra')
    BotonTierra.addEventListener('click', ataqueTierra)

    let BotonReiniciar = document.getElementById('boton-reiniciar')
    BotonReiniciar.addEventListener('click', ReiniciarJuego)
}

function SeleccionarMascotaJugador() {
    //Esta funcion es para decir cual fue la opcion del jugador

    //Definicion de variables locales a la funcion
    let mascotaselector = document.getElementById('Mascota-jugador')
    let InputHipodoge = document.getElementById('Hipodoge')
    let InputCapipepo = document.getElementById('Capipepo')
    let InputRatigueya = document.getElementById('Ratigueya')

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    //Condicionales de la eleccion del usuario
    if (InputHipodoge.checked) {
        document
        alert("Seleccionaste a Hipodoge!")
        mascotaselector.innerHTML='Tu Hipodoge tiene'

    } else if (InputCapipepo.checked) {
        alert("Seleccionaste a Capipepo!")
        mascotaselector.innerHTML='Tu Capipepo tiene'

    } else if (InputRatigueya.checked) {
        alert("Seleccionaste a Ratigueya!")
        mascotaselector.innerHTML='Tu Ratigueya tiene'

    } else {
        alert("No has seleccionado una opcion!")
    }

    SeleccionarMascotaEnemigo()
}

function SeleccionarMascotaEnemigo() {
    //Esta funcion sirve para que la PC pueda escoger a su mascota

    // Definicion de variables locales a la funcion
    let botSeleccion = aleatorio(1, 3)
    let botHTML = document.getElementById('Mascota-enemigo')

    if (botSeleccion == 1) {
        alert('El PC ha elegido a Hipodoge!')
        botHTML.innerHTML = 'El Hipodoge del enemigo tiene'

    } else if (botSeleccion == 2) {
        alert('El PC ha elegido a Capipepo!')
        botHTML.innerHTML = 'El Capipepo del enemigo tiene'

    } else if (botSeleccion == 3) {
        alert('El PC ha elegido a Ratigueya!')
        botHTML.innerHTML = 'La Ratigueya del enemigo tiene'
    }

    document.getElementById('vidas-jugador').innerHTML = ' 3 vidas'
    document.getElementById('vidas-enemigo').innerHTML = ' 3 vidas'

}

function ataqueFuego() {
    //Se define que hace el ataque de fuego
    VarAtaqueJugador = 'FUEGO'
    ataqueEnemigo()
}

function ataqueAgua() {
    //Se define que hace el ataque agua
    VarAtaqueJugador = 'AGUA'
    ataqueEnemigo()
}

function ataqueTierra() {
    //Se define que hace el ataque tierra
    VarAtaqueJugador = 'TIERRA'
    ataqueEnemigo()
}

function ataqueEnemigo() {
    //Se define que ataque realizara la PC
    let botAtaque = aleatorio(1, 3)

    if (botAtaque == 1) {
        VarAtaqueEnemigo = 'FUEGO'

    } else if (botAtaque == 2) {
        VarAtaqueEnemigo = 'AGUA'

    } else if (botAtaque == 3) {
        VarAtaqueEnemigo = 'TIERRA'
    }

    Combate()
}

function Combate() {
    //Se define los resultados del combate
    let sectionVidasJugador = document.getElementById('vidas-jugador')
    let sectionVidasEnemigo = document.getElementById('vidas-enemigo')

    if (VarAtaqueJugador == 'FUEGO' && VarAtaqueEnemigo == 'TIERRA') {
        resultado = ' - Ganaste!'
        VarVidasEnemigo--
        sectionVidasEnemigo.innerHTML = (' ' + VarVidasEnemigo + ' Vidas')

    } else if (VarAtaqueJugador == 'AGUA' && VarAtaqueEnemigo == 'FUEGO') {
        resultado = ' - Ganaste!'
        VarVidasEnemigo--
        sectionVidasEnemigo.innerHTML = (' ' + VarVidasEnemigo + ' Vidas')

    } else if (VarAtaqueJugador == 'TIERRA' && VarAtaqueEnemigo == 'AGUA') {
        resultado = ' - Ganaste!'
        VarVidasEnemigo--
        sectionVidasEnemigo.innerHTML = (' ' + VarVidasEnemigo + ' Vidas')

    } else if (VarAtaqueJugador == VarAtaqueEnemigo) {
        resultado = ' - Empataste!'

    } else {
        resultado = ' - Perdiste!'
        VarVidasJugador--
        sectionVidasJugador.innerHTML = (' ' + VarVidasJugador + ' Vidas')
    }

    CrearMensaje()
}

function CrearMensaje() {
    //Se define un mensaje espontaneo con el resultado del combate
    let sectionMensajes = document.getElementById('mensajes')
    let sectionReiniciar = document.getElementById('reiniciar')


    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+ VarAtaqueJugador +', la mascota del enemigo atacó con '+ VarAtaqueEnemigo + resultado

    sectionMensajes.appendChild(parrafo)

    if (VarVidasEnemigo == 0) {
        sectionReiniciar.style.display = 'block'

        parrafo.innerHTML = 'El juego ha terminado, el enemigo no tiene vidas, FELICIDADES!'
        sectionMensajes.appendChild(parrafo)

        let BotonFuego = document.getElementById('boton-ataquefuego')
        BotonFuego.disabled = true
    
        let BotonAgua = document.getElementById('boton-ataqueagua')
        BotonAgua.disabled = true
    
        let BotonTierra = document.getElementById('boton-ataquetierra')
        BotonTierra.disabled = true

    } else if (VarVidasJugador == 0) {
        sectionReiniciar.style.display = 'block'

        parrafo.innerHTML = 'El juego ha terminado, el jugador ya no tiene vidas, Sigue intentando'
        sectionMensajes.appendChild(parrafo)

        let BotonFuego = document.getElementById('boton-ataquefuego')
        BotonFuego.disabled = true
        
        let BotonAgua = document.getElementById('boton-ataqueagua')
        BotonAgua.disabled = true
        
        let BotonTierra = document.getElementById('boton-ataquetierra')
        BotonTierra.disabled = true
    }
}

function ReiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    //Esta funcion me da un numero 'aleatorio' entre un numero minimo y otro maximo previamente definidos
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//La siguiente linea es para llamar a la primera funcion
window.addEventListener('load', IniciarJuego)

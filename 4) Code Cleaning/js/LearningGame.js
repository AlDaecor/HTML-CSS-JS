//Se define todas las variables que llaman valores directamente del HTML
const BotonMascotaJugador = document.getElementById('Boton-SeleccionarMascota')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const BotonReiniciar = document.getElementById('boton-reiniciar')
const mascotaselector = document.getElementById('Mascota-jugador')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const botHTML = document.getElementById('Mascota-enemigo')
const DivVictoriasJugador = document.getElementById('victorias-jugador')
const DivVictoriasEnemigo = document.getElementById('victorias-enemigo')
const HTMLNotificaciones = document.getElementById('notificaciones')
const HTMLAtaquesJugador = document.getElementById('ataques-jugador')
const HTMLAtaquesEnemigo = document.getElementById('ataques-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorBotones = document.getElementById('div-botonesAtaques')

//Definicion de variables globales
let InputHipodoge
let InputCapipepo
let InputRatigueya
let InputGatoje

let mascotas = []
let opcionDeMascotas
let botonDeAtaque
let mascotaJugador
let BotonFuego
let BotonAgua
let BotonTierra
let Botones = []
let ataquesMascotaEnemigo = []
let VarAtaqueJugador = []
let VarAtaqueEnemigo = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0

class Mascota {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}//Define las propiedades de cada mascota y permite facilitar su creacion

//Se definen los objetos
let Hipodoge = new Mascota('Hipodoge', './assets/doge.jpg', '5')
let Capipepo = new Mascota('Capipepo', './assets/capybara.jpg', '5')
let Ratigueya = new Mascota('Ratigueya', './assets/rata.jpg', '5')
let Gatoje = new Mascota('Gatoje', './assets/catofighto.jpg', '5')

Hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-ataqueagua' },
    { nombre: '💧', id: 'boton-ataqueagua' },
    { nombre: '💧', id: 'boton-ataqueagua' },
    { nombre: '🌱', id: 'boton-ataquetierra' },
    { nombre: '🔥', id: 'boton-ataquefuego' },
)//Define los ataques de la mascota 'Hipodoge'

Capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-ataquetierra' },
    { nombre: '🌱', id: 'boton-ataquetierra' },
    { nombre: '🌱', id: 'boton-ataquetierra' },
    { nombre: '💧', id: 'boton-ataqueagua' },
    { nombre: '🔥', id: 'boton-ataquefuego' },
)//Define los ataques de la mascota 'Capipepo'

Ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-ataquefuego' },
    { nombre: '🔥', id: 'boton-ataquefuego' },
    { nombre: '🔥', id: 'boton-ataquefuego' },
    { nombre: '💧', id: 'boton-ataqueagua' },
    { nombre: '🌱', id: 'boton-ataquetierra' },
)//Define los ataques de la mascota 'Ratigueya'

Gatoje.ataques.push(
    { nombre: '🔥', id: 'boton-ataquefuego' },
    { nombre: '🔥', id: 'boton-ataquefuego' },
    { nombre: '🌱', id: 'boton-ataquetierra' },
    { nombre: '🌱', id: 'boton-ataquetierra' },
    { nombre: '💧', id: 'boton-ataqueagua' },
)//Define los ataques de la mascota 'Gatoje'

//Se meten todas las mascotas a un array
mascotas.push(Hipodoge, Capipepo, Ratigueya, Gatoje)

document.getElementById('contenedorTarjetas').style.gridTemplateRows = `repeat(${mascotas.length}, 1fr)`
//Aqui te quedaste, ALAN, intentabas hacer que se organizaran las tarjetas solas

function IniciarJuego() {
    mascotas.forEach((mascota) => {
        opcionDeMascotas = `
            <input type="radio" name="mascota" id=${mascota.nombre} />
            <label class="tarjeta-mokepon" for=${mascota.nombre}>
                <P>${mascota.nombre}</P>
                <img src=${mascota.foto} alt=${mascota.nombre}>
            </label>
            `
        contenedorTarjetas.innerHTML += opcionDeMascotas
    }) // Esto genera una estructura HTML que luego se inyecta al HTML directamente
    
    InputHipodoge = document.getElementById('Hipodoge')
    InputCapipepo = document.getElementById('Capipepo')
    InputRatigueya = document.getElementById('Ratigueya')
    InputGatoje = document.getElementById('Gatoje')

    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    BotonMascotaJugador.addEventListener('click', SeleccionarMascotaJugador)
}//Esta funcion es para iniciar todo el js del juego

function SeleccionarMascotaJugador() {
    //Definicion de variables locales a la funcion
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionSeleccionarMascota.style.display = 'none'

    //Condicionales de la eleccion del usuario
    if (InputHipodoge.checked) {
        mascotaselector.innerHTML = InputHipodoge.id
        mascotaJugador = InputHipodoge.id
    } else if (InputCapipepo.checked) {
        mascotaselector.innerHTML = InputCapipepo.id
        mascotaJugador = InputCapipepo.id
    } else if (InputRatigueya.checked) {
        mascotaselector.innerHTML = InputRatigueya.id
        mascotaJugador = InputRatigueya.id
    } else if (InputGatoje.checked) {
        mascotaselector.innerHTML = InputGatoje.id
        mascotaJugador = InputGatoje.id
    } else {
        alert("No has seleccionado una opcion!")
        location.reload()
    }
    ExtraerAtaques(mascotaJugador)
    SeleccionarMascotaEnemigo()
}//Esta funcion es para decir cual fue la opcion del jugador

function ExtraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mascotas.length; i++) {
        if (mascotaJugador == mascotas[i].nombre) {
            ataques = mascotas[i].ataques
        }
    }
    mostrarAtaques(ataques)
}//Se obtienen los ataques de la lista previamente creada

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        botonDeAtaque = `
            <button class="boton-ataque BAtaque" id=${ataque.id} >${ataque.nombre}</button>
            `
        contenedorBotones.innerHTML += botonDeAtaque
    }) // Esto genera los botones de los ataques y luego los inyecta al HTML

    BotonFuego = document.getElementById('boton-ataquefuego')
    BotonAgua = document.getElementById('boton-ataqueagua')
    BotonTierra = document.getElementById('boton-ataquetierra')
    Botones = document.querySelectorAll('.BAtaque')
}//Se crean los botones en base a cuantos y cuales son los ataques de la mascota que eligio el jugador

function SeleccionarMascotaEnemigo() {
    let botSeleccion = aleatorio(0, mascotas.length-1)
    botHTML.innerHTML = mascotas[botSeleccion].nombre
    ataquesMascotaEnemigo = mascotas[botSeleccion].ataques
    secuenciaAtaque()
}//Esta funcion sirve para que la PC pueda escoger a su mascota

function secuenciaAtaque() {
    Botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                VarAtaqueJugador.push('FUEGO')
                boton.style.background = '#030637'
                boton.disabled = true
            } else if (e.target.textContent === '💧') {
                VarAtaqueJugador.push('AGUA')
                boton.style.background = '#030637'
                boton.disabled = true
            } else {
                VarAtaqueJugador.push('TIERRA')
                boton.style.background = '#030637'
                boton.disabled = true
            }
            ataqueEnemigo()
        })
    })
}//Se construye la secuencia de turnos del jugador en base a sus clicks

function ataqueEnemigo() {
    let botAtaque = aleatorio(0, ataquesMascotaEnemigo.length-1)

    if (botAtaque == 0 || botAtaque == 1) {
        VarAtaqueEnemigo.push('FUEGO')

    } else if (botAtaque == 3 || botAtaque == 4) {
        VarAtaqueEnemigo.push('AGUA')

    } else {
        VarAtaqueEnemigo.push('TIERRA')
    }
    revisarTurnos()
}//Se define la secuencia de turnos de la computadora

function revisarTurnos() {
    if (VarAtaqueJugador.length === 5) {
        Combate()
    }
}//Un forma de revisar si se han terminado los turnos de la partida

function IndexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = VarAtaqueJugador[jugador]
    indexAtaqueEnemigo = VarAtaqueEnemigo[enemigo]
}//Se crea un index que se utilizara para la funcion de combate

function Combate() {
    for (let i = 0; i < VarAtaqueJugador.length; i++) {
        if (VarAtaqueJugador[i] === VarAtaqueEnemigo[i]) {
            IndexAmbosOponentes(i, i)

        } else if  (VarAtaqueJugador[i] === 'FUEGO' && VarAtaqueEnemigo[i] === 'TIERRA') {
            IndexAmbosOponentes(i, i)
            victoriasJugador++
            DivVictoriasJugador.innerHTML = ('victorias: ' + victoriasJugador)

        } else if  (VarAtaqueJugador[i] === 'AGUA' && VarAtaqueEnemigo[i] === 'FUEGO') {
            IndexAmbosOponentes(i, i)
            victoriasJugador++
            DivVictoriasJugador.innerHTML = ('victorias: ' + victoriasJugador)

        } else if  (VarAtaqueJugador[i] === 'TIERRA' && VarAtaqueEnemigo[i] === 'AGUA') {
            IndexAmbosOponentes(i, i)
            victoriasJugador++
            DivVictoriasJugador.innerHTML = ('victorias: ' + victoriasJugador)

        } else {
            IndexAmbosOponentes(i, i)
            victoriasEnemigo++
            DivVictoriasEnemigo.innerHTML = ('victorias: ' + victoriasEnemigo)
        }
    }//Un bucle para con condicionales para determinar los resultados de cada turno

    CrearMensaje()

} //Se define los resultados del combate

function CrearMensaje() {
    //Nos encargamos de agregar un Event listener al boton de reinicio just cuando aparece
    BotonReiniciar.addEventListener('click', ReiniciarJuego)

    if (victoriasJugador === victoriasEnemigo) {
        sectionReiniciar.style.display = 'block'
        HTMLNotificaciones.innerHTML = 'El juego ha terminado, ha habido un... EMPATE!!!'
    } else if (victoriasJugador < victoriasEnemigo) {
        sectionReiniciar.style.display = 'block'
        HTMLNotificaciones.innerHTML = 'El juego ha terminado... PERDISTE! sigue intentando!'
    } else if (victoriasJugador > victoriasEnemigo) {
        sectionReiniciar.style.display = 'block'
        HTMLNotificaciones.innerHTML = 'El juego ha terminado... GANASTE! FELICIDADES!'
    }//Condicionales para saber el resultado final del juego

    for (let i = 0; i < VarAtaqueJugador.length; i++) {
        let NuevoAtaqueJugador = document.createElement('p')
        let NuevoAtaqueEnemigo = document.createElement('p')

        NuevoAtaqueJugador.innerHTML = VarAtaqueJugador[i]
        NuevoAtaqueEnemigo.innerHTML = VarAtaqueEnemigo[i]

        HTMLAtaquesJugador.appendChild(NuevoAtaqueJugador)
        HTMLAtaquesEnemigo.appendChild(NuevoAtaqueEnemigo)
    }//Se encarga de crear un espacio por cada turno de los ataques del jugado y del enemigo

}//Se define un mensaje espontaneo con el resultado del combate

function ReiniciarJuego() {
    location.reload()
}//Sencillamente reinicia la pagina

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}//Esta funcion me da un numero 'aleatorio' entre un numero minimo y otro maximo previamente definidos

//La siguiente linea es para llamar a la primera funcion
window.addEventListener('load', IniciarJuego)
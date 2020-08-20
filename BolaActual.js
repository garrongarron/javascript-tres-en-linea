import _ from './creator.js'
import tablero from './Tablero.js'
import mover from './Efect.js'
import { resorte, play } from './Audio.js'

let bolaActual = _('div', null, { class: "bloque" })
let boo = true
let color = 'red'
let swap = () => {
    boo = !boo
    bolaActual.classList.remove(color)
    color = (boo) ? 'red' : 'green'
    bolaActual.classList.add(color)
}
swap()
let bolaContainer = _('div', bolaActual, { class: 'bolaContainer' })


let columna = 0
let right = () => {
    if (columna < 7) {
        columna++
    }
}
let left = () => {
    if (columna > 0) {
        columna--
    }
}
let blocked = false
document.addEventListener('keydown', (e) => {
    if (blocked) {
        return
    }
    if (e.keyCode == 39) {
        right()
    }
    if (e.keyCode == 37) {
        left()
    }
    bolaActual.style.left = columna * 52 + 'px'
    
    if (e.keyCode == 40) {
        play()
        resorte.play()
        blocked = true
        let fila = tablero.column(columna, color)
        mover(bolaActual, (fila + 1) * 52-2)
        setTimeout(() => {
            swap()
            blocked = false
        }, 600 * 1);
    }

})

export default bolaContainer
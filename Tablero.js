import _ from './creator.js'
import checking from './Checking.js'

let columnas = 8
let filas = 8
let arr = []

while (arr.length < filas * columnas) {
    arr.push(_('div'))    
}

let node = _('div', arr, { class: 'tablero' })

let objetivo = (last, tipo) => {
    setTimeout(() => {
        last.classList.add('done', tipo)
        checking(tipo, node)
    }, 600);
}

class Tablero {
    getNode() {
        return node
    }
    column(n, tipo) {
        let last = null
        let fila = 0
        for (let index = 0; index < filas; index++) {
            if (node.children[filas * index + n].classList.contains('done')) {
                objetivo(last, tipo)
                return fila
            }
            fila = index
            last = node.children[filas * index + n]
        }
        objetivo(last, tipo)
        return fila
    }
}
const tablero = new Tablero()
export default tablero
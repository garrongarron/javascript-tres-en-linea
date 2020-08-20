import { ganar } from "./Audio.js";
import reiniciar from "./Reiniciar.js";

let checking = (tipo, tablero) => {

    //Horizontal
    for (let index = 0; index < tablero.children.length - 2; index++) {
        if (index % 8 == 6) continue
        if (index % 8 == 7) continue
        let case1 = [tablero.children[index].classList.contains(tipo),
        tablero.children[index + 1].classList.contains(tipo),
        tablero.children[index + 2].classList.contains(tipo)]
        if (case1.every(n => n)) {
            console.log('1');
            ganar.play()
            tablero.children[index].classList.add('win')
            tablero.children[index + 1].classList.add('win')
            tablero.children[index + 2].classList.add('win')
            reiniciar()
            return
        }
    }
    //Vertical
    for (let index = 16; index < tablero.children.length - 16; index++) {
        let case2 = [
            tablero.children[index].classList.contains(tipo),
            tablero.children[index + 8].classList.contains(tipo),
            tablero.children[index + 16].classList.contains(tipo)
        ]
        if (case2.every(n => n)) {
            console.log('2');
            ganar.play()
            tablero.children[index].classList.add('win')
            tablero.children[index + 8].classList.add('win')
            tablero.children[index + 16].classList.add('win')
            reiniciar()
            return
        }
    }

    //Hacia Abajo derecha
    for (let index = 0; index < tablero.children.length - 16; index++) {
        if (index % 8 == 6) continue
        if (index % 8 == 7) continue
        let case3 = [
            tablero.children[index].classList.contains(tipo),
            tablero.children[index + 9].classList.contains(tipo),
            tablero.children[index + 18].classList.contains(tipo)
        ]
        if (case3.every(n => n)) {
            console.log('3');
            ganar.play()
            tablero.children[index].classList.add('win')
            tablero.children[index + 9].classList.add('win')
            tablero.children[index + 18].classList.add('win')
            reiniciar()
            return
        }
    }

    //Hacia Arriba derecha
    for (let index = 16; index < tablero.children.length; index++) {
        if (index % 8 == 6) continue
        if (index % 8 == 7) continue
        let case4 = [
            tablero.children[index].classList.contains(tipo),
            tablero.children[index - 7].classList.contains(tipo),
            tablero.children[index - 14].classList.contains(tipo)
        ]
        if (case4.every(n => n)) {
            console.log('4');
            ganar.play()
            tablero.children[index].classList.add('win')
            tablero.children[index -7].classList.add('win')
            tablero.children[index -14].classList.add('win')
            reiniciar()
            return
        }
    }
}
export default checking
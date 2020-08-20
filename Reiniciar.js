import _ from './creator.js'
import tablero from './Tablero.js'  

let boton = _('div',_('div','Reiniciar'),{class:'reiniciar'})
let tmp = _('div')

boton.addEventListener('click',()=>{
    tablero.getNode().childNodes.forEach(node => {
        node.classList.remove('red')
        node.classList.remove('green')
        node.classList.remove('win')
        node.classList.remove('done')
    });
    tmp.appendChild(boton)
})
let reiniciar = () =>{
    document.body.appendChild(boton)
}
export default reiniciar


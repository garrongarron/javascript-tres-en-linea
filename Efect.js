
let efectos = []
let crearAnimacion = (pixeles) =>{
    efectos[pixeles] = true
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
    .down${pixeles} {
        animation-name: down${pixeles};
        animation-duration: .6s;
    }
    @keyframes down${pixeles}{
        from {top: 0px;}
        to {top: ${pixeles}px;}
    }`;
    document.getElementsByTagName('head')[0].appendChild(style);
}


let mover = (node, pixeles) =>{
    if(typeof efectos[pixeles] == 'undefined'){
        crearAnimacion(pixeles)
    }
    node.classList.add(`down${pixeles}`)
    setTimeout(() => {
        node.classList.remove(`down${pixeles}`)
    }, 600);
}
export default mover

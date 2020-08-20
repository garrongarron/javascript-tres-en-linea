import _ from './creator.js'

let prefix = location.href.replace('index.html','')
let resorte = _('audio', null, { src: `${prefix}Resorte.wav`, preload: "auto" })
let ganar = _('audio', null, { src: `${prefix}Wikiwiki2.mp3`, preload: "auto" })
let background = _('audio', null, { src: `${prefix}background.mp3`, preload: "auto" })

let stop = _('span', 'Música')
document.body.appendChild(stop)


let musica = JSON.parse(localStorage.getItem('musica')||true)
stop.addEventListener('click',()=>{
    if(musica){
        background.pause()
        localStorage.setItem('musica', 'false')
        stop.innerText = 'Escuchar Música'
    } else {
        localStorage.setItem('musica', 'true')
        background.play()
        stop.innerText = 'Quitar Música'
    }
    musica = JSON.parse(localStorage.getItem('musica')||true)
})

let play = () =>{
    if(musica){
        background.play()
    }
}

export { resorte, ganar, play }
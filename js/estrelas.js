const banner = document.querySelector('.banner')
function criarEstrela() {
    let estrela = document.createElement('div')
    banner.appendChild(estrela)
    estrela.classList.add('bi')
    estrela.classList.add('bi-star-fill')
    estrela.classList.add('star')
    let left = '-'+Math.floor(Math.random() * 100).toString() + '%'
    estrela.style.left = left
    let top = (Math.floor(Math.random() * 100).toString() + '%')
    estrela.style.top = top

    console.log(estrela.style.animation)


}

for(let i=0;i<50;i++){
    criarEstrela()
}

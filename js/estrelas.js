const banner = document.querySelector('.banner')
function criarEstrela() {
    let estrela = document.createElement('i')
    estrela.classList.add('bi', 'bi-star-fill', 'star')

    let top = randomRange(2,98)
    estrela.style.top = `${top}%`

    

    let duracao = randomRange(20,100) 
    estrela.style.animationDuration = `${duracao}s`

    let atraso = randomRange(0,100)
    estrela.style.animationDelay = `-${atraso}s`

    banner.appendChild(estrela)
}

for (let i = 0; i < 500; i++) {
    criarEstrela()
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

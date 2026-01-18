const head2 = document.querySelector('.head2');

// só executa se NÃO for mobile
const isDesktop = window.matchMedia('(min-width: 1100px)');

window.addEventListener('scroll', () => {
  if (!isDesktop.matches) {
    head2.classList.remove('fixed');
    return; // para no celular
  }

  if (window.scrollY >= 160 && !head2.classList.contains('fixed')) {
    head2.classList.add('fixed');
  }

  if (window.scrollY < 100) {
    head2.classList.remove('fixed');
  }
});

// Modo escuro muehehe
let tema = localStorage.getItem('tema') // Pega o tema que ja está na memoria
console.log(tema)
let btn_mudar = document.getElementById('escuro')
btn_mudar.addEventListener('click', mudarTema)

function mudarTema() {
  tema == 'dark' ? localStorage.setItem("tema", "light") : localStorage.setItem("tema", "dark")
  tema = localStorage.getItem('tema')
  aplicarTema()
}
function aplicarTema() {
  switch (tema) {
    case 'dark':
      document.body.classList.add('dark-mode')
      btn_mudar.classList.remove('bi-moon-fill')
      btn_mudar.classList.add('bi-sun-fill')
      break
    case 'light':
      document.body.classList.remove('dark-mode')
      btn_mudar.classList.remove('bi-sun-fill')
    btn_mudar.classList.add('bi-moon-fill')
      break
  }
}


aplicarTema()
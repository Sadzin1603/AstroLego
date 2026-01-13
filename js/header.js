const head2 = document.querySelector('.head2');

// só executa se NÃO for mobile
const isDesktop = window.matchMedia('(min-width: 768px)');

window.addEventListener('scroll', () => {
  if (!isDesktop.matches) return; // para no celular

  if (window.scrollY >= 160 && !head2.classList.contains('fixed')) {
    head2.classList.add('fixed');
  }

  if (window.scrollY < 100) {
    head2.classList.remove('fixed');
  }
});

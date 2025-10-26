const head2 = document.querySelector('.head2');

window.addEventListener('scroll', () => {
  
  // Quando o topo do head2 passa da parte superior da tela
  console.log(window.scrollY)
  if (window.scrollY >= 160 && !head2.classList.contains('fixed')) {
    head2.classList.add('fixed');
  }

  // Quando ele volta para a tela (ou seja, desce o scroll de volta)
  if (window.scrollY < 100) {
    head2.classList.remove('fixed');
  }
}); 
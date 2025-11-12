document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".buttons button");
  const tiers = document.querySelectorAll(".tier p");

  // Textos para cada modo
  const textos = {
    dinheiro: [
      "Apoio financeiro básico que ajuda com materiais simples e deslocamento.",
      "Suporte financeiro intermediário, cobre parte de equipamentos e transporte.",
      "Principal patrocinador financeiro, cobre boa parte dos custos do projeto.",
      "Esse apoio mantém a equipe ativa em campeonatos e pesquisas.",
      "Marca em banners, uniformes e redes sociais oficiais."
    ],
    pecas: [
      "Doação de pequenas peças e componentes para protótipos.",
      "Fornece sensores, motores e kits de robótica de médio porte.",
      "Fornece equipamentos completos e suporte técnico especializado.",
      "Permite testar novas soluções e aprimorar o robô.",
      "Marca em vídeos de montagem e posts técnicos."
    ]
  };

  // Função para trocar os textos
  function trocarTextos(tipo) {
    textos[tipo].forEach((txt, i) => {
      if (tiers[i]) tiers[i].textContent = txt;
    });
  }

  // Eventos nos botões
  btns[0].addEventListener("click", () => trocarTextos("dinheiro"));
  btns[1].addEventListener("click", () => trocarTextos("pecas"));
});

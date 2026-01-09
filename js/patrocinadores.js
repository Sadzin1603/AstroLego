document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".buttons button");
  const tiers = document.querySelectorAll(".tier p");

  // Textos para cada modo
  const textos = {
    dinheiro: [
      "Menção nas redes sociais da equipe (Instagram, tiktok, github e linkedin) Logo do patrocinador no matérias extras (broches, panfletos, banners e etc...) Certificado de patrocinador da SESI Astro Lego",
      "Todos os benefícios do plano bronze Logo do patrocinador na camisa Post em Destaque (fixo) nas redes sociais de agradecimento e divulgação Acesso a guia geral do planejamento de projetos, marketing e integrantes da equipe.",
      "Todos os benefícios dos planos bronze e prata Logo da empresa em Destaque nos robôs e em todos os matérias oficiais da equipe. Menção verbal e propaganda em entrevistas e em apresentações sociais SESI Artigo ou post dedicado a empresa no site oficial da Astro Plano de divulgação exclusivo.",
      "Fortalecer a equipe de robótica AstroLego, promovendo inovação tecnológica, inclusão educacional e desenvolvimento de competências STEM (Ciência, Tecnologia, Engenharia e Matemática) entre jovens talentos. Os patrocinadores terão a oportunidade de associar sua marca a uma iniciativa de impacto social e tecnológico.",
      "lorem"
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

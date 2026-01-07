document.addEventListener("DOMContentLoaded", () => {
  const phaseCards = document.querySelectorAll(".phase-card");

  phaseCards.forEach((card) => {
    const title = card.querySelector(".phase-title");
    const content = card.querySelector(".phase-content");

    // 1. Inicialização: Define o estado inicial como expandido
    // Como os textos agora são maiores, calculamos o scrollHeight real
    card.classList.add("expanded");
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.opacity = "1";

    // 2. Evento de Clique para expandir/recolher
    title.addEventListener("click", () => {
      const isExpanded = card.classList.toggle("expanded");

      if (isExpanded) {
        // Ao expandir, usamos scrollHeight para que o container se ajuste ao novo texto
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = "1";
      } else {
        // Ao recolher, voltamos para zero
        content.style.maxHeight = "0";
        content.style.opacity = "0";
      }
    });

    // 3. Ajuste de Responsividade (Resize)
    // Essencial para telas de 1280px: se o usuário redimensionar a janela,
    // a altura interna dos cards muda (o texto quebra em mais linhas).
    // Este código recalcula a altura em tempo real.
    window.addEventListener("resize", () => {
      if (card.classList.contains("expanded")) {
        // Remove o limite temporariamente para recalcular a nova altura do texto
        content.style.maxHeight = "none";
        const newHeight = content.scrollHeight;
        content.style.maxHeight = newHeight + "px";
      }
    });
  });
});

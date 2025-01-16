// Função para verificar se o elemento está visível na tela
function checkScroll() {
    const sections = document.querySelectorAll('.reveal');
8
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
  
      // Verifica se a seção está parcialmente visível (topo da seção está dentro da janela de visualização)
      if (rect.top >= 0 && rect.top <= window.innerHeight * 0.8) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }
  
  // Chama a função ao rolar a página
  window.addEventListener('scroll', checkScroll);
  
  // Chama a função para verificar a visibilidade inicial
  checkScroll();
  
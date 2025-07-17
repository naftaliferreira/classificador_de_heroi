// Aguarda o DOM carregar antes de acessar elementos
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formHeroi');
  const nomeInput = document.getElementById('nome');
  const xpInput = document.getElementById('xp');
  const mensagem = document.getElementById('mensagem');
  const imagem = document.getElementById('heroiImagem');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // <-- Corrigido (sem typo) e usando o evento recebido

    const nome = nomeInput.value.trim();
    const xp = Number(xpInput.value);

    // Validação básica
    if (!nome) {
      mensagem.textContent = 'Por favor, informe o nome do herói.';
      imagem.alt = 'Sem herói';
      return;
    }

    if (Number.isNaN(xp) || xp < 0) {
      mensagem.textContent = 'Informe um valor de XP válido (número >= 0).';
      imagem.alt = 'XP inválida';
      return;
    }

    // Determina nível e imagem
    const { nivel, img } = classificarXP(xp);

    // Atualiza mensagem (sem negrito; usamos spans para estilizar via CSS)
    mensagem.innerHTML = `O Herói de nome <span class="msg-nome">${nome}</span> está no nível de <span class="msg-nivel">${nivel}</span>.`;

    // Atualiza sprite
    imagem.src = img;
    imagem.alt = `Herói nível ${nivel}`;
  });
});

/**
 * Retorna o nível de acordo com a XP e o caminho da imagem respectiva.
 * Ajustei os limites para que não existam "buracos" entre faixas.
 * Se preferir seguir exatamente os intervalos do enunciado, posso adaptar.
 */
function classificarXP(xp) {
  if (xp <= 1000) {
    return { nivel: 'Ferro', img: 'assets/ferro.png' };
  } else if (xp <= 2000) {
    return { nivel: 'Bronze', img: 'assets/bronze.png' };
  } else if (xp <= 5000) {
    return { nivel: 'Prata', img: 'assets/prata.png' };
  } else if (xp <= 7000) {
    return { nivel: 'Ouro', img: 'assets/ouro.png' };
  } else if (xp <= 8000) {
    return { nivel: 'Platina', img: 'assets/platina.png' };
  } else if (xp <= 9000) {
    return { nivel: 'Ascendente', img: 'assets/ascendente.png' };
  } else if (xp <= 10000) {
    return { nivel: 'Imortal', img: 'assets/imortal.png' };
  } else {
    return { nivel: 'Radiante', img: 'assets/radiante.png' };
  }
}

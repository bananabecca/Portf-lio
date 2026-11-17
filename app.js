const PROJETOS = [
  {
    nome: "Site v1 Ordem do Dia",
    url: "https://bananabecca.github.io/Ordem_do_Diaa/",
    descrição: "Esse site foi feito para apresentar um jogo de um projeto escolar.",
    ferramentas: "HTML, CSS, JavaScript",
  },
  {
    nome: "Site v2 Ordem do Dia",
    url: "https://stackblitz.com/edit/stackblitz-starters-mzqmb1ms?file=README.md",
    descrição: "Esse site foi feito para apresentar um jogo de um projeto escolar na versão aprimorada.",
    ferramentas: "React Native, CSS",
  },
  {
    nome: "Revista Online Legado Feminino",
    url: "https://snack.expo.dev/@starlitrf/site-oi3-legado-feminino",
    descrição: "Uma revista online feita para valorizar mulheres na nossa história.",
    ferramentas: "React Native, CSS",
  },
];

const grade = document.getElementById('grade');
const dlg = document.getElementById('detalhes');
const dc = document.getElementById('dconteudo');

const previa = (p, viva) => `<div class="tela${viva ? ' viva' : ''}">${
  p.url
    ? `<iframe src="${p.url}" title="Prévia de ${p.nome}" loading="lazy" tabindex="-1" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>`
    : `<div class="vazio">Cole o link do site em PROJETOS para ver a prévia aqui</div>`
}</div>`;

function ajustar(raiz = document) {
  raiz.querySelectorAll('.tela').forEach(t => t.style.setProperty('--s', t.clientWidth / 1280));
}

PROJETOS.forEach((p, i) => {
  const b = document.createElement('button');
  b.className = 'proj';
  b.type = 'button';
  b.innerHTML = `${previa(p)}<div class="corpo"><h3>${p.nome}</h3><span class="ver">Ver detalhes</span></div>`;
  b.onclick = () => abrir(i);
  grade.appendChild(b);
});

function abrir(i) {
  const p = PROJETOS[i];
  const linhas = [['Ferramentas', p.ferramentas]];
  dc.innerHTML = `<button class="fechar" aria-label="Fechar">×</button>
    <span class="etiqueta">Projeto</span><h2 id="dtitulo">${p.nome}</h2>
    ${previa(p, true)}
    <dl>${linhas.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
    ${p.url ? `<a class="btn" href="${p.url}" target="_blank" rel="noopener">Abrir o site</a>
    <p class="dica">Se a prévia ficar em branco, o site não permite aparecer dentro de outra página. Use o botão acima para abrir.</p>` : ''}`;
  dc.querySelector('.fechar').onclick = () => dlg.close();
  dlg.showModal();
  ajustar(dc);
}
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
addEventListener('resize', () => ajustar());
addEventListener('load', () => ajustar());
ajustar();

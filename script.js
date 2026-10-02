/* Atualize estes dados confirmados. Deixe strings vazias para não exibir links pendentes. */
const dados = {
  whatsapp: '', // DDI + DDD + número, apenas dígitos. Exemplo fictício: '5561999999999'
  instagram: '', // URL completa e oficial
  facebook: '', // URL completa e oficial
  mapa: 'https://maps.app.goo.gl/PCznHpZzTqJ3mZYT8', // localização da paróquia no Google Maps
  eventos: [
    // { data: '2026-10-07', horario: '20h', titulo: 'Título confirmado', local: 'Local confirmado', descricao: 'Descrição breve' },
  ],
  cancoes: [
  {
    "titulo": "Santa Mãe, Maria",
    "momento": "Canção mariana",
    "blocos": [
      {
        "rotulo": "Estrofe 1",
        "texto": "Santa Mãe, Maria, nesta travessia,\nCubra-nos teu manto cor de anil.\nGuarda nossa vida, Mãe Aparecida,\nSanta padroeira do Brasil."
      },
      {
        "rotulo": "Refrão",
        "texto": "Ave, Maria! Ave, Maria!\nAve, Maria! Ave, Maria!"
      },
      {
        "rotulo": "Estrofe 2",
        "texto": "Com amor divino, guarda os peregrinos\nNesta caminhada para o além.\nDá-lhes companhia, pois também um dia\nFoste peregrina em Belém."
      },
      {
        "rotulo": "Refrão",
        "texto": "Ave, Maria! Ave, Maria!\nAve, Maria! Ave, Maria!"
      },
      {
        "rotulo": "Estrofe 3",
        "texto": "Mulher peregrina, força feminina,\nA mais importante que existiu.\nCom justiça, queres que nossas mulheres\nSejam construtoras do Brasil."
      },
      {
        "rotulo": "Refrão",
        "texto": "Ave, Maria! Ave, Maria!\nAve, Maria! Ave, Maria!"
      },
      {
        "rotulo": "Estrofe 4",
        "texto": "Com seus passos lentos, enfrentando os ventos,\nQuando sopram noutra direção,\nToda a Mãe Igreja pede que tu sejas\nCompanheira de libertação."
      }
    ]
  },
  {
    "titulo": "Hino do Terço dos Homens",
    "momento": "Hino do movimento",
    "blocos": [
      {
        "rotulo": "Estrofe 1",
        "texto": "No teu Santuário, que é fonte e berço,\nNasceu a missão dos Homens do Terço.\nO primeiro homem, um santo varão,\nComo o bem-amado, se chama João."
      },
      {
        "rotulo": "Refrão",
        "texto": "Ó Mãe e Rainha do Santo Rosário,\nMãe Admirável, Mãe do Santuário,\nO mundo sem fé na dor se consome.\nAjuda esse mundo com o Terço dos Homens."
      },
      {
        "rotulo": "Estrofe 2",
        "texto": "O terço é presente de tua ternura.\nAs mãos que o levam são nossas, são duras.\nO homem rezando se torna menino,\nQue pode mudar do mundo o destino."
      },
      {
        "rotulo": "Refrão",
        "texto": "Ó Mãe e Rainha do Santo Rosário,\nMãe Admirável, Mãe do Santuário,\nO mundo sem fé na dor se consome.\nAjuda esse mundo com o Terço dos Homens."
      },
      {
        "rotulo": "Estrofe 3",
        "texto": "O terço tem contas e é meditado,\nMas tu, Mãe, não contas o nosso pecado.\nConvidas a todos, o terço é do povo.\nSó queres que o homem seja homem novo."
      },
      {
        "rotulo": "Refrão",
        "texto": "Ó Mãe e Rainha do Santo Rosário,\nMãe Admirável, Mãe do Santuário,\nO mundo sem fé na dor se consome.\nAjuda esse mundo com o Terço dos Homens."
      },
      {
        "rotulo": "Estrofe 4",
        "texto": "É tua escola o terço, ele é luz.\nNinguém como tu sabe mais de Jesus.\nO Santo Evangelho ensina de novo.\nTeu terço é Bíblia que Deus deu ao povo."
      },
      {
        "rotulo": "Refrão",
        "texto": "Ó Mãe e Rainha do Santo Rosário,\nMãe Admirável, Mãe do Santuário,\nO mundo sem fé na dor se consome.\nAjuda esse mundo com o Terço dos Homens."
      },
      {
        "rotulo": "Estrofe 5",
        "texto": "Nas Ave-Marias que aqui repetimos,\nFalamos do amor que por ti sentimos.\nCom o terço na mão, em santas vigílias,\nRezamos unidos às nossas famílias."
      }
    ]
  },
  {
    "titulo": "Consagração a Nossa Senhora",
    "momento": "Consagração mariana",
    "blocos": [
      {
        "rotulo": "Consagração",
        "texto": "Ó, minha Senhora e também minha Mãe\nEu me ofereço inteiramente, todo a Vós\nE em prova da minha devoção\nEu hoje Vos dou meu coração\nConsagro a Vós meus olhos, meus ouvidos, minha boca\nTudo o que sou desejo que a Vós pertença\nIncomparável Mãe, guardai-me e defendei-me\nComo coisa e propriedade Vossa, amém\nComo coisa e propriedade Vossa, amém"
      }
    ]
  }
],
};

const misterios = {
  gozosos: { dia: 'Segundas-feiras e sábados', itens: ['Anunciação do anjo a Maria', 'Visitação de Maria a Isabel', 'Nascimento de Jesus', 'Apresentação de Jesus no Templo', 'Encontro de Jesus no Templo'] },
  luminosos: { dia: 'Quintas-feiras', itens: ['Batismo de Jesus no Jordão', 'Autorrevelação de Jesus nas bodas de Caná', 'Anúncio do Reino de Deus e convite à conversão', 'Transfiguração de Jesus', 'Instituição da Eucaristia'] },
  dolorosos: { dia: 'Terças-feiras e sextas-feiras', itens: ['Agonia de Jesus no Horto', 'Flagelação de Jesus', 'Coroação de espinhos', 'Jesus carrega a cruz', 'Crucificação e morte de Jesus'] },
  gloriosos: { dia: 'Quartas-feiras e domingos', itens: ['Ressurreição de Jesus', 'Ascensão de Jesus', 'Vinda do Espírito Santo', 'Assunção de Maria', 'Coroação de Maria no Céu'] },
};

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Abrir menu'); }
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = document.querySelector('#misterios-paineis');
for (const [key, group] of Object.entries(misterios)) {
  const panel = document.createElement('section');
  panel.id = `panel-${key}`;
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', `tab-${key}`);
  panel.hidden = key !== 'gozosos';
  const title = document.createElement('h4');
  title.textContent = group.dia;
  const list = document.createElement('ol');
  group.itens.forEach(item => { const li = document.createElement('li'); li.textContent = item; list.append(li); });
  panel.append(title, list);
  panels.append(panel);
}
function selectTab(tab) {
  tabs.forEach(t => { const active = t === tab; t.setAttribute('aria-selected', String(active)); t.tabIndex = active ? 0 : -1; document.querySelector(`#panel-${t.dataset.tab}`).hidden = !active; });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    selectTab(tabs[next]); tabs[next].focus();
  });
});

const eventsList = document.querySelector('#eventos-lista');
const today = new Date(); today.setHours(0, 0, 0, 0);
const upcoming = dados.eventos.filter(event => {
  const d = new Date(`${event.data}T12:00:00`);
  return !Number.isNaN(d.getTime()) && d >= today && event.titulo && event.horario && event.local;
}).sort((a, b) => a.data.localeCompare(b.data));
eventsList.replaceChildren();
if (!upcoming.length) {
  const empty = document.createElement('div'); empty.className = 'empty-event';
  const strong = document.createElement('strong'); strong.textContent = 'Nenhum evento especial cadastrado.';
  const p = document.createElement('p'); p.textContent = 'O encontro semanal continua às quartas-feiras, às 20h.';
  empty.append(strong, p); eventsList.append(empty);
} else {
  upcoming.forEach(event => {
    const article = document.createElement('article'); article.className = 'event-item';
    const date = document.createElement('time'); date.className = 'event-date'; date.dateTime = event.data;
    date.textContent = new Intl.DateTimeFormat('pt-BR', {day:'2-digit',month:'long',year:'numeric'}).format(new Date(`${event.data}T12:00:00`));
    const heading = document.createElement('h4'); heading.textContent = event.titulo;
    const place = document.createElement('p'); place.textContent = `${event.horario} · ${event.local}`;
    const desc = document.createElement('p'); desc.textContent = event.descricao || '';
    article.append(date, heading, place, desc); eventsList.append(article);
  });
}

const songsList = document.querySelector('#cancoes-lista');
const songs = dados.cancoes.filter(song => song.titulo && song.momento);
if (!songs.length) {
  const p = document.createElement('p'); p.className = 'song-empty'; p.textContent = '[INSERIR TÍTULOS DAS CANÇÕES E MOMENTOS DA ORAÇÃO APÓS CONFIRMAÇÃO]'; songsList.append(p);
} else {
  songs.forEach(song => {
    const article = document.createElement('article'); article.className = 'song-item';
    const moment = document.createElement('small'); moment.textContent = song.momento;
    const title = document.createElement('h3'); title.textContent = song.titulo;
    article.append(moment, title);
    if (song.blocos?.length) {
      const details = document.createElement('details');
      details.className = 'song-lyrics';
      const summary = document.createElement('summary');
      summary.textContent = 'Ver texto completo';
      details.append(summary);
      song.blocos.forEach(block => {
        const section = document.createElement('div');
        section.className = block.rotulo === 'Refrão' ? 'lyric-block refrain' : 'lyric-block';
        const label = document.createElement('strong'); label.textContent = block.rotulo;
        const text = document.createElement('p'); text.textContent = block.texto;
        section.append(label, text); details.append(section);
      });
      article.append(details);
    }
    if (isHttpUrl(song.link)) { const a = document.createElement('a'); a.href = song.link; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = 'Ouvir na fonte oficial ↗'; article.append(a); }
    songsList.append(article);
  });
}
function isHttpUrl(value) { try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol); } catch { return false; } }
const contact = document.querySelector('#contact-links');
if (/^\d{12,15}$/.test(dados.whatsapp)) {
  const a = document.createElement('a'); a.href = `https://wa.me/${dados.whatsapp}`; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = 'Conversar pelo WhatsApp ↗'; contact.append(a);
} else { const note = document.createElement('span'); note.className = 'pending'; note.textContent = 'WhatsApp: [INSERIR NÚMERO]'; contact.append(note); }
for (const [name, url] of [['Instagram', dados.instagram], ['Facebook', dados.facebook]]) {
  if (isHttpUrl(url)) { const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = `${name} ↗`; contact.append(a); }
}
if (!isHttpUrl(dados.instagram) && !isHttpUrl(dados.facebook)) { const note = document.createElement('span'); note.className = 'pending'; note.textContent = 'Redes sociais: [INSERIR LINKS]'; contact.append(note); }
if (isHttpUrl(dados.mapa)) { const a = document.createElement('a'); a.href = dados.mapa; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = 'Abrir mapa ↗'; contact.append(a); }

// A navegação para orações abre o respectivo painel nativo <details>.
document.querySelectorAll('.prayer-nav a').forEach(a => a.addEventListener('click', () => {
  const details = document.querySelector(a.getAttribute('href'));
  if (details) details.open = true;
}));

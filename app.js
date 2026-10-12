const KEY = 'japon-viaje-v1';

const CATS = ['Sopra', 'Sotto', 'Esterno', 'Scarpe', 'Accessori'];

const ROPA_BASE = [
  ['T-shirt 1', 'Sopra'], ['T-shirt 2', 'Sopra'], ['T-shirt 3', 'Sopra'],
  ['Maglia manica lunga 1', 'Sopra'], ['Maglia manica lunga 2', 'Sopra'], ['Maglia manica lunga 3', 'Sopra'],
  ['Pile sottile / maglione', 'Sopra'],
  ['Pantaloni lunghi 1', 'Sotto'], ['Pantaloni lunghi 2', 'Sotto'], ['Pantaloni lunghi 3', 'Sotto'],
  ['Giacca antivento e impermeabile', 'Esterno'],
  ['Sneakers comode', 'Scarpe'], ['Sneakers leggere', 'Scarpe'],
  ['Pigiama', 'Accessori'], ['Piccolo ombrello', 'Accessori'], ['Zaino giornaliero', 'Accessori']
];

const FRASI_BASE = [
  { jp: 'すみません', rom: 'Sumimasen', it: 'Scusi, permesso, mi dispiace' },
  { jp: 'ありがとうございます', rom: 'Arigatō gozaimasu', it: 'Grazie' },
  { jp: 'お願いします', rom: 'Onegaishimasu', it: 'Per favore / vorrei chiedere' },
  { jp: 'これをください', rom: 'Kore o kudasai', it: 'Vorrei questo' },
  { jp: 'どこですか', rom: 'Doko desu ka?', it: 'Dov\'è?' },
  { jp: '駅はどこですか', rom: 'Eki wa doko desu ka?', it: 'Dov\'è la stazione?' },
  { jp: 'トイレはどこですか', rom: 'Toire wa doko desu ka?', it: 'Dov\'è il bagno?' },
  { jp: '英語は話せますか', rom: 'Eigo wa hanasemasu ka?', it: 'Parla inglese?' },
  { jp: 'お会計お願いします', rom: 'Okaikei onegaishimasu', it: 'Il conto, per favore' },
  { jp: '大丈夫です', rom: 'Daijōbu desu', it: 'Va bene / non c\'è problema' }
];

const FRASI_GRUPOS = [
  { titolo: 'Essenziali', frasi: FRASI_BASE.concat([
    { jp: 'はい / いいえ', rom: 'Hai / Iie', it: 'Sì / No' },
    { jp: 'ありがとうございました', rom: 'Arigatō gozaimashita', it: 'Grazie (a fine pasto o visita)' },
    { jp: 'わかりません', rom: 'Wakarimasen', it: 'Non capisco / non lo so' },
    { jp: 'もう一度お願いします', rom: 'Mō ichido onegaishimasu', it: 'Può ripetere, per favore?' },
    { jp: 'ゆっくり話してください', rom: 'Yukkuri hanashite kudasai', it: 'Parli più lentamente, per favore' },
    { jp: '日本語が話せません', rom: 'Nihongo ga hanasemasen', it: 'Non parlo giapponese' },
    { jp: '一、二、三、四、五、六、七、八、九、十', rom: 'Ichi, ni, san, shi/yon, go, roku, shichi/nana, hachi, kyū, jū', it: 'Numeri da 1 a 10' }
  ]) },
  { titolo: 'Ristorante', frasi: [
    { jp: '一人です / 二人です', rom: 'Hitori desu / Futari desu', it: 'Siamo in uno / in due' },
    { jp: '席はありますか', rom: 'Seki wa arimasu ka?', it: 'C\'è un posto libero?' },
    { jp: 'メニューをください', rom: 'Menyū o kudasai', it: 'Il menù, per favore' },
    { jp: '英語のメニューはありますか', rom: 'Eigo no menyū wa arimasu ka?', it: 'C\'è il menù in inglese?' },
    { jp: 'おすすめは何ですか', rom: 'Osusume wa nan desu ka?', it: 'Cosa consigliate?' },
    { jp: '辛くないものをください', rom: 'Karakunai mono o kudasai', it: 'Qualcosa non piccante, per favore' },
    { jp: 'ベジタリアンです', rom: 'Bejitarian desu', it: 'Sono vegetariano / vegetariana' },
    { jp: 'アレルギーがあります', rom: 'Arerugī ga arimasu', it: 'Ho un\'allergia' },
    { jp: '水をください', rom: 'Mizu o kudasai', it: 'Acqua, per favore' },
    { jp: '美味しい', rom: 'Oishii', it: 'Buonissimo' },
    { jp: '持ち帰りできますか', rom: 'Mochikaeri dekimasu ka?', it: 'Posso portarlo via?' },
    { jp: '予約しています', rom: 'Yoyaku shite imasu', it: 'Ho una prenotazione' },
    { jp: '写真を撮ってもいいですか', rom: 'Shashin o totte mo ii desu ka?', it: 'Posso fare una foto?' }
  ] },
  { titolo: 'Trasporti', frasi: [
    { jp: 'タクシー乗り場はどこですか', rom: 'Takushī noriba wa doko desu ka?', it: 'Dov\'è la fermata dei taxi?' },
    { jp: '〜まで行きたいです', rom: '~ made ikitai desu', it: 'Vorrei andare a …' },
    { jp: 'ここで降ります', rom: 'Koko de orimasu', it: 'Scendo qui' },
    { jp: '切符を買いたいです', rom: 'Kippu o kaitai desu', it: 'Vorrei comprare un biglietto' },
    { jp: '何番線ですか', rom: 'Nanbansen desu ka?', it: 'Da quale binario?' },
    { jp: 'この電車は〜に行きますか', rom: 'Kono densha wa ~ ni ikimasu ka?', it: 'Questo treno va a …?' },
    { jp: '次の駅は何ですか', rom: 'Tsugi no eki wa nan desu ka?', it: 'Qual è la prossima fermata?' },
    { jp: 'コインロッカーはどこですか', rom: 'Koin rokkā wa doko desu ka?', it: 'Dove sono gli armadietti?' },
    { jp: 'どのくらいかかりますか', rom: 'Dono kurai kakarimasu ka?', it: 'Quanto ci vuole?' }
  ] },
  { titolo: 'Hotel', frasi: [
    { jp: 'チェックインお願いします', rom: 'Chekkuin onegaishimasu', it: 'Check-in, per favore' },
    { jp: 'チェックアウトします', rom: 'Chekkuauto shimasu', it: 'Faccio il check-out' },
    { jp: '荷物を預かってもらえますか', rom: 'Nimotsu o azukatte moraemasu ka?', it: 'Potete custodire i bagagli?' },
    { jp: '鍵をなくしました', rom: 'Kagi o nakushimashita', it: 'Ho perso la chiave' },
    { jp: 'Wi-Fiのパスワードは何ですか', rom: 'Wai-fai no pasuwādo wa nan desu ka?', it: 'Qual è la password del Wi-Fi?' },
    { jp: 'タオルをもう一枚ください', rom: 'Taoru o mō ichi-mai kudasai', it: 'Un altro asciugamano, per favore' },
    { jp: '部屋を変えてもらえますか', rom: 'Heya o kaete moraemasu ka?', it: 'Posso cambiare camera?' },
    { jp: '朝食は何時からですか', rom: 'Chōshoku wa nanji kara desu ka?', it: 'A che ora inizia la colazione?' }
  ] },
  { titolo: 'Acquisti', frasi: [
    { jp: 'これはいくらですか', rom: 'Kore wa ikura desu ka?', it: 'Quanto costa questo?' },
    { jp: '高すぎます', rom: 'Takasugimasu', it: 'È troppo caro' },
    { jp: 'カードは使えますか', rom: 'Kādo wa tsukaemasu ka?', it: 'Accettate carte?' },
    { jp: '現金のみですか', rom: 'Genkin nomi desu ka?', it: 'Solo contanti?' },
    { jp: '免税できますか', rom: 'Menzei dekimasu ka?', it: 'Si può fare il tax free?' },
    { jp: '試着してもいいですか', rom: 'Shichaku shite mo ii desu ka?', it: 'Posso provarlo?' },
    { jp: '別のサイズはありますか', rom: 'Betsu no saizu wa arimasu ka?', it: 'C\'è un\'altra taglia?' },
    { jp: '袋をください', rom: 'Fukuro o kudasai', it: 'Un sacchetto, per favore' },
    { jp: '領収書をください', rom: 'Ryōshūsho o kudasai', it: 'La ricevuta, per favore' }
  ] },
  { titolo: 'Emergenze e salute', frasi: [
    { jp: '助けてください', rom: 'Tasukete kudasai', it: 'Aiuto!' },
    { jp: '警察を呼んでください', rom: 'Keisatsu o yonde kudasai', it: 'Chiamate la polizia, per favore' },
    { jp: '救急車を呼んでください', rom: 'Kyūkyūsha o yonde kudasai', it: 'Chiamate un\'ambulanza, per favore' },
    { jp: '病院に行きたいです', rom: 'Byōin ni ikitai desu', it: 'Vorrei andare in ospedale' },
    { jp: '薬局はどこですか', rom: 'Yakkyoku wa doko desu ka?', it: 'Dov\'è una farmacia?' },
    { jp: '気分が悪いです', rom: 'Kibun ga warui desu', it: 'Mi sento male' },
    { jp: '頭が痛いです', rom: 'Atama ga itai desu', it: 'Ho mal di testa' },
    { jp: 'お腹が痛いです', rom: 'Onaka ga itai desu', it: 'Ho mal di pancia' },
    { jp: 'パスポートをなくしました', rom: 'Pasupōto o nakushimashita', it: 'Ho perso il passaporto' },
    { jp: '財布をなくしました', rom: 'Saifu o nakushimashita', it: 'Ho perso il portafoglio' }
  ] }
];

const PARADA_TIPOS = {
  hotel: ['🏨', '#ece6f8', 'Hotel'],
  pasto: ['🍽️', '#ffe0d6', 'Pasto'],
  volo: ['✈️', '#d4f1ea', 'Volo'],
  trasferta: ['🚆', '#dbe9ff', 'Trasferta'],
  santuario: ['⛩️', '#ffd9e6', 'Santuario / torii'],
  tempio: ['🛕', '#fff0cc', 'Tempio'],
  castello: ['🏯', '#eadcc8', 'Castello'],
  parco: ['🌳', '#dcf3dc', 'Parco / natura'],
  shopping: ['🛍️', '#fff7c2', 'Shopping / mercato'],
  quartiere: ['🚶', '#e6f4ff', 'Quartiere / passeggiata'],
  altro: ['📍', '#eeeeee', 'Altro']
};

function tipoParada(p) {
  const re = k => new RegExp(PAROLE[k], 'i');
  const reglas = [
    ['hotel', re('hotel')],
    ['pasto', re('pasto')],
    ['volo', re('volo')],
    ['trasferta', re('trasferta')],
    ['santuario', re('santuario')],
    ['tempio', re('tempio')],
    ['castello', re('castello')],
    ['parco', re('parco')],
    ['shopping', re('shopping')],
    ['quartiere', re('quartiere')]
  ];
  const r = reglas.find(([, re]) => re.test(p));
  return r ? r[0] : 'altro';
}

let PASTI = [];
let RUTAS = [];
let HOTEL = [];
let VOLI = [];
let CHECK = [];
let NOTE_CITTA = [];
let CITTA_DIA = [];
let COLORI_CITTA = {};
let LUOGHI_METEO = {};
let METEO_MEDIA = {};
let ICONO_TIPICO = {};
let SECCIONES_CHECK = [];
let FECHAS = [];
let NOTA_ETIQUETA = {};
let EMERGENZE = [];
let PAROLE = {};
let COUNTDOWN = { partenza: '', rientro: '' };
let CAL = { anno: 0, mese: 0, giorni: 31 };
let PERSONALE = { passeggeri: '', preventivo: '' };

function DATA_PASTI() {
  return DATA.dias.flatMap((d, i) =>
    d.items.map((it, j) => ({ ...it, dia: i, key: i + '-' + j }))
      .filter(it => /^(Colazione|Pranzo|Cena)/i.test(it.titulo)));
}

function nuevoEstado() {
  return {
    dia: 0, visto: {}, notas: {}, pendientes: {}, restaurantes: [], marcados: {}, extras: [],
    tasso: '0.0056', tassoFecha: '', hoteles: {}, secCheck: 'tutte', pasti: {},
    vestSub: 'giorni', diaOutfit: {}, outfits: [], pastiRest: {}, checkEdit: {}, checkDel: {}, impOverride: {}, diaV: 2,
    vueloEmitido: {}, vueloCodigo: {},
    ropa: ROPA_BASE.map((x, i) => ({ id: 'r' + i, nome: x[0], cat: x[1] }))
  };
}

let DATA = null;
let S = cargar();
let vista = 'dias';

function migrar(s) {
  if (s.diaV === 2) return s;
  const desplazar = o => Object.fromEntries(Object.entries(o || {}).map(([k, v]) => {
    const [dia, ...resto] = k.split('-');
    return [[String(Number(dia) + 1), ...resto].join('-'), v];
  }));
  s.dia = (s.dia || 0) + 1;
  ['visto', 'pasti', 'pastiRest', 'impOverride', 'notas', 'pendientes', 'diaOutfit'].forEach(c => { s[c] = desplazar(s[c]); });
  s.diaV = 2;
  return s;
}

function cargar() {
  try {
    const guardado = JSON.parse(localStorage.getItem(KEY)) || {};
    const s = Object.assign(nuevoEstado(), Object.keys(guardado).length && !guardado.diaV ? migrar(guardado) : guardado);
    s.extras = (s.extras || []).map(x => typeof x === 'string' ? { id: 'e' + Date.now() + Math.random(), t: x, sec: 'comune' } : x);
    s.restaurantes = (s.restaurantes || []).map((r, i) => r.id ? r : { ...r, id: 'R' + Date.now() + i });
    Object.keys(s.pastiRest).forEach(k => {
      if (!Array.isArray(s.pastiRest[k])) s.pastiRest[k] = s.pastiRest[k] ? [s.pastiRest[k]] : [];
    });
    return s;
  }
  catch (e) { return nuevoEstado(); }
}

const TIPOS = {
  pasto: ['🍽️', 'Pasto'], visita: ['🏛️', 'Visita'], paseo: ['🚶', 'Passeggiata'],
  transporte: ['🚆', 'Trasferimento'], hotel: ['🏨', 'Hotel'], altro: ['📌', 'Attività']
};

function tipoAct(it) {
  const P = k => new RegExp(PAROLE[k], 'i');
  let tipo = 'altro';
  if (P('actPasto').test(it.titulo)) tipo = 'pasto';
  else if (P('actPaseo').test(it.titulo)) tipo = 'paseo';
  else if (P('actHotel').test(it.titulo)) tipo = 'hotel';
  else if (P('actVisita').test(it.titulo)) tipo = 'visita';
  else if (P('actTrasporto').test(it.titulo)) tipo = 'transporte';
  return { icon: TIPOS[tipo][0], label: TIPOS[tipo][1], tipo, imp: /jrp|japan rail|scadenz|occhio/i.test(it.titulo) };
}
let guardarTimer = null;
let syncListo = false;
function guardar() {
  localStorage.setItem(KEY, JSON.stringify(S));
  clearTimeout(guardarTimer);
  guardarTimer = setTimeout(() => { if (window.SYNC && syncListo) window.SYNC.guardarEstado(S); }, 600);
}

function aplicarContenido(c) {
  DATA = { dias: c.dias };
  RUTAS = c.rutas;
  HOTEL = c.hoteles;
  VOLI = c.voli;
  CHECK = c.check;
  NOTE_CITTA = c.noteCitta;
  CITTA_DIA = c.citta;
  COLORI_CITTA = c.coloriCitta;
  LUOGHI_METEO = c.luoghiMeteo;
  METEO_MEDIA = c.meteoMedia;
  ICONO_TIPICO = c.iconoTipico;
  FECHAS = c.fechas;
  NOTA_ETIQUETA = c.notaEtichette;
  EMERGENZE = c.emergenze;
  PAROLE = c.parole;
  COUNTDOWN = c.countdown;
  CAL = c.calendarioMese;
  PERSONALE = c.personale;
  SECCIONES_CHECK = CHECK.map((s, i) => ({ id: 'c' + i, titulo: s.titulo, base: s.items.map((t, j) => ({ k: 'c-' + i + '-' + j, t })) }))
    .concat((c.checkExtra || []).map(x => ({ id: x.id, titulo: x.titolo, base: [] })));
  PASTI = DATA_PASTI();
  localStorage.setItem('japon-contenido', JSON.stringify(c));
}

function cargarContenidoLocal() {
  const c = localStorage.getItem('japon-contenido');
  if (c) aplicarContenido(JSON.parse(c));
  return !!DATA;
}

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const tituloDia = t => t.replace(/^\d+º?-\s*/, '');
const sentenza = s => s.replace(/\p{Lu}{2,}/gu, w => w[0] + w.slice(1).toLowerCase()).replace(/\sE\s/g, ' e ');
function partesTitolo(t) {
  const p = tituloDia(t).split(/\s*[–—]\s*|\s+-\s+/);
  return { fecha: p[0], sub: sentenza(p.slice(1).join(' · ')) };
}

let METEO = {};

async function cargarMeteo() {
  await Promise.all(Object.entries(LUOGHI_METEO).map(async ([c, [lat, lon]]) => {
    try {
      const r = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FTokyo`);
      const j = await r.json();
      METEO[c] = j.daily.time.map((f, i) => ({
        f, max: j.daily.temperature_2m_max[i], min: j.daily.temperature_2m_min[i],
        pioggia: j.daily.precipitation_probability_max[i], codice: j.daily.weather_code[i]
      }));
    } catch (e) {}
  }));
  if (vista === 'dias' || vista === 'vestiti') render(false);
}

function iconoMeteo(codice) {
  if (codice === 0) return '☀️ sereno';
  if (codice <= 2) return '🌤️ poco nuvoloso';
  if (codice === 3) return '☁️ nuvoloso';
  if (codice <= 48) return '🌫️ nebbia';
  if (codice <= 67 || (codice >= 80 && codice <= 82)) return '🌧️ pioggia';
  if (codice <= 77 || (codice >= 85 && codice <= 86)) return '❄️ neve';
  return '⛈️ temporale';
}

function meteoDia(i) {
  const c = CITTA_DIA[i];
  if (c === 'Viaggio') return '✈️ Giorno di viaggio: il meteo conta per il giorno d\'arrivo (vedi il giorno seguente)';
  const p = (METEO[c] || []).find(x => x.f === FECHAS[i]);
  if (p) return `${iconoMeteo(p.codice)} · ${c}: ${Math.round(p.min)}° / ${Math.round(p.max)}° · pioggia ${p.pioggia ?? '—'}%`;
  return `${ICONO_TIPICO[c]} ${c}: di solito in questo periodo ${METEO_MEDIA[c]} (la previsione compare circa 16 giorni prima)`;
}

let dbP;
function db() {
  if (!dbP) dbP = new Promise((res, rej) => {
    const r = indexedDB.open('japon-docs', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('f', { keyPath: 'id' });
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
  return dbP;
}
async function docsDelDia(dia) {
  const d = await db();
  return new Promise(res => {
    const q = d.transaction('f').objectStore('f').getAll();
    q.onsuccess = () => res(q.result.filter(x => x.dia === dia));
  });
}
async function docsTodos() {
  const d = await db();
  return new Promise(res => {
    const q = d.transaction('f').objectStore('f').getAll();
    q.onsuccess = () => res(q.result);
  });
}
function aDataUrl(blob) {
  return new Promise(res => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.readAsDataURL(blob);
  });
}
async function docsRestaurar(lista) {
  const d = await db();
  for (const x of lista) {
    const blob = await (await fetch(x.data)).blob();
    d.transaction('f', 'readwrite').objectStore('f').put({ id: x.id, dia: x.dia, nome: x.nome, tipo: x.tipo, blob });
  }
}
async function docsAdd(dia, file) {
  const d = await db();
  d.transaction('f', 'readwrite').objectStore('f').put({ id: 'd' + Date.now() + Math.random().toString(36).slice(2), dia, nome: file.name, tipo: file.type, blob: file });
}
async function docsDel(id) {
  const d = await db();
  d.transaction('f', 'readwrite').objectStore('f').delete(id);
}
async function pintarLista(id, dia) {
  const el = document.getElementById(id);
  if (!el) return;
  const lista = await docsDelDia(dia);
  el.innerHTML = lista.map(x => {
    const url = URL.createObjectURL(x.blob);
    const vista = x.tipo.startsWith('image/')
      ? `<a href="${url}" target="_blank" rel="noopener"><img src="${url}" alt="" style="width:100%;border-radius:8px"></a>`
      : `<a class="btn" href="${url}" download="${esc(x.nome)}" target="_blank" rel="noopener">📄 ${esc(x.nome)}</a>`;
    return `<div class="doc">${vista}<button class="x" data-deldoc="${x.id}">✕</button></div>`;
  }).join('') || '<p class="sub">Nessun documento</p>';
}
function pintarDocs() {
  pintarLista('docs', S.dia);
  pintarLista('docs-gen', 'gen');
  VOLI.forEach(v => pintarLista('docs-vuelo-' + v.id, 'vuelo:' + v.id));
}
const mapsUrl = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
const main = document.getElementById('main');

function actualizarTasso() {
  fetch('https://api.frankfurter.app/latest?from=JPY&to=EUR')
    .then(r => r.json())
    .then(j => {
      S.tasso = String(j.rates.EUR);
      S.tassoFecha = j.date;
      guardar();
      if (vista === 'utili') render();
    })
    .catch(() => {});
}

const MESI = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
const MESI_B = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];

function cuentaHTML() {
  if (!COUNTDOWN.partenza) return '';
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const aFecha = s => { const [y, m, d] = String(s).split('-').map(Number); return new Date(y, m - 1, d); };
  const ida = aFecha(COUNTDOWN.partenza);
  const vuelta = aFecha(COUNTDOWN.rientro);
  const dias = d => Math.round((d - hoy) / 86400000);
  if (hoy < ida) return `✈️ Partenza tra <b>${dias(ida)}</b> giorni`;
  if (hoy.getTime() === ida.getTime()) return '✈️ Oggi si parte!';
  if (hoy < vuelta) return `🏠 Rientro tra <b>${dias(vuelta)}</b> giorni`;
  if (hoy.getTime() === vuelta.getTime()) return '🏠 Oggi si torna a casa';
  return '🎌 Viaggio concluso, grazie per il viaggio!';
}

function render(reset) {
  document.getElementById('cuenta').innerHTML = cuentaHTML();
  if (!DATA) {
    document.querySelectorAll('nav button').forEach(b => b.classList.toggle('act', false));
    main.innerHTML = ACCESO_NEGADO
      ? `<div class="seccion" style="text-align:center;margin-top:40px">
        <h2>⛔ Accesso negato</h2>
        <p class="dato">Questo account Google non è autorizzato a vedere il viaggio.</p>
        <button class="boton secundario" data-accion="salir">Esci</button></div>`
      : USUARIO
      ? `<div class="seccion" style="text-align:center;margin-top:40px">
        <h2>🔐 Contenuto del viaggio</h2>
        <p class="dato">Hai effettuato l'accesso, ma il contenuto del viaggio non è ancora stato caricato. Caricalo una sola volta (chiedi il file a chi lo conserva).</p>
        <label class="boton subir" style="display:inline-block">＋ Carica contenuto del viaggio
          <input type="file" accept="application/json" data-accion="contenido" hidden></label>
        <p><button class="boton secundario" data-accion="salir">Esci</button></p></div>`
      : `<div class="seccion" style="text-align:center;margin-top:40px">
        <h2>🔐 Accesso</h2>
        <p class="dato">Accedi con il tuo account Google per vedere e sincronizzare il viaggio.</p>
        <button class="boton" data-accion="entrar">Accedi con Google</button>
        <p class="dato" id="estado-sync"></p></div>`;
    return;
  }
  const y = window.scrollY;
  const abiertos = [...document.querySelectorAll('details')].map(d => d.open);
  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('act', b.dataset.v === vista));
  const v = { dias, calendario, lugares, vestiti, checklist, voli, documenti, utili }[vista];
  main.innerHTML = v();
  pintarDocs();
  if (!reset) {
    document.querySelectorAll('details').forEach((d, i) => { if (i < abiertos.length) d.open = abiertos[i]; });
    window.scrollTo(0, y);
  } else {
    window.scrollTo(0, 0);
  }
}

function dias() {
  const d = DATA.dias[S.dia];
  const chips = DATA.dias.map((x, i) => `<button class="chip ${i === S.dia ? 'on' : ''}" data-dia="${i}">${i + 1}</button>`).join('');
  const ruta = RUTAS[S.dia];
  const paradas = ruta.map((p, i) => {
    const [icono, color] = PARADA_TIPOS[tipoParada(p)];
    return `<a class="parada" style="background:${color}" href="${esc(mapsUrl(p + ' Giappone'))}" target="_blank" rel="noopener">${icono} ${esc(p)}</a>${i < ruta.length - 1 ? '<span class="flecha">→</span>' : ''}`;
  }).join('');
  const notasDia = d.notas.filter(n => !n.startsWith('Cena: ')).map(n => NOTA_ETIQUETA[n] || n);
  const items = d.items.map((it, i) => {
    const k = S.dia + '-' + i;
    const tp = tipoAct(it);
    const imp = k in S.impOverride ? S.impOverride[k] : tp.imp;
    return `<div class="card ${S.visto[k] ? 'hecho' : ''} ${imp ? 'importante' : ''}">
      <span class="badge ${imp ? 'badge-imp' : ''}">${tp.icon} ${tp.label}</span>
      ${tp.tipo === 'pasto' && (S.pastiRest[k] || []).length ? `<div class="conectados">${(S.pastiRest[k] || []).map(id => {
        const j = S.restaurantes.findIndex((r, x) => rid(r, x) === id);
        return j < 0 ? '' : `<button class="btn" data-goto="${esc(id)}">🍽️ ${esc(S.restaurantes[j].nombre)}</button>`;
      }).join('')}</div>` : ''}
      <label class="row"><input type="checkbox" data-visto="${k}" ${S.visto[k] ? 'checked' : ''}>
        <span><b>${esc(it.hora)}</b> ${esc(it.titulo)}</span></label>
      ${it.horario ? `<div class="meta">🕒 ${esc(it.horario)}</div>` : ''}
      ${it.descripcion ? `<p>${esc(it.descripcion)}</p>` : ''}
      ${it.detalle ? `<p class="det">${esc(it.detalle)}</p>` : ''}
      ${it.extra ? `<p class="det">${esc(it.extra)}</p>` : ''}
      ${it.precio ? `<div class="precio">💴 ${esc(it.precio)}</div>` : ''}
      ${it.enlaces.map((u, j) => `<a class="btn" href="${esc(u)}" target="_blank" rel="noopener">📍 Mappa${it.enlaces.length > 1 ? ' ' + (j + 1) : ''}</a>`).join('')}
      <button class="btn btn-mini" data-imp="${k}">${imp ? '★ Rimuovi importante' : '☆ Segna importante'}</button>
    </div>`;
  }).join('');
  const pend = (S.pendientes[S.dia] || []).map((p, i) => `
    <li><label><input type="checkbox" data-pend="${i}" ${p.h ? 'checked' : ''}>
      <span class="${p.h ? 'hecho-txt' : ''}">${esc(p.t)}</span></label>
      <button class="x" data-delpend="${i}">✕</button></li>`).join('');
  return `
    <div class="chips">${chips}</div>
    <div class="dia-cab" style="border-left-color:${COLORI_CITTA[CITTA_DIA[S.dia]]}">
      <div class="dia-num">${FECHAS[S.dia].slice(8)}</div>
      <div class="dia-info">
        <div class="dia-sem">${esc(partesTitolo(d.titulo).fecha)}</div>
        <div class="dia-tit">${esc(partesTitolo(d.titulo).sub)}</div>
        <div class="dia-ciudad">📍 ${esc(CITTA_DIA[S.dia])}</div>
      </div>
    </div>
    <p class="meteo">${meteoDia(S.dia)}</p>
    <div class="ruta">
      <h3>🗺️ Percorso del giorno</h3>
      <div class="paradas">${paradas}</div>
      <p><a class="btn" href="${esc('https://www.google.com/maps/dir/' + ruta.map(encodeURIComponent).join('/'))}" target="_blank" rel="noopener">Apri il percorso in Google Maps</a></p>
    </div>
    ${notasDia.length ? `<div class="nota-info">${notasDia.map(n => /OCCHIO|SCADENZA/i.test(n) ? `<span class="aviso-imp">⚠️ ${esc(n)}</span>` : esc(n)).join('<br>')}</div>` : ''}
    <details class="dettagli">
      <summary><span>🗒️ Dettagli attività</span><span class="cuenta-det">${d.items.length}</span></summary>
      ${items}
    </details>
    <div class="seccion">
      <h3>📝 Le mie note del giorno</h3>
      <textarea data-nota="${S.dia}" placeholder="Scrivi qui...">${esc(S.notas[S.dia] || '')}</textarea>
    </div>
    <div class="seccion">
      <h3>📎 Documenti del giorno</h3>
      <p class="dato">Foto o PDF di prenotazioni, biglietti, ricevute. Restano salvati solo in questo telefono.</p>
      <div id="docs"></div>
      <label class="boton subir">＋ Aggiungi foto, PDF o Excel
        <input type="file" accept="image/*,application/pdf,.xlsx,.xls,.csv,.doc,.docx" multiple data-docs="dia" hidden></label>
    </div>
    <div class="seccion">
      <h3>⚠️ Cose da verificare</h3>
      <form class="nuevo lineal" data-form="pend">
        <input type="text" name="t" placeholder="Es. confermare orario del tour" required>
        <button class="boton">Aggiungi</button>
      </form>
      <ul class="lst">${pend || '<li class="sub">Niente da verificare</li>'}</ul>
    </div>`;
}

function DIA_CORTO(i) {
  const t = DATA.dias[i] && DATA.dias[i].titulo;
  return `${FECHAS[i].slice(8)} ${MESI_B[CAL.mese]} · ${t ? partesTitolo(t).sub : ''}`;
}

function lugares() {
  const opciones = DATA.dias.map((d, i) => `<option value="${i}">${esc(DIA_CORTO(i))}</option>`).join('');
  const lista = S.restaurantes.map((r, i) => {
    const mapa = r.mapa || mapsUrl(r.nombre + ' ' + r.zona);
    const usos = PASTI.filter(p => (S.pastiRest[p.key] || []).includes(rid(r, i)))
      .map(p => `${DIA_CORTO(p.dia)} · ${p.titulo.split(' ')[0]}`).join(', ');
    return `<li id="rest-${esc(rid(r, i))}" class="rest-item">
      <div><b>${esc(r.nombre)}</b> ${r.dia !== '' ? `<span class="sub">· ${esc(DIA_CORTO(Number(r.dia)))}</span>` : ''}
        <div class="sub">${esc(r.zona)} ${r.nota ? '· ' + esc(r.nota) : ''}</div>
        ${usos ? `<div class="sub">🍽️ ${esc(usos)}</div>` : ''}
        <a class="btn" href="${esc(mapa)}" target="_blank" rel="noopener">📍 Mappa</a></div>
      <button class="x" data-delrest="${i}">✕</button></li>`;
  }).join('');
  const pasti = DATA.dias.map((d, i) => {
    const comidas = PASTI.filter(p => p.dia === i);
    if (!comidas.length) return '';
    return `<h3>${esc(DIA_CORTO(i))}</h3>` + comidas.map(p => `
      <div class="card">
        <b>${esc(p.hora)} ${esc(p.titulo)}</b>
        ${p.descripcion ? `<p>${esc(p.descripcion)}</p>` : ''}
        ${p.detalle ? `<p class="det">${esc(p.detalle)}</p>` : ''}
        ${p.enlaces.map((u, j) => `<a class="btn" href="${esc(u)}" target="_blank" rel="noopener">📍 Mappa${p.enlaces.length > 1 ? ' ' + (j + 1) : ''}</a>`).join('')}
        <details class="rest-pick">
          <summary>Ristoranti scelti (${(S.pastiRest[p.key] || []).filter(id => S.restaurantes.some((r, i) => rid(r, i) === id)).length})</summary>
          ${S.restaurantes.map((r, i) => `<label class="row">
            <input type="checkbox" data-pastorest="${p.key}" value="${esc(rid(r, i))}" ${(S.pastiRest[p.key] || []).includes(rid(r, i)) ? 'checked' : ''}>
            <span>${esc(r.nombre)}</span></label>`).join('') || '<p class="sub">Aggiungi prima un ristorante qui sopra</p>'}
        </details>
        <input type="text" data-pasto="${p.key}" value="${esc(S.pasti[p.key] || '')}" placeholder="Oppure scrivi il nome" style="margin-top:6px">
      </div>`).join('');
  }).join('');
  return `
    <h2>🍜 Ristoranti</h2>
    <h3>Ristoranti salvati</h3>
    <ul class="lst">${lista || '<li class="sub">Nessun ristorante ancora</li>'}</ul>
    <h3>Aggiungi ristorante</h3>
    <form class="nuevo" data-form="rest">
      <input type="text" name="nombre" placeholder="Nome del ristorante" required>
      <input type="text" name="zona" placeholder="Zona (es. quartiere, città)">
      <select name="dia"><option value="">Nessun giorno</option>${opciones}</select>
      <input type="text" name="nota" placeholder="Nota (es. prenotare, cosa ordinare)">
      <input type="text" name="mapa" placeholder="Link Google Maps (facoltativo)">
      <button class="boton">Aggiungi</button>
    </form>
    <h2>🍽️ Pasti del viaggio</h2>
    <p class="dato">Collega a ogni pasto un ristorante della lista, oppure scrivi il nome.</p>
    ${pasti}`;
}

function rid(r, i) { return r.id || 'i' + i; }

function textoCheck(k) {
  const base = SECCIONES_CHECK.flatMap(s => s.base).find(b => b.k === k);
  return S.checkEdit[k] ?? (base ? base.t : '');
}

function nombrePrendas(ids) {
  return ids.map(id => (S.ropa.find(p => p.id === id) || { nome: '(eliminato)' }).nome).join(' + ');
}

function vestiti() {
  const pills = [['giorni', 'Giorni'], ['outfit', 'Outfit'], ['armadio', 'Armadio']]
    .map(([k, t]) => `<button class="pill ${S.vestSub === k ? 'on' : ''}" data-vsub="${k}">${t}</button>`).join('');
  const cuerpo = { giorni: vestGiorni, outfit: vestOutfit, armadio: vestArmadio }[S.vestSub]();
  return `<h2>👕 Vestiti</h2><div class="pills">${pills}</div>${cuerpo}`;
}

function vestGiorni() {
  const tarjetas = DATA.dias.map((d, i) => {
    const o = S.outfits.find(x => x.id === S.diaOutfit[i]);
    const opts = `<option value="">— nessun outfit</option>` + S.outfits.map(x =>
      `<option value="${x.id}" ${o && o.id === x.id ? 'selected' : ''}>${esc(x.nome)}</option>`).join('');
    return `<div class="card">
      <b>${esc(partesTitolo(d.titulo).fecha)}</b>
      <p class="meteo">${meteoDia(i)}</p>
      <select data-diaout="${i}" style="margin-top:6px">${opts}</select>
      ${o ? `<p class="resumen">${esc(nombrePrendas(o.ids))}</p>` : ''}
    </div>`;
  }).join('');
  const aviso = S.outfits.length ? '' : '<p class="dato">Crea prima un outfit nella scheda Outfit.</p>';
  return `<div class="nota-info">${NOTE_CITTA.map(esc).join('<br>')}</div>${aviso}${tarjetas}`;
}

function vestOutfit() {
  const lista = S.outfits.map(o => `<li><div><b>${esc(o.nome)}</b>
      <div class="sub">${esc(nombrePrendas(o.ids))}</div></div>
      <button class="x" data-delout="${o.id}">✕</button></li>`).join('');
  const checks = CATS.map(c => {
    const prendas = S.ropa.filter(p => p.cat === c);
    if (!prendas.length) return '';
    return `<h3>${c}</h3>` + prendas.map(p => `<label class="row">
      <input type="checkbox" name="ids" value="${p.id}"> <span>${esc(p.nome)}</span></label>`).join('');
  }).join('');
  return `
    <h3>Crea un outfit</h3>
    <form class="nuevo" data-form="outfit">
      <input type="text" name="nome" placeholder="Es. giornata fredda" required>
      ${checks}
      <button class="boton">Salva outfit</button>
    </form>
    <h3>I tuoi outfit</h3>
    <ul class="lst">${lista || '<li class="sub">Nessun outfit</li>'}</ul>`;
}

function vestArmadio() {
  const secciones = CATS.map(c => {
    const prendas = S.ropa.filter(p => p.cat === c);
    if (!prendas.length) return '';
    return `<h3>${c}</h3><ul class="lst">${prendas.map(p => `<li><span>${esc(p.nome)}</span>
      <button class="x" data-delropa="${p.id}">✕</button></li>`).join('')}</ul>`;
  }).join('');
  return `
    ${secciones}
    <div class="seccion"><h3>➕ Aggiungi all'armadio</h3>
      <form class="nuevo" data-form="ropa">
        <input type="text" name="nome" placeholder="Es. Jeans" required>
        <select name="cat">${CATS.map(c => `<option>${c}</option>`).join('')}</select>
        <button class="boton">Aggiungi</button>
      </form>
    </div>`;
}

function checklist() {
  const pills = [{ id: 'tutte', titulo: 'Tutte' }].concat(SECCIONES_CHECK)
    .map(o => `<button class="pill ${S.secCheck === o.id ? 'on' : ''}" data-seccheck="${o.id}">${esc(o.titulo)}</button>`).join('');
  const bloques = SECCIONES_CHECK.filter(s => S.secCheck === 'tutte' || S.secCheck === s.id).map(s => {
    const items = s.base.filter(b => !S.checkDel[b.k]).map(b => ({ k: b.k, t: textoCheck(b.k) }))
      .concat(S.extras.filter(x => x.sec === s.id).map(x => ({ k: 'x-' + x.id, t: x.t })));
    return `<div class="seccion"><h3>${esc(s.titulo)}</h3>
      <ul class="lst">${items.map(it => `<li><label><input type="checkbox" data-marca="${it.k}" ${S.marcados[it.k] ? 'checked' : ''}>
        <span class="${S.marcados[it.k] ? 'hecho-txt' : ''}">${esc(it.t)}</span></label>
        <button class="x" data-edit="${it.k}">✎</button><button class="x" data-del="${it.k}">✕</button></li>`).join('') || '<li class="sub">Vuoto</li>'}</ul>
    </div>`;
  }).join('');
  const destino = SECCIONES_CHECK.find(s => s.id === S.secCheck) ? S.secCheck : 'comune';
  return `
    <h2>✅ Checklist</h2>
    <div class="pills">${pills}</div>
    ${bloques}
    <div class="seccion"><h3>➕ Aggiungi</h3>
      <form class="nuevo" data-form="extra">
        <input type="text" name="t" placeholder="Cosa aggiungere" required>
        <select name="sec">${SECCIONES_CHECK.map(s => `<option value="${s.id}" ${s.id === destino ? 'selected' : ''}>${esc(s.titulo)}</option>`).join('')}</select>
        <button class="boton">Aggiungi</button>
      </form>
    </div>
    <p><button class="boton secundario" data-accion="ripristina">Ripristina le voci originali</button></p>`;
}

function frasi() {
  return `
    <h2>🗣️ Frasi utili</h2>
    <div class="seccion"><h3>🌐 Traduci in giapponese</h3>
      <p class="dato">Scrivi quello che vuoi dire: si apre Google Traduttore con il testo già inserito (serve connessione).</p>
      <form class="nuevo" data-form="trad">
        <textarea name="t" placeholder="Es. Vorrei un tavolo per due, senza piccante" required></textarea>
        <button class="boton">Traduci</button>
      </form>
    </div>
    <input type="text" data-filtro placeholder="Cerca una frase (es. grazie, bagno)" style="margin:8px 0">
    ${FRASI_GRUPOS.map(g => `<h3>${esc(g.titolo)}</h3>` + g.frasi.map(f => `
      <div class="frase" data-testo="${esc((f.rom + ' ' + f.it + ' ' + g.titolo).toLowerCase())}"><div class="jp">${f.jp}</div>
        <div class="rom">${esc(f.rom)}</div><div class="it">${esc(f.it)}</div></div>`).join('')).join('')}`;
}

function calendario() {
  const iniciales = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  const offset = (new Date(CAL.anno, CAL.mese, 1).getDay() + 6) % 7;
  const pref = CAL.anno + '-' + String(CAL.mese + 1).padStart(2, '0') + '-';
  let celdas = '<div></div>'.repeat(offset);
  for (let d = 1; d <= CAL.giorni; d++) {
    const i = FECHAS.indexOf(pref + String(d).padStart(2, '0'));

    if (i >= 0) {
      const c = CITTA_DIA[i];
      celdas += `<button class="cal-dia" style="background:${COLORI_CITTA[c]}" data-calgo="${i}"><b>${d}</b><small>${c}</small></button>`;
    } else {
      celdas += `<div class="cal-vacio">${d}</div>`;
    }
  }
  return `
    <h2>🗓️ Calendario</h2>
    <p class="dato">${MESI[CAL.mese][0].toUpperCase() + MESI[CAL.mese].slice(1)} ${CAL.anno} · tocca un giorno per aprirne il programma</p>
    <div class="cal-grid">${iniciales.map(x => `<div class="cal-h">${x}</div>`).join('')}${celdas}</div>
    <div class="pills">${Object.entries(COLORI_CITTA).map(([c, col]) => `<span class="leyenda" style="background:${col};color:#fff">${c}</span>`).join('')}</div>
    <h3>Agenda</h3>
    ${DATA.dias.map((d, i) => `<div class="card">
      <b>${FECHAS[i].slice(8)} ${MESI_B[CAL.mese]} · ${CITTA_DIA[i]}</b> <span class="sub">${d.items.length} attività</span>
      <p class="det">${esc(d.items.slice(0, 3).map(it => (it.hora ? it.hora + ' ' : '') + it.titulo).join(' · '))}</p>
    </div>`).join('')}`;
}

function voli() {
  const tarjetas = VOLI.map(v => `<div class="card">
      <div class="vuelo-cab"><b>${esc(v.id)}</b> <span class="sub">${esc(v.fecha)}</span></div>
      <p><b>${esc(v.ruta)}</b></p>
      <p class="det">Partenza ${esc(v.salida)} · Arrivo ${esc(v.llegada)} (ora locale)</p>
      <label class="row"><input type="checkbox" data-vemit="${v.id}" ${S.vueloEmitido[v.id] ? 'checked' : ''}>
        <span>Biglietto emesso</span></label>
      <input type="text" data-vcod="${v.id}" value="${esc(S.vueloCodigo[v.id] || '')}" placeholder="Codice prenotazione" style="margin-top:8px">
      <div class="seccion" style="margin-top:8px">
        <h3>📎 Documenti del volo</h3>
        <div id="docs-vuelo-${v.id}"></div>
        <label class="boton subir">＋ Aggiungi foto, PDF o Excel
          <input type="file" accept="image/*,application/pdf,.xlsx,.xls,.csv,.doc,.docx" multiple data-docs="vuelo:${v.id}" hidden></label>
      </div>
    </div>`).join('');
  return `
    <h2>✈️ Voli</h2>
    <div class="nota-info">
      <span class="aviso-imp">⚠️ I voli sono bloccati nel ${esc(PERSONALE.preventivo)}: la tariffa va emessa lo stesso giorno del blocco.</span><br>
      ${esc(PERSONALE.passeggeri)}
    </div>
    ${tarjetas}`;
}

function documenti() {
  return `
    <h2>📎 Documenti del viaggio</h2>
    <p class="dato">Documenti generali (assicurazione, passaporti, Excel, liste…). Restano salvati solo in questo telefono.</p>
    <div id="docs-gen"></div>
    <label class="boton subir">＋ Aggiungi foto, PDF o Excel
      <input type="file" accept="image/*,application/pdf,.xlsx,.xls,.csv,.doc,.docx" multiple data-docs="gen" hidden></label>`;
}

function utili() {
  const hoteles = HOTEL.map(([h, dir]) => {
    const texto = S.hoteles[h] ?? dir;
    return `<div class="card"><b>${esc(h)}</b>
      <textarea data-hotel="${esc(h)}" placeholder="Indirizzo in giapponese">${esc(texto)}</textarea>
      <a class="btn" href="${esc(mapsUrl(h + ' ' + texto.split('\n')[0]))}" target="_blank" rel="noopener">📍 Google Maps</a></div>`;
  }).join('');
  return `
    <h2>🧰 Utili</h2>
    <div class="seccion"><h3>¥ Convertitore yen → euro</h3>
      <p class="dato">Cambio di riferimento BCE del ${esc(S.tassoFecha || '—')}, aggiornato ogni volta che apri la app con connessione. Il cambio in banca o allo sportello può essere diverso.</p>
      <input type="text" inputmode="decimal" data-tasso value="${esc(S.tasso)}">
      <input type="text" inputmode="decimal" data-yen placeholder="Importo in yen" style="margin-top:8px">
      <p><b id="eur">—</b></p>
    </div>
    <div class="seccion"><h3>🏨 Hotel</h3>
      <p class="dato">Copia l'indirizzo in giapponese da Google Maps e mostralo al taxista.</p>
      ${hoteles}
    </div>
    ${frasi()}
    <div class="seccion"><h3>🎨 Legenda percorsi</h3>
      <p class="dato">Colori e icone delle tappe nel percorso di ogni giorno.</p>
      <div class="paradas">${Object.values(PARADA_TIPOS).map(([icono, color, nombre]) => `<span class="parada" style="background:${color}">${icono} ${nombre}</span>`).join('')}</div>
    </div>
    <div class="seccion"><h3>🚨 Emergenze</h3>
      <ul class="lst">${EMERGENZE.map(([n, t]) => `<li><span>${esc(n)}</span><b>${esc(t)}</b></li>`).join('')}</ul>
    </div>
    <div class="seccion"><h3>🔐 Account e sincronizzazione</h3>
      <p class="dato">I dati del viaggio sono sincronizzati tra i telefoni tramite il tuo account Google.</p>
      <p><button class="boton" data-accion="salir">Esci</button></p>
      <p class="dato">Contenuto del viaggio (solo la prima volta, o quando cambia):</p>
      <label class="boton subir">＋ Carica contenuto del viaggio
        <input type="file" accept="application/json" data-accion="contenido" hidden></label>
    </div>
    <div class="seccion"><h3>💾 Backup</h3>
      <p class="dato">Le tue note, i check, i ristoranti e i documenti allegati sono salvati solo in questo telefono. Esporta ogni tanto una copia per non perderli (il file può diventare grande se hai molte foto).</p>
      <p><button class="boton" data-accion="exportar">Esporta dati</button></p>
      <p><label class="boton secundario" style="display:inline-block">Importa dati
        <input type="file" accept="application/json" data-accion="importar" hidden></label></p>
      <p><button class="boton secundario" data-accion="borrar">Cancella tutto</button></p>
    </div>`;
}

main.addEventListener('click', async e => {
  const cal = e.target.closest('[data-calgo]');
  if (cal) { S.dia = Number(cal.dataset.calgo); vista = 'dias'; guardar(); render(true); return; }
  const t = e.target;
  if (t.dataset.dia !== undefined) { S.dia = Number(t.dataset.dia); guardar(); render(true); return; }
  if (t.dataset.deldoc !== undefined) { await docsDel(t.dataset.deldoc); pintarDocs(); return; }
  if (t.dataset.goto !== undefined) {
    const id = t.dataset.goto;
    vista = 'lugares';
    render(true);
    const el = document.getElementById('rest-' + id);
    if (el) {
      el.scrollIntoView({ block: 'center' });
      el.classList.add('flash');
      setTimeout(() => el.classList.remove('flash'), 2000);
    }
    return;
  }
  if (t.dataset.vsub !== undefined) { S.vestSub = t.dataset.vsub; guardar(); render(); return; }
  if (t.dataset.seccheck !== undefined) { S.secCheck = t.dataset.seccheck; guardar(); render(); return; }
  if (t.dataset.delpend !== undefined) { S.pendientes[S.dia].splice(Number(t.dataset.delpend), 1); guardar(); render(); return; }
  if (t.dataset.delrest !== undefined) {
    const id = rid(S.restaurantes[Number(t.dataset.delrest)], Number(t.dataset.delrest));
    S.restaurantes.splice(Number(t.dataset.delrest), 1);
    Object.keys(S.pastiRest).forEach(k => { S.pastiRest[k] = S.pastiRest[k].filter(x => x !== id); });
    guardar(); render(); return;
  }
  if (t.dataset.imp !== undefined) {
    const k = t.dataset.imp;
    const [d, i] = k.split('-').map(Number);
    const actual = DATA.dias[d].items[i];
    const imp = k in S.impOverride ? S.impOverride[k] : tipoAct(actual).imp;
    S.impOverride[k] = !imp;
    guardar(); render(); return;
  }
  if (t.dataset.edit !== undefined) {
    const k = t.dataset.edit;
    const esExtra = k.startsWith('x-');
    const actual = esExtra ? S.extras.find(x => 'x-' + x.id === k).t : textoCheck(k);
    const nuevo = prompt('Modifica la voce', actual);
    if (nuevo && nuevo.trim()) {
      if (esExtra) S.extras.find(x => 'x-' + x.id === k).t = nuevo.trim();
      else S.checkEdit[k] = nuevo.trim();
      guardar(); render();
    }
    return;
  }
  if (t.dataset.del !== undefined) {
    const k = t.dataset.del;
    if (k.startsWith('x-')) S.extras = S.extras.filter(x => 'x-' + x.id !== k);
    else S.checkDel[k] = true;
    guardar(); render(); return;
  }
  if (t.dataset.accion === 'ripristina' && confirm('Ripristinare le voci originali della checklist? (le voci aggiunte da te restano)')) {
    S.checkEdit = {}; S.checkDel = {};
    guardar(); render(); return;
  }
  if (t.dataset.delout !== undefined) { S.outfits = S.outfits.filter(o => o.id !== t.dataset.delout); guardar(); render(); return; }
  if (t.dataset.delropa !== undefined) {
    const id = t.dataset.delropa;
    S.ropa = S.ropa.filter(p => p.id !== id);
    S.outfits.forEach(o => { o.ids = o.ids.filter(x => x !== id); });
    guardar(); render(); return;
  }
  if (t.dataset.accion === 'entrar') { window.SYNC && window.SYNC.entrar(); return; }
  if (t.dataset.accion === 'salir') { window.SYNC && window.SYNC.salir(); return; }
  if (t.dataset.accion === 'exportar') {
    const docs = await docsTodos();
    const adjuntos = await Promise.all(docs.map(async x => ({ id: x.id, dia: x.dia, nome: x.nome, tipo: x.tipo, data: await aDataUrl(x.blob) })));
    const blob = new Blob([JSON.stringify({ ...S, documenti: adjuntos }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'japon-backup.json';
    a.click();
  }
  if (t.dataset.accion === 'borrar' && confirm('Cancellare tutte le note e i check?')) {
    S = nuevoEstado();
    guardar(); render();
  }
});

main.addEventListener('change', async e => {
  const t = e.target;
  if (t.dataset.docs !== undefined) {
    const dia = t.dataset.docs === 'dia' ? S.dia : t.dataset.docs;
    for (const f of t.files) await docsAdd(dia, f);
    t.value = '';
    pintarDocs();
    return;
  }
  if (t.dataset.visto !== undefined) { S.visto[t.dataset.visto] = t.checked; }
  else if (t.dataset.pend !== undefined) { S.pendientes[S.dia][Number(t.dataset.pend)].h = t.checked; }
  else if (t.dataset.marca !== undefined) { S.marcados[t.dataset.marca] = t.checked; }
  else if (t.dataset.diaout !== undefined) { S.diaOutfit[t.dataset.diaout] = t.value; }
  else if (t.dataset.vemit !== undefined) { S.vueloEmitido[t.dataset.vemit] = t.checked; }
  else if (t.dataset.pastorest !== undefined) {
    const set = new Set(S.pastiRest[t.dataset.pastorest] || []);
    t.checked ? set.add(t.value) : set.delete(t.value);
    S.pastiRest[t.dataset.pastorest] = [...set];
  }
  else if (t.dataset.accion === 'contenido') {
    const f = t.files[0];
    if (!f) return;
    f.text().then(async txt => {
      const c = JSON.parse(txt);
      await window.SYNC.guardarContenido(c);
      aplicarContenido(c);
      render(true);
      alert('Contenuto del viaggio caricato');
    }).catch(() => alert('Il file non è valido'));
    return;
  }
  else if (t.dataset.accion === 'importar') {
    const f = t.files[0];
    if (!f) return;
    f.text().then(async txt => {
      const { documenti, ...importado } = JSON.parse(txt);
      S = Object.assign(nuevoEstado(), S, importado.diaV ? importado : migrar(importado));
      if (documenti) await docsRestaurar(documenti);
      guardar(); render(); alert('Dati importati');
    })
      .catch(() => alert('Il file non è valido'));
    return;
  } else return;
  guardar();
  render();
});

main.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset.nota !== undefined) { S.notas[t.dataset.nota] = t.value; guardar(); }
  else if (t.dataset.hotel !== undefined) { S.hoteles[t.dataset.hotel] = t.value; guardar(); }
  else if (t.dataset.pasto !== undefined) { S.pasti[t.dataset.pasto] = t.value; guardar(); }
  else if (t.dataset.vcod !== undefined) { S.vueloCodigo[t.dataset.vcod] = t.value; guardar(); }
  else if (t.dataset.tasso !== undefined) { S.tasso = t.value; guardar(); }
  else if (t.dataset.filtro !== undefined) {
    const q = t.value.toLowerCase();
    document.querySelectorAll('.frase').forEach(f => { f.style.display = f.dataset.testo.includes(q) ? '' : 'none'; });
  }
  else if (t.dataset.yen !== undefined) {
    const y = parseFloat(t.value.replace(',', '.'));
    const tasso = parseFloat(String(S.tasso).replace(',', '.'));
    document.getElementById('eur').textContent = isNaN(y) || isNaN(tasso) ? '—' : (y * tasso).toFixed(2) + ' €';
  }
});

main.addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const tipo = f.dataset.form;
  const d = Object.fromEntries(new FormData(f));
  if (tipo === 'trad') {
    window.open('https://translate.google.com/?sl=it&tl=ja&text=' + encodeURIComponent(d.t.trim()) + '&op=translate', '_blank', 'noopener');
    return;
  }
  if (tipo === 'pend') { (S.pendientes[S.dia] = S.pendientes[S.dia] || []).push({ t: d.t.trim(), h: false }); }
  if (tipo === 'rest') { S.restaurantes.push({ id: 'R' + Date.now(), nombre: d.nombre.trim(), zona: d.zona.trim(), dia: d.dia, nota: d.nota.trim(), mapa: d.mapa.trim() }); }
  if (tipo === 'extra') { S.extras.push({ id: 'e' + Date.now(), t: d.t.trim(), sec: d.sec }); }
  if (tipo === 'ropa') { S.ropa.push({ id: 'r' + Date.now(), nome: d.nome.trim(), cat: d.cat }); }
  if (tipo === 'outfit') {
    const ids = new FormData(f).getAll('ids');
    if (ids.length) S.outfits.push({ id: 'o' + Date.now(), nome: d.nome.trim(), ids });
  }
  guardar(); render();
});

document.querySelector('nav').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  vista = b.dataset.v;
  if (vista === 'utili') actualizarTasso();
  render(true);
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

let USUARIO = null;
let ACCESO_NEGADO = false;
let escuchando = false;
function iniciarSync() {
  if (!window.SYNC) return;
  if (!DATA) cargarContenidoLocal();
  window.SYNC.alCambiarUsuario(async (usuario) => {
    USUARIO = usuario;
    ACCESO_NEGADO = false;
    if (!usuario) { syncListo = false; render(true); return; }
    if (!DATA) {
      try {
        const c = await window.SYNC.leerContenido();
        if (c) aplicarContenido(c);
      } catch (e) {
        if (String((e && e.code) || e).includes('permission-denied')) { ACCESO_NEGADO = true; render(true); return; }
      }
      render(true);
    }
    if (!escuchando) {
      escuchando = true;
      window.SYNC.escucharEstado(remoto => {
        if (!remoto) {
          syncListo = true;
          window.SYNC.guardarEstado(S);
          render(true);
          return;
        }
        if (remoto.aggiornado === window.SYNC.ultimoEnviado()) { syncListo = true; return; }
        const { aggiornado, ...limpio } = remoto;
        S = Object.assign(nuevoEstado(), limpio);
        localStorage.setItem(KEY, JSON.stringify(S));
        syncListo = true;
        render(false);
      }, err => {
        if (String((err && err.code) || err).includes('permission-denied')) { ACCESO_NEGADO = true; render(true); }
      });
      actualizarTasso();
      cargarMeteo();
    }
  });
}

if (cargarContenidoLocal()) { actualizarTasso(); cargarMeteo(); }
render(true);
window.addEventListener('sync-listo', iniciarSync);
if (window.SYNC) iniciarSync();
setTimeout(() => {
  if (!window.SYNC) {
    const el = document.getElementById('estado-sync');
    if (el) el.textContent = 'Non riesco a caricare il sistema di accesso. Controlla la connessione e ricarica la pagina.';
  }
}, 6000);

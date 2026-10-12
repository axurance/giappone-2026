import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAi6So9CFFzHxKphxM0sRtyhnBNU_Gr-os',
  authDomain: 'giappone-77f51.firebaseapp.com',
  projectId: 'giappone-77f51',
  storageBucket: 'giappone-77f51.firebasestorage.app',
  messagingSenderId: '374424759941',
  appId: '1:374424759941:web:9c3a81bd06d24babcfc3ec'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const estadoRef = doc(db, 'viaggi', 'estado');
const contenidoRef = doc(db, 'viaggi', 'contenido');

let ultimo = null;

function aviso(texto) {
  const el = document.getElementById('estado-sync');
  if (el) el.textContent = texto;
  console.warn(texto);
}

const errori = {
  'auth/unauthorized-domain': 'Dominio non autorizzato: aggiungi axurance.github.io ai Domini autorizzati di Firebase.',
  'auth/operation-not-allowed': 'Il metodo di accesso Google non è attivo in Firebase.',
  'auth/popup-blocked': 'Il popup è stato bloccato dal browser. Riprovo con un altro metodo…',
  'auth/network-request-failed': 'Problema di connessione. Riprova.',
  'auth/internal-error': 'Errore interno di Firebase. Riprova tra poco.'
};

async function entrar() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    const codice = e && e.code;
    if (codice === 'auth/popup-closed-by-user' || codice === 'auth/cancelled-popup-request') return;
    if (codice === 'auth/popup-blocked' || codice === 'auth/operation-not-supported-in-this-environment') {
      return signInWithRedirect(auth, provider).catch(err => aviso(errori[err.code] || ('Errore accesso: ' + (err.code || err.message))));
    }
    aviso(errori[codice] || ('Errore accesso: ' + (codice || e.message)));
  }
}

getRedirectResult(auth).catch(e => aviso(errori[e.code] || ('Errore accesso: ' + (e.code || e.message))));

window.SYNC = {
  entrar,
  salir: () => signOut(auth),
  alCambiarUsuario: cb => onAuthStateChanged(auth, cb),
  leerContenido: async () => {
    const snap = await getDoc(contenidoRef);
    return snap.exists() ? JSON.parse(snap.data().json) : null;
  },
  guardarContenido: c => setDoc(contenidoRef, { json: JSON.stringify(c) }),
  escucharEstado: (cb, err) => onSnapshot(estadoRef, snap => cb(snap.exists() ? snap.data() : null), err),
  guardarEstado: estado => {
    ultimo = Date.now();
    const { documenti, ...limpio } = estado;
    return setDoc(estadoRef, { ...limpio, aggiornado: ultimo });
  },
  ultimoEnviado: () => ultimo
};

window.dispatchEvent(new Event('sync-listo'));

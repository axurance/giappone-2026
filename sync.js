import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
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

window.SYNC = {
  entrar: () => signInWithRedirect(auth, new GoogleAuthProvider()),
  salir: () => signOut(auth),
  alCambiarUsuario: cb => onAuthStateChanged(auth, cb),
  leerContenido: async () => {
    const snap = await getDoc(contenidoRef);
    return snap.exists() ? JSON.parse(snap.data().json) : null;
  },
  guardarContenido: c => setDoc(contenidoRef, { json: JSON.stringify(c) }),
  escucharEstado: cb => onSnapshot(estadoRef, snap => cb(snap.exists() ? snap.data() : null)),
  guardarEstado: estado => {
    ultimo = Date.now();
    const { documenti, ...limpio } = estado;
    return setDoc(estadoRef, { ...limpio, aggiornado: ultimo });
  },
  ultimoEnviado: () => ultimo
};

window.dispatchEvent(new Event('sync-listo'));

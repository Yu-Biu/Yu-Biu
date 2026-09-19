import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js';
import { getFirestore, doc, onSnapshot, setDoc, writeBatch, serverTimestamp } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js';

const config = window.UNA_FIREBASE_CONFIG;
const siteId = window.UNA_FIREBASE_SITE_ID || 'una-yaha';
const configured = Boolean(config?.apiKey && config?.projectId && config?.appId);

const emit = (name, detail = {}) => window.dispatchEvent(new CustomEvent(name, {detail}));
const copy = value => JSON.parse(JSON.stringify(value));
const errorMessage = error => {
  const messages = {
    'auth/invalid-credential': 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
    'auth/email-already-in-use': 'อีเมลนี้มีบัญชี Creator แล้ว',
    'auth/weak-password': 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร',
    'auth/invalid-email': 'รูปแบบอีเมลไม่ถูกต้อง',
    'permission-denied': 'บัญชีนี้ยังไม่มีสิทธิ์แก้ไขข้อมูล Firebase'
  };
  return messages[error?.code] || 'เชื่อม Firebase ไม่สำเร็จ ลองตรวจสอบการตั้งค่าอีกครั้ง';
};

const api = {
  configured,
  currentUser: null,
  errorMessage,
  saveState: async () => {},
  signIn: async () => { throw new Error('Firebase is not configured'); },
  signOut: async () => {}
};
window.UnaFirebase = api;

if (!configured) {
  emit('una-firebase-ready', {configured: false});
} else {
  const app = getApps().length ? getApps()[0] : initializeApp(config);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const publicRef = doc(db, 'sites', siteId, 'public', 'content');
  const privateRef = doc(db, 'sites', siteId, 'private', 'studio');
  let unsubscribe = null;

  const publicState = state => {
    const safeQueue = (state.queue || []).map(item => ({
      code: item.code || '', type: item.type || '', status: item.status || 'Waiting',
      progress: Number(item.progress) || 0, eta: item.eta || '', hidden: Boolean(item.hidden)
    }));
    const safeAdopts = (state.adopts || []).map(item => {
      const next = copy(item);
      delete next.ownerNotes;
      return next;
    });
    return {
      profile: copy(state.profile || {}), settings: copy(state.settings || {}),
      posts: copy(state.posts || []), commissions: copy(state.commissions || []),
      adopts: safeAdopts, queue: safeQueue, commissionPage: copy(state.commissionPage || {})
    };
  };

  const watchState = () => {
    unsubscribe?.();
    const reference = api.currentUser ? privateRef : publicRef;
    const scope = api.currentUser ? 'private' : 'public';
    unsubscribe = onSnapshot(reference, snapshot => {
      if (snapshot.exists()) emit('una-firebase-data', {state: snapshot.data().state, scope});
      else if (api.currentUser) emit('una-firebase-empty');
    }, error => emit('una-firebase-error', {error, message: errorMessage(error)}));
  };

  api.signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  api.signOut = () => signOut(auth);
  api.saveState = async state => {
    if (!api.currentUser) throw new Error('auth/required');
    const batch = writeBatch(db);
    batch.set(publicRef, {schemaVersion: 1, state: publicState(state), updatedAt: serverTimestamp()});
    batch.set(privateRef, {schemaVersion: 1, state: copy(state), updatedAt: serverTimestamp(), updatedBy: api.currentUser.uid});
    await batch.commit();
  };

  onAuthStateChanged(auth, user => {
    api.currentUser = user || null;
    emit('una-firebase-auth', {user: api.currentUser});
    watchState();
  });
  emit('una-firebase-ready', {configured: true});
}

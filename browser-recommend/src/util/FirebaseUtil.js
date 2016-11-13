import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseDb = firebaseApp.database();
export const firebaseDbRef = ref => firebaseDb.ref(ref);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SEND_ID,
//   appId: process.env.FIREBASE_APP_ID,
// }
const firebaseConfig = {
  apiKey: 'AIzaSyBJ3UWvbpn7A3b7nX34t73y9BdaG-tWyXY',
  authDomain: 'discord-clone-ffd3f.firebaseapp.com',
  projectId: 'discord-clone-ffd3f',
  storageBucket: 'discord-clone-ffd3f.appspot.com',
  messagingSenderId: '458989538299',
  appId: '1:458989538299:web:763dd841bbaf756c2ed95e',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { db, auth, provider }

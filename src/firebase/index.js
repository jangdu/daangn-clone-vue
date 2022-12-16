// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD5GRk6ItoA-RHMiPJ0ZZzvwS1xFOgPA1U',
  authDomain: 'daangn-clone-vue.firebaseapp.com',
  projectId: 'daangn-clone-vue',
  storageBucket: 'daangn-clone-vue.appspot.com',
  messagingSenderId: '603153459397',
  appId: '1:603153459397:web:1aeb9611aa6306ec77e8ac'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {
  db
}

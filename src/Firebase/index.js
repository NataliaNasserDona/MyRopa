import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcMprkWJZOuffC8-QTMVcyxst58R0vLts",
  authDomain: "myropa-11306.firebaseapp.com",
  projectId: "myropa-11306",
  storageBucket: "myropa-11306.appspot.com",
  messagingSenderId: "805966877229",
  appId: "1:805966877229:web:000cba3aef1cb693241ea4"

};

const app = initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}

export {getFirestore} 

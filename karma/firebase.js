import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { GoogleAuthProvider, browserLocalPersistence, connectAuthEmulator, getAuth, setPersistence } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { connectStorageEmulator, getStorage } from 'firebase/storage'
// import { ReCaptchaV3Provider, initializeAppCheck } from 'firebase/app-check'
import { getPerformance } from 'firebase/performance'

const firebaseConfig = {
  apiKey: 'AIzaSyBpJthzr_Tf6J3hhURql_Rew3VNSrKHXxk',
  authDomain: 'karma-systems.firebaseapp.com',
  projectId: 'karma-systems',
  storageBucket: 'karma-systems.appspot.com',
  messagingSenderId: '246088496250',
  appId: '1:246088496250:web:b994356a937cdd05ef37c3',
  measurementId: 'G-KTHNN4CJC1',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)

export const analytics = getAnalytics(app)

export const storage = getStorage(app)

try {
  getPerformance(app)
}
catch (error) {
  // performance seems to only work in production
}

export const persistancePromise = setPersistence(auth, browserLocalPersistence)

export const googleProvider = new GoogleAuthProvider()

// TODO
// initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider('todo'),
//   isTokenAutoRefreshEnabled: true,
// })

if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
  connectFirestoreEmulator(db, 'localhost', 8080)
  connectStorageEmulator(storage, 'localhost', 9199)
}

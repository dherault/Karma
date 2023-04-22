// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBpJthzr_Tf6J3hhURql_Rew3VNSrKHXxk',
  authDomain: 'karma-systems.firebaseapp.com',
  projectId: 'karma-systems',
  storageBucket: 'karma-systems.appspot.com',
  messagingSenderId: '246088496250',
  appId: '1:246088496250:web:b994356a937cdd05ef37c3',
  measurementId: 'G-KTHNN4CJC1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

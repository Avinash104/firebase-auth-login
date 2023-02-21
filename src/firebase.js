// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCS1-qODhMCNMhnhOQfZjazwdThaIMUAjE",
  authDomain: "fir-auth-login-4cec9.firebaseapp.com",
  projectId: "fir-auth-login-4cec9",
  storageBucket: "fir-auth-login-4cec9.appspot.com",
  messagingSenderId: "527368473681",
  appId: "1:527368473681:web:0831e47be18976be843c70",
  measurementId: "G-XY0XJFE2KK",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export { app, auth, provider }

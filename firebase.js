// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2hwvU8GEZP_xT9KImqeSlVEGx4Fr1HHc",
  authDomain: "love-creation-393b7.firebaseapp.com",
  projectId: "love-creation-393b7",
  storageBucket: "love-creation-393b7.firebasestorage.app",
  messagingSenderId: "1090373514764",
  appId: "1:1090373514764:web:4926c89ee07e1326c2a029"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

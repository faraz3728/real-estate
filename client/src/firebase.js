// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-2269c.firebaseapp.com",
  projectId: "realestate-2269c",
  storageBucket: "realestate-2269c.appspot.com",
  messagingSenderId: "796545033433",
  appId: "1:796545033433:web:c600c6f1e2085025d24ac8",
  measurementId: "G-CTSZKRD5GE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
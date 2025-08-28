// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set , onValue, onDisconnect} from "firebase/database"; // แก้จาก analytics เป็น database

// ค่า config ที่ได้จาก Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBC0KbxMzhYg5UyeRIb2kzDa-B3Ox8XQOQ",
  authDomain: "devtools-a5ecf.firebaseapp.com",
  databaseURL: "https://devtools-a5ecf-default-rtdb.firebaseio.com",
  projectId: "devtools-a5ecf",
  storageBucket: "devtools-a5ecf.firebasestorage.app",
  messagingSenderId: "506163583606",
  appId: "1:506163583606:web:38659a065cb7ccfa78dd57",
  measurementId: "G-WSHS3V81E4"
};

// เริ่มการทำงานของ Firebase และ Realtime Database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // ใช้ getDatabase

export { database, ref, get, set , onValue, onDisconnect };
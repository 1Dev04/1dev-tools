// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database"; // แก้จาก analytics เป็น database

// ค่า config ที่ได้จาก Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyAMwAE4xUiKaNjYOFQQo9pUOP4VqdWO-z8",
    authDomain: "views-bf85c.firebaseapp.com",
    databaseURL: "https://views-bf85c-default-rtdb.firebaseio.com/",  
    projectId: "views-bf85c",
    storageBucket: "views-bf85c.appspot.com",
    messagingSenderId: "370927434102",
    appId: "1:370927434102:web:2587d3ad19bf7c86b92257",
    measurementId: "G-JYFKPVXKX8"
};

// เริ่มการทำงานของ Firebase และ Realtime Database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // ใช้ getDatabase

export { database, ref, get, set };
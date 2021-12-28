import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDdr_2J4IPsc3KuKtf5hBuYCxadNPwum4Q",
    authDomain: "myappgbstudy.firebaseapp.com",
    databaseURL: "https://myappgbstudy-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myappgbstudy",
    storageBucket: "myappgbstudy.appspot.com",
    messagingSenderId: "41642003706",
    appId: "1:41642003706:web:630e56166501713bfb4d43"
};

export const Myapp = initializeApp(firebaseConfig);
export const dataBase = getDatabase(Myapp)
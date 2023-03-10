

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyD2pWxX-UlMqSFVu2gJstTcEilxJiY4Ihk",
    authDomain: "inv-s-f-app.firebaseapp.com",
    projectId: "inv-s-f-app",
    storageBucket: "inv-s-f-app.appspot.com",
    messagingSenderId: "3890003627",
    appId: "1:3890003627:web:3458542f20933e504101ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};
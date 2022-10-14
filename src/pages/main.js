import {createApp} from "vue";
import App from "@/App";
import router from "@/datas";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoNGS_DhBRBUHun_gSjjP9YUxsfLJ2rmk",
    authDomain: "bdd-vps-builder.firebaseapp.com",
    projectId: "bdd-vps-builder",
    storageBucket: "bdd-vps-builder.appspot.com",
    messagingSenderId: "249156769423",
    appId: "1:249156769423:web:f1575b798bcf20e11082fa",
    measurementId: "G-CGS39808JG"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App);
app.use(router);
app.mount("#app");

//const analytics = getAnalytics(app);
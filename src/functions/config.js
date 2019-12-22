import * as firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyDT-pXMoY5cLyTnN0bDn8l7fz0zE625VIM",
//     authDomain: "workassist-ed69c.firebaseapp.com",
//     projectId: "workassist-ed69c",
//     databaseURL: "https://workassist-ed69c.firebaseio.com",
//     storageBucket: "workassist-ed69c.appspot.com",
//     messagingSenderId: "1046678110549",
//     appId: "1:1046678110549:web:b123aa1efa9dafb9bb6fdc",
// };

const firebaseConfig = {
    apiKey: "AIzaSyBsteeVx5gu0twWSWZ2aNpRJfxBOAVlSSU",
    authDomain: "workassist-5454s.firebaseapp.com",
    databaseURL: "https://workassist-5454s.firebaseio.com",
    projectId: "workassist-5454s",
    storageBucket: "workassist-5454s.appspot.com",
    messagingSenderId: "425063203556",
    appId: "1:425063203556:web:9d24855de5dbb9d939a2f1",
    measurementId: "G-SDPDK97T7N"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCNoX_LkmHDhIwnNMoRUgss_ArXtOHwpZQ",
    authDomain: "clone-original.firebaseapp.com",
    projectId: "clone-original",
    storageBucket: "clone-original.appspot.com",
    messagingSenderId: "237164328317",
    appId: "1:237164328317:web:3e5d09bb9e0734aec84814",
    measurementId: "G-CLH4PDDB4K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
const db = firebase.database();
const dbfirestore = firebaseApp.firestore();

const auth = firebaseApp.auth();
auth.onAuthStateChanged((user) =>{
    if(user){
        console.log('setUser', user);
    }else{
        console.log('setUserNull', null);
    }
});

export { db, auth, dbfirestore };
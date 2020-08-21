import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBUQe-cYfSxwKHZu_ZveZ20mGAxLd1d-h4",
    authDomain: "twitter-clone-9a066.firebaseapp.com",
    databaseURL: "https://twitter-clone-9a066.firebaseio.com",
    projectId: "twitter-clone-9a066",
    storageBucket: "twitter-clone-9a066.appspot.com",
    messagingSenderId: "313617385129",
    appId: "1:313617385129:web:31d0dc35a653b587a4cbb8",
    measurementId: "G-MGGPRBR91T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
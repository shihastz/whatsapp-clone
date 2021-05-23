import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAEfwGryAI5ahH-bZUSuJifF9DpSd3CLKE",
    authDomain: "whatsapp-web-clone-2c2e0.firebaseapp.com",
    databaseURL: "https://whatsapp-web-clone-2c2e0.firebaseio.com",
    projectId: "whatsapp-web-clone-2c2e0",
    storageBucket: "whatsapp-web-clone-2c2e0.appspot.com",
    messagingSenderId: "1086092460615",
    appId: "1:1086092460615:web:084c06f72cd938f4152762",
    measurementId: "G-EK9QPCZDXY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;

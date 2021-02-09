import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCTs4a0EG6W8Tme_iRLIq9fLf4gQPWSyRc",
    authDomain: "e-commerce-with-react-91ffa.firebaseapp.com",
    projectId: "e-commerce-with-react-91ffa",
    storageBucket: "e-commerce-with-react-91ffa.appspot.com",
    messagingSenderId: "989789377613",
    appId: "1:989789377613:web:6dade6fc17b74ca97f7804",
    measurementId: "G-Q03229TJC2"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const signInGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//   <!-- The core Firebase JS SDK is always required and must be listed first -->
//   <script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js"></script>

//   <!-- TODO: Add SDKs for Firebase products that you want to use
//        https://firebase.google.com/docs/web/setup#available-libraries -->
//   <script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-analytics.js"></script>
  
//   <script>
//     // Your web app's Firebase configuration
//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//     var firebaseConfig = {
//       apiKey: "AIzaSyCTs4a0EG6W8Tme_iRLIq9fLf4gQPWSyRc",
//       authDomain: "e-commerce-with-react-91ffa.firebaseapp.com",
//       projectId: "e-commerce-with-react-91ffa",
//       storageBucket: "e-commerce-with-react-91ffa.appspot.com",
//       messagingSenderId: "989789377613",
//       appId: "1:989789377613:web:6dade6fc17b74ca97f7804",
//       measurementId: "G-Q03229TJC2"
//     };
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
//     firebase.analytics();
//   </script>
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBTOCTP5xB3-MswVNguQ5Gn9RnR3ouGH5U",
  authDomain: "expense-app-basic.firebaseapp.com",
  databaseURL: "https://expense-app-basic-default-rtdb.firebaseio.com",
  projectId: "expense-app-basic",
  storageBucket: "expense-app-basic.appspot.com",
  messagingSenderId: "682131878717",
  appId: "1:682131878717:web:84bd775870883e9ce64b54",
  measurementId: "G-DX2PNR8CYX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const database = firebase.database();

export { firebase, database as default };
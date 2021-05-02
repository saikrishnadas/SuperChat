import React from "react";
import "./App.css";

import SignIn from "./SignIn";
import SignOut from "./SignOut";
import ChatRoom from "./ChatRoom";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
//import { useCollectionData } from "react-firebase-hooks/firestore";

require("dotenv").config();

firebase.initializeApp({
  apiKey: "AIzaSyCW-BLmqh7cP_qfr1IwEiPE-lzXcjhGIno",
  authDomain: "superchat-8c104.firebaseapp.com",
  projectId: "superchat-8c104",
  storageBucket: "superchat-8c104.appspot.com",
  messagingSenderId: "116273342023",
  appId: "1:116273342023:web:ee4d37424aa37c6e847362",
  measurementId: "G-4327D7BNPE",
});

const auth = firebase.auth();
//const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };

//   return (
//     <div>
//       <button type="submit" onClick={signInWithGoogle}>
//         Sign in with Google
//       </button>
//     </div>
//   );
// }

// function SignOut() {
//   return (
//     auth.currentUser && <button onClick={() => auth.signOut()}>SignOut</button>
//   );
// }

// function ChatRoom() {
//   return <div></div>;
// }

export default App;
export { auth };

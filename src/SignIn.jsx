import React from "react";
import firebase from "firebase/app";
import { auth } from "./App";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button type="submit" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;

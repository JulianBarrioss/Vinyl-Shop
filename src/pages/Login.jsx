import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import "../styles/pages/Login.css";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { updateProfile } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDh_tgdJ-aZINm1xBNkmTROkKybozGWHIk",
  authDomain: "vinylshop-ab700.firebaseapp.com",
  projectId: "vinylshop-ab700",
  storageBucket: "vinylshop-ab700.appspot.com",
  messagingSenderId: "14674845376",
  appId: "1:14674845376:web:59bcb50c45310dde8c9725",
  measurementId: "G-76MS12DH5L",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };

const Login = () => {
  const history = useNavigate();
  const [name, setName] = useState("Demo Account");
  const [email, setEmail] = useState("Demo@account.com");
  const [password, setPassword] = useState("demo123");

  const createUser = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history("/");
        return updateProfile(auth.currentUser, {
          displayName: name,
        });

      })
      .catch((error) => {
        if(error.code === 'auth/weak-password') {
              alert('Your password must be atleast 6 characters')
            }

            if(error.code === 'auth/email-already-in-use') {
              alert('This account already exists!')
            }
      });
  };

  const signInUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history("/")
      })
      .catch((error) => {
        if(error.code === 'auth/user-not-found') {
          alert('This account does not exist')
        }
      });
  };


  return (
    <div className="login">
      <div className="login__form-container">
        <h2 className="login__form-title">Sign-in</h2>
        <form className="login__form">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            id="userName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="e-mail">E-mail</label>
          <input
            type="email"
            id="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="passwords"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__form-button-sign-in"
            onClick={signInUser}
          >
            Sign-in
          </button>
          <p></p>
          <button className="login__form-button-create" onClick={createUser}>
            Create a VinylShop Account
          </button>
        </form>
      </div>
    </div>
  );
};
export { Login };

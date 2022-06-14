import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { auth } from '../Firebase';
import '../styles/pages/Login.css'

const Login = () => {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history('/')
            })
            .catch(error => alert(error))
    }

    const registrer = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                if(auth) {
                    history('/');
                }
            })
            .catch(error => alert(error))
    }
    auth.onAuthStateChanged(function(user) {

        if (user) {

           // Updates the user attributes:

          user.updateProfile({ // <-- Update Method here

            displayName: name,

          }).then(function() {

            // Profile updated successfully!
            //  "NEW USER NAME"

            var displayName = user.displayName;
            return displayName

          }, function(error) {
            // An error happened.
          });     

        }
});

  return (
    <div className='login'>
        <img src="" alt="" />
        <div className='login__form-container'>
            <h2 className='login__form-title'>Sign-in</h2>
            <form className='login__form'>
                <label htmlFor="text">Name</label>
                <input type="text" id='userName' value={name} onChange={e => setName(e.target.value)}/>
                <label htmlFor="e-mail">E-mail</label>
                <input type="email" id='e-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id='passwords' value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit'       
                        className='login__form-button-sign-in'
                        onClick={signIn}
                >Sign-in</button>
                <p></p>
                <button className='login__form-button-create'
                    onClick={registrer}
                >Create a VinylShop Account</button>
            </form>
        </div>
    </div>
  )
}
export { Login };
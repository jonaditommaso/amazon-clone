import React, { useState } from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';
import history from '../history';
import { auth } from '../firebase';


function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        auth.signInWithEmailAndPassword(email, password);
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            login()
            history.push('/');
        })
        .catch(error => alert(error.message));
    }


    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="/assets/img/amazon-login.png"
                    alt=""
                />
            </Link> 

            <div className="login__container">
                <h1>Register</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        type="email"
                    />
                    <h5>Password</h5>
                    <input 
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                        type="password" 
                    />
                    <button 
                        className="login__signInButton"
                        onClick={register} 
                        type="submit"
                    >
                        Create your Amazon Account & Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
            </div>
        </div>
    );
}

export default Register;
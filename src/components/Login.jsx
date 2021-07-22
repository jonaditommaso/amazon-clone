import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import GoogleAuth from './GoogleAuth';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault();
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
                <h1>Sign in</h1>
                <div className="login__container__warning">
                    <em style={{fontWeight: '300', fontSize: '11px'}}>Sign in with fake Amazon account is not available yet</em>
                    <h5>Try to login with Google or Sign up</h5>
                </div>

                <br/>

                <form>
                    <h5>E-mail</h5>
                    <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        type="email" 
                        disabled
                    />
                    <h5>Password</h5>
                    <input 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        type="password" 
                        disabled
                    />
                    <button 
                        className="login__signInButton"
                        onClick={(e) => login(e)} 
                    >
                        Sign in
                    </button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to="/register" className="login__newRegister">
                    You don't have an account? Sign up!
                </Link>

                <div className="login__google">
                    <GoogleAuth />
                </div>
            </div>
        </div>
    );
}

export default Login;
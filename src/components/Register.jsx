import React, { useState, useEffect } from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';
import { signInWithAmazon, signOutWithAmazon } from '../actions/index';
import { connect } from 'react-redux';
import history from '../history';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from '../utils/TextError';


function Register({ signInWithAmazon }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const register = () => {
            try {
                if(name && email && password) {
                    const NAME = localStorage.getItem('name');
                    const EMAIL = localStorage.getItem('email');
                    const PASSWORD = localStorage.getItem('password');
                    signInWithAmazon(NAME, EMAIL, PASSWORD);
                    history.push('/');
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        register();
        // return () => {
        //     cleanup
        // }
    }, [name && email && password]);

    const validationSchema = Yup.object({
        name: Yup.string().required('Required!'),
        email: Yup.string().email('Invalid format').required('Required!'),
        password: Yup.string().required('Required!')
    });

    const initialValues = {
        name: name,
        email: email,
        password: password,
    }

    const onSubmit = (values) => {
        console.log('values', values)
        setName(values.name);
        setEmail(values.email);
        setPassword(values.password);
        // saveInfoInLocalStorage()
        // register();
        // history.push('/');
    }

    

    const saveInfoInLocalStorage = () => {
        if(name && email && password) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        }
    }
    saveInfoInLocalStorage();

    


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
                <div className="login__container__warning">
                    <h5><Link to="/login" style={{textDecoration: 'none', color: '#eec933', justifyContent: 'center'}}>Back</Link></h5>
                </div>
                
                <br/>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                >
                    <Form>
                        <div className="form-control theField">
                            <h5 htmlFor='name'>Name</h5>
                            <Field 
                                type='text' 
                                id='name' 
                                name='name' 
                                className="theInput"
                            />
                            <ErrorMessage name='name' component={TextError} />
                        </div>

                        <div className="form-control theField">
                            <h5 htmlFor='email'>Email</h5>
                            <Field 
                                type='email' 
                                id='email' 
                                name='email' 
                                className="theInput"
                            />
                            <ErrorMessage name='email' component={TextError} />
                        </div>

                        <div className="form-control theField">
                            <h5 htmlFor='password'>Password</h5>
                            <Field 
                                type='password' 
                                id='password' 
                                name='password' 
                                className="theInput"
                            />
                            <ErrorMessage name='password' component={TextError} />
                        </div>
                        <button type='submit' className="submitButton">Create your Amazon Account & Sign In</button>
                    </Form>
                </Formik>
                
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('reducer', state.login);
    return {
       thereUser: state.login
    }
    
}

export default connect(mapStateToProps, {signInWithAmazon, signOutWithAmazon})(Register);
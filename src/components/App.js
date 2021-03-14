import React, { Component } from 'react';
import {  Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import history from '../history';
import Orders from './Orders';
import Register from './Register';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../utils/stripePromise';

class App extends Component {

  render() { 
    return ( 
      <Router history={history}>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/payment" exact component={Payment}>
               <Elements stripe={stripePromise}>
                <Payment />
              </Elements> 
            </Route>
          </Switch>
        </div>  
      </Router>
    );
  }
}
 
export default App;

import React from 'react';
import { connect } from 'react-redux';
import { emptyCart } from '../actions';
import history from '../history';
import StripeCheckout from 'react-stripe-checkout';
import { db } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import { STRIPE_KEY } from '../utils/stripeKey';

const StripeComponent = ({ price, name, cartList, emptyCart, userGoogle }) => {

    const googleId = userGoogle.getId();
    const googleName = userGoogle.getName();

    const handleToken = async (token) => {

        await db.ref('/orders/' + uuidv4()).set({
            cart: cartList,
            googleId,
            googleName,
            token
        });

        history.push('/orders');
        emptyCart();  
    }   


    return ( 
        <div>
            <StripeCheckout
                stripeKey={STRIPE_KEY}
                token={handleToken}
                amount={price * 100}
                title={name}
                name="It's almost yours!"
            />
        </div>  
    );
}
 
const mapStateToProps = (state) => {
    return  { 
        cartList: state.cart.cartList,
        userGoogle: state.google.userId
    }
}

export default connect(mapStateToProps, { emptyCart })(StripeComponent);
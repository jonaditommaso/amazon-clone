import React, { useEffect, useState } from 'react';
import '../styles/payment.css';
import { connect } from 'react-redux';
import { emptyCart } from '../actions/index.js';
import { getCartTotal } from '../utils/subtotalCount';
import { handleLocationError } from './Geolocation';
import axios from '../utils/axios';
import history from '../history';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import StripeComponent from './StripeComponent';
import Swal from 'sweetalert2';
import { GEO_KEY } from '../utils/geolocationConfig';

const Payment = ({ cartList, userGoogle, emptyCart }) => {

    const [city, setCity] = useState('');
    const [road, setRoad] = useState('');
    const [state, setState] = useState('');


    useEffect(() => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( async (position) => {
            
                const {data} = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}%2C${position.coords.longitude}&key=${GEO_KEY}`)
                setCity(data.results[0].components.city);
                setRoad(data.results[0].components.road);
                setState(data.results[0].components.state);
            },
            handleLocationError);     
        } 
    }, [cartList]);


    const test = () => {
        Swal.fire({
            title: 'Cancel Purchase',
            text: 'Are you sure you want to cancel the purchase and go home?',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            confirmButtonColor: '#ffdf5c',
        })
        .then(
            (result) => {
                if (result.value) {
                    emptyCart();
                     history.push('/');
                }
            }
        );
    }

    const cancelPurchaseButton = () => {
        test();     
    }

    const emptyCartAlert = () => {
        if (cartList.length === 0) {
            
            Swal.fire({
                icon: 'error',
                title: 'Your car is empty',
                text: 'You must add items to make your purchase',
                showConfirmButton: true,
                confirmButtonText: "Ok",
                confirmButtonColor: '#ffdf5c',
                backdrop: true
            })
                .then((result) => {
                    if (result.value) {
                        history.replace('/');
                    }
                }); 
        }

        else {
           return <StripeComponent
                        price={getCartTotal(cartList)}
                        name={cartList.map(name => name.title)} 
                    /> 
        }
    }

    return ( 
        <div className="payment">
            <div className='payment__container'>
                
                <div className="payment__price">
                    <CurrencyFormat
                        renderText={(value) => (
                            <h2>Order Total: {value}</h2>
                        )}
                        decimalScale={2}
                        value={getCartTotal(cartList)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    />
                    <p>
                        Checkout {cartList?.length} items
                    </p>
                    <div className="payment__stripe">
                        {emptyCartAlert()}  
                    </div>
                </div>
                
            </div>
            
            <button onClick={()=> cancelPurchaseButton()}>Cancel Purchase</button> 
                
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{userGoogle.getName()}</p>
                    <p>{road}</p>
                    <p>{`${city}, ${state}`}</p>
                </div>
            </div>
                
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>

                <div className='payment__items'>
                    {cartList.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { 
        cartList: state.cart.cartList,
        userGoogle: state.google.userId
    }
}

export default connect(mapStateToProps, { emptyCart })(Payment);
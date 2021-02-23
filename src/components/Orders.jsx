import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/orders.css';
import { db } from '../firebase';
import history from '../history';
import Order from './Order';


function Orders() {

     const [orders, setOrders] = useState([]);

    useEffect(() => {
        const ref = db.ref('/orders');
            ref.on('value', getData);

        function getData(data) {
            
            const infoOrder = data.val()
                if (infoOrder) {
                    setOrders(Object.entries(infoOrder));
                }    
        }
    }, []);


    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <button onClick={()=> history.replace('/')}>Back Home</button>
            <div className='orders__order'>
             
                {orders?.map(order => ( 
                   <Order 
                        order={order[1]} 
                        orderId={order[0]}
                    />
                ))} 
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { 
        userGoogle: state.google.userId, 
        cartList: state.cart.cartList 
    }
}

export default connect(mapStateToProps)(Orders);
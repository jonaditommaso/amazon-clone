import React from 'react';
import '../styles/order.css';
 import moment from "moment";

function Order({ order, orderId }) {

    const brand = order.token.card.brand
    
    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }

    const card = capitalize(`${order.token.card.funding}`);


    return (

        <div className='order'>
            <div className="order__header">
                <img 
                    className="order__logo" 
                    src="/assets/img/amazon-login.png" 
                    alt=""
                />
                <h3>Order</h3>
            </div>

            <hr/>

            <div className="order__content">

                <div>
                    <h4>Order ID: </h4> 
                    {orderId}
                    <br/>                    
                </div> 

                <hr/>

                <div> 
                    <h4>Product: </h4>
                    
                    {(order.cart)?.map(orderCart => (
                        <>
                            {orderCart.title} -
                            ${orderCart.price}
                            <br/>
                        </>
                    ))}
                </div>

                <hr/> 

                <div>
                    <h4>Date: </h4>{moment.unix(order.token.created).format("MMMM Do YYYY, h:mma")}
                </div>
                
                <hr/>

                <div> 
                    <h4>Card: </h4>{card} {brand.toUpperCase()} XXXX-{order.token.card.last4}
                </div>

                <hr/> 
            
                <div>
                    <h4>Card's mail: </h4> {order.token.card.name}
                </div>

                <hr/>

                <div>
                    <h4>Name: </h4>{order.googleName}
                </div>

                <hr/>

                <div>
                    <h4>Buyer ID: </h4>{order.googleId}      
                </div>
            </div>
        </div>
    );
}

export default Order;
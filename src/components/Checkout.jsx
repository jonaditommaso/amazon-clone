import React, { Component } from 'react';
import '../styles/checkout.css';
import { connect } from 'react-redux';
import { addToCart, emptyCart } from '../actions';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

class Checkout extends Component {

    render() { 
        return ( 
            <div className="checkout" >
                <div className="checkout__left">
                    <img
                        className="checkout__ad"
                        src="/assets/img/amazon-checkout.jpg"
                        alt=""
                    />
                    {this.props.cartList?.length === 0 ? (
                        <div>
                            <h2>Your Shopping Cart is empty</h2>
                            <p>
                                You have no items in your cart. To buy one or more items, click "Add to cart" next to the item
                            </p>
                        </div> 
                    ) : (
                        <div className="checkout__shopping">
                            <h2 className="checkout__title">Your Shopping Cart</h2>
                            <button onClick={ () => this.props.emptyCart()}>
                                Remove all
                            </button> 
                            {this.props.cartList?.map(item => (
                                <div>
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                </div>
                            ))}   
                        </div>
                    )}
                </div>
                {this.props.cartList.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal/> 
                    </div>
                )}
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return { cartList: state.cart.cartList }
}

export default connect(mapStateToProps, { addToCart, emptyCart })(Checkout)

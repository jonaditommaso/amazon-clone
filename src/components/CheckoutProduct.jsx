import React, { Component } from 'react';
import '../styles/checkoutProduct.css';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';


class CheckoutProduct extends Component {

    render() { 
        return ( 
            <div className="checkoutProduct">
                <img className="checkoutProduct__image" src={this.props.image} alt="" />

                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{this.props.title}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{this.props.price}</strong>
                    </p>

                    <div className="checkoutProduct__rating">
                        {
                            Array(this.props.rating).fill().map(()=> <p>⭐</p> )
                        }
                    </div>
                    <button onClick={ () => this.props.removeFromCart(this.props.id)}>
                        Remove from cart
                    </button> 
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { remove: state.cart}
}

export default connect(mapStateToProps, { removeFromCart })(CheckoutProduct)
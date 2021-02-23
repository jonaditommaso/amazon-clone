import React, { Component } from 'react';
import '../styles/product.css';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import history from '../history';
import Swal from 'sweetalert2';


class Product extends Component {

    test(){
        Swal.fire({
            title: 'Sign in',
            text: 'You must sign in to add to cart',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Sign in",
            cancelButtonText: "No",
            confirmButtonColor: '#ffdf5c',
        })
            .then((result) => {
                if (result.value) {
                    history.push('/login');
                }
            }); 
    }

    determinateFunction() {

        const {title, price, image, id, rating} = this.props

        if (this.props.isSignedIn) {
            return  (
                this.props.addToCart(title, image, price, id, rating)
            );
        }

        else {
            return (
                this.test()
            );
        }
    }


    render() {
        return (
            <>
                <div className="product">
                    <div className="product__info">
                        <p>
                            {this.props.title}{this.props.subtitle}
                        </p>

                        <p className="product__price">
                            <small>$s</small>
                            <strong>
                                {this.props.price}
                            </strong>
                        </p>

                        <div className="product__rating">
                            {
                                Array(this.props.rating).fill().map(()=> <p>⭐</p>)
                            }
                        </div>
                    </div>
                    <img src={this.props.image} alt="" />
                    <button onClick={()=> this.determinateFunction()}>Add to cart</button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state)=> {
    return { 
        addcart: state.cart, 
        isSignedIn: state.google.isSignedIn 
    }
}

export default connect(mapStateToProps, { addToCart })(Product);
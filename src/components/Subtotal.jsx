import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/subtotal.css';
import CurrencyFormat from 'react-currency-format';
import history from '../history';
import { getCartTotal } from '../utils/subtotalCount';

class Subtotal extends Component {

  render() { 
    return ( 
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({this.props.cartList.length} items): <strong>{value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getCartTotal(this.props.cartList)}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
        <button onClick={() => history.push('/payment')}>Proceed to Checkout</button>
      </div>
    );
  }
}
 
const mapStateToProps = (state)=> {
  return {
    cartList: state.cart.cartList
  } 
}

export default connect(mapStateToProps, null)(Subtotal);
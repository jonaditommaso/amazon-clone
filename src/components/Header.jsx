import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import { connect } from 'react-redux';
import { addToCart, signIn, signOut } from '../actions';
import InputSearch from './InputSearch';
import GoogleAuth from './GoogleAuth';
import Geolocation from './Geolocation';
import Modal from './Modal';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Button} from '@material-ui/core';
import history from '../history';



class Header extends Component {
    state = { openModal: false }

    renderExitIcon = () => {
        if (this.props.userGoogle) {
            return (
                <>
                    <ExitToAppIcon onClick={()=> this.setState({openModal: true})}/>
                    <Modal 
                        open={this.state.openModal} 
                        title="Do you want to log out?"
                        onDismiss={()=> history.push('/')}
                        actions={this.renderActions()}
                    />
            </>
            )
        }
        else {
            return null
        }
    }

    onSignOutClick = ()=> {
        this.auth.signOut();
        history.push('/');
    }

    renderActions = () => {

        return (
            <div className="header__actionButtons">
                <div onClick={()=> this.setState({ openModal: false })}>
                      <GoogleAuth />
                </div>
                <div className="header__actionCancelButton">
                    <Button
                        size="large"
                        style={{width: '240px'}}
                        variant="contained" 
                        color="secondary" 
                        onClick={()=> this.setState({ openModal: false })}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        );
    }
    
 
    render() {

        return (
            <nav className="header">
                <Link to='/'>
                    <img 
                        src="/assets/img/amazon-header.png" 
                        alt=""
                        className="header__logo"
                    />
                </Link>
                
                <Geolocation/>

                <div className="header__search">
                    <InputSearch />
                    <SearchIcon className="header__searchIcon" />
                </div>
                
                <div className="header__nav">
                    <Link 
                        to={!this.props.userGoogle && "/login"} 
                        className="header__link">
                        <div className="header__option">
                            <span  className="header__optionLineOne">
                                {
                                    this.props.userGoogle 
                                    ? <span>Hello <h2>{this.props.userGoogle.getName()}</h2></span> 
                                    : <h2>Sign in</h2>
                                }
                            </span>
                        </div>
                    </Link>  

                    <Link to="/orders" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>

                    <Link to="/checkout" className="header__link">
                        <div className="header__optionCart">
                            <ShoppingCartIcon />
                            <span className="header__optionLineTwo header__cartCount">
                                {this.props.cartListNumber?.length}
                            </span>
                        </div>
                    </Link>

                    <Link  className="header__link header__optionExit">
                        {this.renderExitIcon()}
                    </Link>
                </div>
            </nav>
        );
    }
}


const mapStateToProps = (state)=> {
    return {
        cartListNumber: state.cart.cartList,
        userGoogle: state.google.userId
    } 
}

export default connect(mapStateToProps, {addToCart, signIn, signOut})(Header);


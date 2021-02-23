import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';
import googleLogin from './googleLogin';

export default combineReducers({
    cart: cartReducer,
    login: loginReducer,
    google: googleLogin
});
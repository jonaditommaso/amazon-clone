import { 
    SIGN_IN, 
    SIGN_OUT, 
    ADD_TO_CART, 
    REMOVE_FROM_CART,
    EMPTY_CART 
} from './types';


export const signIn = (userId)=> {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = ()=> {
    return {
        type: SIGN_OUT
    }
}

export const addToCart = (title, image, price, id, rating) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: {
            title,
            id,  
            price,
            rating,
            image
        }
    })
}

export const removeFromCart = (id) => dispatch =>{
   dispatch({
        type: REMOVE_FROM_CART,
        id
    })
}

export const emptyCart = () => dispatch => {
    dispatch({
        type: EMPTY_CART
    })
}
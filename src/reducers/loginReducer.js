import { ACTIVE_USER, INACTIVE_USER } from '../actions/types';

const INITIAL_STATE = {user: null};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTIVE_USER:
            return { ...state, user: action.payload}
        
        case INACTIVE_USER:
            return {...state, user: null}
        
        default:
            return state    
    }
};
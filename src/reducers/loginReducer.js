import { ACTIVE_USER, INACTIVE_USER } from '../actions/types';

export default (state = {user: null}, action) => {
    switch(action.type) {
        case ACTIVE_USER:
            return {
                ...state,
                user: action.user
            }
        case INACTIVE_USER:
            return {
                ...state,
                user: null
            }
        default:
            return state    
    }
};
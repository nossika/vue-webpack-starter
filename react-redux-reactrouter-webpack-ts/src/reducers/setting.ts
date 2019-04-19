import { combineReducers } from 'redux';

let iUsername = '';

export default combineReducers({
    username (state = iUsername, action) {
        switch (action.type) {
            case 'UPDATE_USERNAME':
                return action.username;
            default:
                return state;
        }
    }
})
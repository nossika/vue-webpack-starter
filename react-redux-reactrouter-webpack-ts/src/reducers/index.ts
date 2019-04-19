import { combineReducers, createStore } from 'redux';
import setting from './setting';

export default createStore(
    combineReducers({
        setting,
    })
)

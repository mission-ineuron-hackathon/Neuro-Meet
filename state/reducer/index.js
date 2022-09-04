import { combineReducers } from 'redux';
import  accountReducer  from './accountReducer';
import  userData  from './userData';

const reducer = combineReducers({
    account: accountReducer, 
    userData: userData,
});


export default reducer;
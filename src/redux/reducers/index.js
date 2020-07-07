import AuthReducer from './AutchReducer';

import { combineReducers } from 'redux'

const allReducers = combineReducers({
 Auth:AuthReducer
});

export default allReducers;

import IsLoggedIn from './IsLoggedIn';
import SignUpReducer from '../reducers/SignUp';

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  LoggedIn:IsLoggedIn,
  SignUp:SignUpReducer
});

export default allReducers;

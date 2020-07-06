import IsLoggedIn from './IsLoggedIn';
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  LoggedIn:IsLoggedIn
});

export default allReducers;

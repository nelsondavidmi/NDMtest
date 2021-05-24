//@vendors
import {combineReducers} from 'redux';

// @reducers
import userReducer from './userReducer';

const AppReducer = combineReducers({
  userReducer,
});

export default AppReducer;

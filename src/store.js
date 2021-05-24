import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(AppReducer, composeEnhancer(applyMiddleware(thunk)));

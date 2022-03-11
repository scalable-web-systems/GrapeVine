import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Leaders } from './leaders';
import { Features } from './features';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        leaders: Leaders,
        features: Features
    }));
    applyMiddleware(thunk, logger)

    return store;
}
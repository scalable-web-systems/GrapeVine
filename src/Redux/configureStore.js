import { createStore, combineReducers } from 'redux';
import { Leaders } from './leaders';
import { Features } from './features';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        leaders: Leaders,
        features: Features
    }));

    return store;
}
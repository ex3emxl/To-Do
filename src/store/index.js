import { createStore, combineReducers } from 'redux';
// import * as reducers from './reducers';

const rootReducers = combineReducers(/* reducers */);

export const store = createStore(
    rootReducers,
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
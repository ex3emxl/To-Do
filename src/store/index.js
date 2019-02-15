import { createStore, combineReducers } from 'redux';
import { user } from './user';

const rootReducers = combineReducers({
    user
});

const store = createStore(
    rootReducers,
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
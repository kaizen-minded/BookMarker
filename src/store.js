import {createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

import { loadAuthToken } from './local-storage';
import bookReducer, { goodreadsReducer } from './reducers/index';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const enhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(combineReducers({
    form: formReducer,
    book: bookReducer,
    goodreads: goodreadsReducer,
    auth: authReducer,
    protectedData: protectedDataReducer
}), enhancers);

const authToken = loadAuthToken();
if(authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store

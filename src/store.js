import {createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'

import bookReducer, { goodreadsReducer } from './reducers/index';

const enhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default createStore(combineReducers({
    form: formReducer,
    book: bookReducer,
    goodreads: goodreadsReducer
}), enhancers);
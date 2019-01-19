import {
    FETCH_BOOK_REQUEST,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_ERROR,
    ADD_BOOK,
    GET_ALL_BOOKS,
    UPDATE_STATUS,
    DELETE_BOOK
} from '../actions/index'

import {
    FETCH_GOODREADS_REQUEST,
    FETCH_GOODREADS_SUCCESS,
    FETCH_GOODREADS_ERROR
} from "../actions/goodReads"

const initialState = {
    loading: false,
    error: null,
    books: [],
    bookCount: {}
}

export default function bookReducer (state=initialState, action){
    if (action.type === FETCH_BOOK_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === FETCH_BOOK_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    else if (action.type === FETCH_BOOK_SUCCESS) {
        return Object.assign({}, state, {
            books: action.books,
            loading: false,
            error: null
        });
    }
    else if(action.type === ADD_BOOK){
        return Object.assign({}, state, {
            books: [ ...state.books, action.newBook ]
        })
    }
    else if (action.type === UPDATE_STATUS){
        return Object.assign({}, state, {
            books: state.books.map(book => {
                if(book.bookId === action.bookId){
                    return {
                        ...book,
                        status: action.status
                    }
                }
                return book
            })
        })
        return state
    }
    else if (action.type === DELETE_BOOK){
        console.log("REACHED DELETE REDUCERS")
        return Object.assign({}, state, {
            books: state.books.filter(({ bookId }) => bookId !== action.bookId)
            // books: state.books.filter(book => {
            //     if(book.bookId !== action.bookId){
            //         return book
            //     }
            // })
        // return state.books.filter(({ id }) => id !== action.bookId)
        })
    }
    else if (action.type === GET_ALL_BOOKS){
        return Object.assign({}, state, {
            bookCount: {
                wishlist: action.books.filter(({status}) => status === "Wishlist").length,
                current: action.books.filter(({status}) => status === "Current").length,
                completed: action.books.filter(({status}) => status === "Completed").length
            }
        })
    }

    return state;
}
export function goodreadsReducer (state=initialState, action){
    if (action.type === FETCH_GOODREADS_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === FETCH_GOODREADS_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    else if (action.type === FETCH_GOODREADS_SUCCESS) {
        return Object.assign({}, state, {
            goodreads: action.payload,
            loading: false,
            error: null
        });
    }

    return state;
}

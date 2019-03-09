import {
    FETCH_BOOK_REQUEST,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_ERROR,
    GET_ALL_BOOKS,
    GET_STATUS_BOOKS,
    GET_ONE_BOOK,
    ADD_BOOK,
    UPDATE_STATUS,
    DELETE_BOOK,
    ADD_COMMENT,
    REMOVE_COMMENT
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
    oneBook: {},
    bookCount: {}
}

export default function bookReducer(state = initialState, action) {
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
            oneBook: action.books,
            loading: false,
            error: null
        });
    }
    else if (action.type === GET_STATUS_BOOKS) {
        return Object.assign({}, state, {
            books: action.books,
            loading: false,
            error: null
        })
    }
    else if (action.type === GET_ONE_BOOK) {
        return Object.assign({}, state, {
            oneBook: action.oneBook,
            loading: false,
            error: null
        })
    }
    else if (action.type === ADD_BOOK) {
        return Object.assign({}, state, {
            books: [...state.books, action.newBook]
        })
    }
    else if (action.type === UPDATE_STATUS) {
        return Object.assign({}, state, {
            books: state.books.map(book => {
                if (book.bookId === action.bookId) {
                    return {
                        ...book,
                        status: action.status
                    }
                }
                return book
            })
        })
    }
    else if (action.type === DELETE_BOOK) {
        return Object.assign({}, state, {
            books: state.books.filter(({ bookId }) => bookId !== action.bookId)
        })
    }
    else if (action.type === GET_ALL_BOOKS) {
        return Object.assign({}, state, {
            bookCount: {
                wishlist: action.books.filter(({ status }) => status === "Wishlist").length,
                current: action.books.filter(({ status }) => status === "Current").length,
                completed: action.books.filter(({ status }) => status === "Completed").length
            }
        })
    }
    else if (action.type === ADD_COMMENT) {
        return Object.assign({}, state, {
            books: state.books.map(book => {
                if (book.bookId === action.bookId) {
                    return {
                        ...book,
                        notes: [action.comment, ...book.notes]
                    }
                }
                return book
            })
        })

    }
    else if (action.type === REMOVE_COMMENT) {
        return Object.assign({}, state, {
            books: state.books.map(book => {
                if (book.bookId === action.bookId) {
                    return {
                        ...book,
                        notes: [action.comments]
                    }
                }
                return book
            })
        })
    }
    return state;
}
export function goodreadsReducer(state = initialState, action) {
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

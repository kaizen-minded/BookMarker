export const FETCH_BOOK_REQUEST = 'FETCH_BOOK_REQUEST';
export const fetchBookRequest = () =>({
    type: FETCH_BOOK_REQUEST
})

export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const fetchBookSuccess = (books) => ({
    type: FETCH_BOOK_SUCCESS,
    books
})

export const FETCH_BOOK_ERROR = 'FETCH_BOOK_ERROR';
export const fetchBookError = error => ({
    type: FETCH_BOOK_ERROR,
    error
})
export const ADD_BOOK = 'ADD_BOOK';
export const addNewBook = (newBook) => ({
    type: ADD_BOOK,
    newBook
})

export const GET_ALL_BOOKS = "GET_ALL_BOOKS";
export const getAllBooks = (books) => ({
    type: GET_ALL_BOOKS,
    books
})
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const updateStatus = (status, bookId) => ({
    type: UPDATE_STATUS,
    status: status,
    bookId: bookId
})
export const DELETE_BOOK = 'DELETE_BOOK';
export const deleteBook = (bookId) => ({
    type: DELETE_BOOK,
    bookId
})

// fetch(`${API_BASE_URL}/book`)

export const fetchAllBooks = () => dispatch => {
    return fetch(`/book/allbooks`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(book => {
            console.log(book)
            dispatch(getAllBooks(book));
        }).catch(err => {
            dispatch(fetchBookError(err));
        });
}

const fetchBooksByStatus = (status) => dispatch => {
    return fetch(`/book/?status=${status}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(book => {
            console.log(book)
            dispatch(fetchBookSuccess(book));
        }).catch(err => {
            dispatch(fetchBookError(err));
        });
};

export const fetchOneBook = (id) => dispatch => {
    return fetch(`/book/${id}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(book => {
            console.log(book)
            dispatch(fetchBookSuccess(book));
        }).catch(err => {
            dispatch(fetchBookError(err));
        });
}

export const createNewBook = (newbook) => dispatch => {
    console.log("CreateNewBook Dispatched")
    const data = {
        method: "POST",
        body: JSON.stringify(newbook),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    }
    return fetch('/book/create', data)
        .then(res => {
            if(!res.ok){
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(newbook => {
            dispatch(addNewBook(newbook))
        })
}

export const updateBookStatus = (bookId, status) => dispatch => {
    const bookUpdate = {
        id: bookId,
        status: status
    }
    console.log(bookUpdate)
    const data = {
        method: "PUT",
        body: JSON.stringify(bookUpdate),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    }
    return fetch(`/book/updatebookstatus/${bookId}`, data)
        .then(res => {
            if(!res.ok){
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(newStatus => {
            let {status, bookId} = newStatus.message
            console.log(status, bookId)
            dispatch(updateStatus(status, bookId))
        })
}

export const removeBook = (bookId) => dispatch => {
    console.log("delete Dispatched");
    const deleteBook = {
        id: bookId
    }
    const data = {
        method: "DELETE",
        body: JSON.stringify(deleteBook),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    }
    fetch(`/book/deletebook/${bookId}`, data)
        .then(res => {
            if(!res.ok){
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(newStatus => {
            let {bookId} = newStatus
            console.log(bookId)
            dispatch(deleteBook(bookId))
        })
}

export default fetchBooksByStatus
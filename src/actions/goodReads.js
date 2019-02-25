export const FETCH_GOODREADS_REQUEST = 'FETCH_GOODREADS_REQUEST';
export const fetchGoodReadsRequest = () =>({
    type: FETCH_GOODREADS_REQUEST
})

export const FETCH_GOODREADS_SUCCESS = 'FETCH_GOODREADS_SUCCESS';
export const fetchGoodReadsSuccess = (payload) => ({
    type: FETCH_GOODREADS_SUCCESS,
    payload
})

export const FETCH_GOODREADS_ERROR = 'FETCH_GOODREADS_ERROR';
export const fetchGoodReadsError = error => ({
    type: FETCH_GOODREADS_ERROR,
    error
})

const fetchGoodreads = (userBook) => dispatch => {
    fetch(`/book/search/${userBook}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.authToken}`
        }
    }).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(bookResults => {
        console.log(bookResults)
        dispatch(fetchGoodReadsSuccess(bookResults));
    }).catch(err => {
        dispatch(fetchGoodReadsError(err));
    });
};

export default fetchGoodreads
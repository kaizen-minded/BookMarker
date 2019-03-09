import bookReducer from './index';
import { addNewBook } from '../actions/index';

describe('bookReducer', () => {
    it('Should add new book', () => {
        let state = {
            books: []
        };
        const bookData = {
            bookId: 1,
            title: "Lord of the Rings",
            author: "Tolkein",
            status: "Current"
        };
        expect(state.books).toHaveLength(0);
        state = bookReducer(state, addNewBook(bookData));
        expect(state.books).toHaveLength(1);
        expect(state).toEqual({
            books: [{
                bookId: 1,
                title: "Lord of the Rings",
                author: "Tolkein",
                status: "Current"
            }]
        });
    });
});
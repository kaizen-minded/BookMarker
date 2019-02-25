import { ADD_BOOK, addNewBook, ADD_COMMENT, addComment } from './index';


describe('addNewBook', () => {
    it('Should return the action', () => {
        const book = "Hello";
        const action = addNewBook(book);
        expect(action.type).toEqual(ADD_BOOK);
        expect(action.newBook).toEqual(book);
    })
})
describe("addComment", () => {
    it('Should return the action', () => {
        const bookId = 23412;
        const comment = {
            lastUpdated: "12 Jul 2019",
            body: "My favorite part",
            currentPage: 45
        };
        const action = addComment(bookId, comment);
        expect(action.type).toEqual(ADD_COMMENT);
        expect(action.bookId).toEqual(bookId);
        expect(action.comment).toEqual(comment);

    })
})
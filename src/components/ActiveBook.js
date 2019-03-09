import React from 'react';
import { connect } from 'react-redux';
import { fetchOneBook, addNoteToBook, removeNoteFromBook } from '../actions/index'
import Comment from './Comment';
import './css/ActiveBook.css';


export class ActiveBook extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchOneBook(this.props.match.params.id));
    }
    handleSubmit(e) {
        const book = this.props.book
        e.preventDefault();
        const note = e.target.notes.value;
        const bookmarkPage = e.target.bookmarkPage.value;
        this.props.dispatch(addNoteToBook(book.bookId, bookmarkPage, note));
        this.props.dispatch(fetchOneBook(this.props.match.params.id));
        e.target.bookmarkPage.value = '';
        e.target.notes.value = '';
    }
    handleDeleteComment(bookId, commentId) {
        this.props.dispatch(removeNoteFromBook(bookId, commentId));
        this.props.dispatch(fetchOneBook(this.props.match.params.id));

    }

    render() {
        const { title, author, bookCover, notes } = this.props.book;
        let currentPage, comments;
        if (notes) {
            currentPage = notes.length > 0 ? notes[0].currentPage : 0;
            comments = notes.map((note, index) => {
                return <Comment
                    {...this.props}
                    index={index}
                    bookId={this.props.book.bookId}
                    id={note._id}
                    page={note.currentPage}
                    note={note.body}
                    date={note.lastUpdate}
                    deleteComment={this.handleDeleteComment.bind(this)}
                />
            });
        }
        else {
            currentPage = <h2>Notes not found</h2>;
        }
        return (
            <React.Fragment>
                <section className="active-book-form" role="region">
                    <section className="book-card">
                        <img src={bookCover} alt="Cover page" />
                        <h1>{title}</h1>
                        <h3>By: {author}</h3>
                        <h4>Page# {currentPage}</h4>
                    </section>
                    <form className="comment-form"
                        onSubmit={(e) => this.handleSubmit(e)}
                        name="commentForm"
                        className="comment-form"
                        role="form"
                    >
                        <label htmlFor="bookmarkPage">Bookmark Page:</label>
                        <input name="bookmarkPage" id="bookmarkPage" type="text" />

                        <label htmlFor="notes">Notes</label>
                        <textarea placeholder="Notes..." rows="5" cols="30" name="notes" id="notes"></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </section>
                <section className="comment-feed" role="region">
                    <h2>Comments</h2>
                    {comments}
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    book: state.book.oneBook,
    books: state.book.books,
    loading: state.book.loading,
    error: state.book.error
})
export default connect(mapStateToProps)(ActiveBook)
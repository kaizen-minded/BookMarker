import React from 'react';
import Book from './Book';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import fetchBooksByStatus, { fetchAllBooks, updateBookStatus, removeBook } from '../actions/index'

import './css/BookList.css';

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteBook = this.handleDeleteBook.bind(this);
        this.handleStatusUpdate = this.handleStatusUpdate.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchBooksByStatus(this.props.status))
    }
    handleDeleteBook(id) {
        this.props.dispatch(removeBook(id));
        this.props.dispatch(fetchAllBooks());
    }
    handleStatusUpdate(e, bookId, status) {
        e.preventDefault();
        this.props.dispatch(updateBookStatus(bookId, status))
            .then(result => {
                this.props.dispatch(fetchBooksByStatus(this.props.status));
                this.props.dispatch(fetchAllBooks());
            })

    }

    renderResults() {
        if (this.props.loading) {
            return <Spinner spinnerName="circle" noFadeIn />
        }
        if (this.props.error) {
            return <strong>{this.props.goodreads.error}</strong>;
        }
        const bookdata = this.props.books.map((book, index) => {
            return <Book
                key={index}
                {...book}
                deleteBook={this.handleDeleteBook}
                formSubmit={this.handleStatusUpdate}
                parent="BookList"
            />
        }
        )
        return <section className="book-list" role="region">{bookdata}</section>
    }

    render() {
        return (
            <div className="container">
                <h1>{this.props.status}</h1>
                {this.renderResults()}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    books: state.book.books,
    loading: state.book.loading,
    error: state.book.error
});

export default withRouter(connect(mapStateToProps)(BookList));
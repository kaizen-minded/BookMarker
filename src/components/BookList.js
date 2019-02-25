import React from 'react';
import Book from './Book';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchBooksByStatus, { fetchAllBooks, updateBookStatus, removeBook } from '../actions/index'

// import './Bookmarker.css';
import './css/BookList.css';


class BookList extends React.Component{
    componentDidMount() {
        this.props.dispatch(fetchBooksByStatus(this.props.status))
    }
    render(){
        const handleDeleteBook = (id) => {
            this.props.dispatch(removeBook(id));
            this.props.dispatch(fetchAllBooks());
        }
        const handleStatusUpdate = (e, bookId, status) => {
            e.preventDefault();
            this.props.dispatch(updateBookStatus(bookId, status))
            .then(result => {
                this.props.dispatch(fetchBooksByStatus(this.props.status));
                this.props.dispatch(fetchAllBooks());
            })
            
        }
        const bookdata = this.props.books.map((book, index) => {
                return <Book 
                 key={index}
                 {...book} 
                 deleteBook={handleDeleteBook} 
                 formSubmit={handleStatusUpdate} 
                 parent="BookList"
                 />
            }
        )
    console.log(this.props)
    return(
        <div className="container">
            <h1>{this.props.status}</h1>          
            {bookdata}
        </div>
    )
    }
}
const mapStateToProps = state => ({
    books: state.book.books,
    loading: state.loading,
    error: state.error
} )

export default withRouter(connect(mapStateToProps)(BookList));
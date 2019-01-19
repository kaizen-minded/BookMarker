import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchBooksByStatus, { fetchAllBooks, updateBookStatus, removeBook } from '../actions/index'
// import store from '../store';
import './Bookmarker.css';


class BookList extends React.Component{
    constructor (props){
        super(props)
    }
    componentDidMount() {
        this.props.dispatch(fetchBooksByStatus(this.props.status))
    }

// This needs to be its own component
    render(){
        const handleDeleteBook = (id) => {
            this.props.dispatch(removeBook(id))
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
    
    return(
        <div>
            <div>
            <h1>Testing</h1>
                <Link to="/wishlist"><button>WishList</button></Link>
                <Link to="/home"><button>Current</button></Link>
                <Link to="/completed"><button>Competed</button></Link>
            </div>
            
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

export default connect(mapStateToProps)(BookList);
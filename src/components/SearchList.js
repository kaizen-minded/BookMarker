import React from 'react';
import Book from './Book';
import { connect } from 'react-redux';
import {  createNewBook, fetchAllBooks } from '../actions/index';
import store from "../store";

function SearchList (props) {
    const listOfBooks = props.goodreads.goodreads;
    const handleSubmit = (id) =>{
        const selectedBook = listOfBooks.find(selectedBook => {
            return id === selectedBook.best_book.id._text
        })
        const newBook = {
           bookId: selectedBook.best_book.id._text,
           title: selectedBook.best_book.title._text,
           author: selectedBook.best_book.author.name._text,
           bookCover: selectedBook.best_book.image_url._text,
           active: false,
           status: "Wishlist"
        }
        console.log(newBook)
        store.dispatch(createNewBook(newBook));
        store.dispatch(fetchAllBooks());
    }
    const bookSearch = listOfBooks ? listOfBooks.map( book =>{
        return <Book
            key={book.best_book.id._text}
            title={book.best_book.title._text}
            bookCover={book.best_book.image_url._text}
            onSubmit={() => handleSubmit(book.best_book.id._text)}
            parent="SearchList"
            />
    }) : null;

    return(
        <div>
            {bookSearch}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        goodreads: state.goodreads
    }
}

export default connect(mapStateToProps)(SearchList)
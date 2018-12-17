import React from 'react';
import MainBook from './MainBook';
import MinorBook from './MinorBook'
import './Bookmarker.css';

function BookMarker (props){
    const bookdata = props.data.map((book, index) => {
        if(index !== 0){
            return <MinorBook key={index} title={book.title} image={book.image} />
        }
        return <MainBook key={index} title={book.title} 
                image={book.image} summary={book.summary} />
    })
    return(
        <div>
            <div>
                <button>WishList</button>
                <button>Current</button>
                <button>Competed</button>
            </div>
            <h1>Currently Reading</h1>
            {bookdata}
        </div>

    )
}

export default BookMarker
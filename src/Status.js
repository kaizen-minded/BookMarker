import React from 'react';
import './Status.css';

function Status(){
    return(
        <div className="">
            <div className="">
                <h3>Currently Reading</h3>
                <p>3 books</p>
            </div>
            <div className="">
                <h3>Books in Wishlist</h3>
                <p>13 books</p>
            </div>
            <div className="">
                <h3>Completed Books</h3>
                <p>5 books</p>
            </div>

        </div>

    )
}

export default Status
import React from 'react';
import './Status.css';

function Status(props){
    return(
        <div className="status-box">
            <label>Find more books</label>
            <input type="text" />

            <h3>Stats</h3>
            <div className="">
                <h3>Currently Reading</h3>
                <p>{props.current} books</p>
            </div>
            <div className="">
                <h3>Books in Wishlist</h3>
                <p>{props.wishlist} books</p>
            </div>
            <div className="">
                <h3>Completed Books</h3>
                <p>{props.completed} books</p>
            </div>

        </div>

    )
}

export default Status
import React from 'react';

export default function MainBook(props) {
    console.log(props.image)
    return (
        <div className="main-display">
            <img src={props.image} alt="Cover page" />
            <h1>{props.title}</h1>
            <h3>Author: {props.author}</h3>
            <h4>Page# 123</h4>
            <label htmlFor="bookmark">What page are you on?</label>
            <input id="bookmark" type="text" />
            <p>{props.summary}</p>
        </div>
    )
}
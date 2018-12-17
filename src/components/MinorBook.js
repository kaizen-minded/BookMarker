import React from 'react';

export default function MinorBook(props) {
    return (
        <div className="minor-display">
            <img src={props.image} alt="Cover page" />
            <h1>{props.title}</h1>
            <h3>Author: {props.author}</h3>
            <h4>Page# 123</h4>
        </div>
    )
}
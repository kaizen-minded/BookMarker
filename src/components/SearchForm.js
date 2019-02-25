import React from 'react';

function SearchForm (props){
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit} className="search-goodreads" role="form">
            <label htmlFor="search-bar">
            <h1>Find a new book</h1>
            <input id="search-bar" type="text" value={props.value} onChange={props.handleChange} />
            </label>
           <input type="submit" value="Submit" />
        </form>
    )
}

export default SearchForm;
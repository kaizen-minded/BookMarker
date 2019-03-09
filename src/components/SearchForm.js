import React from 'react';

function SearchForm(props) {
    return (
        <form onSubmit={props.handleSubmit} className="search-goodreads" role="form">
            <label htmlFor="search-bar">
                <h1 className="search-header">Find a new book</h1>
            </label>
            <input id="search-bar" type="text" value={props.value} onChange={props.handleChange} />

            <input type="submit" value="Submit" />
        </form>
    )
}

export default SearchForm;
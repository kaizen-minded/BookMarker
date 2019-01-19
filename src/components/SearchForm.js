import React from 'react';

function SearchForm (props){
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
            Find a new book:
            <input type="text" value={props.value} onChange={props.handleChange} />
            </label>
           <input type="submit" value="Submit" />
        </form>
    )
}

export default SearchForm;
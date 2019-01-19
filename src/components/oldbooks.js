import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Book.css';

class Book extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        console.log(this.props)
        return ( 
            <div className="minorDisplay" key={this.props.key} onClick={this.props.handleActive}>
            <img src={this.props.bookCover} alt="Cover page" />
            <h1>{this.props.title}</h1>
            <h4>Page# 123</h4>
            <button onClick={() => this.props.deleteBook(this.props.bookId)}>Delete</button>
            <button onClick={(e) => this.props.onSubmit(e, this.props.key)}>Save</button>
            <form onSubmit={(e) => this.props.formSubmit(e, this.props.bookId, e.target.bookStatus.value)}>
                <label>Book Status:</label>
                <select name="bookStatus" id="user" defaultValue={this.props.status}>
                    <option value="Current">Current</option>
                    <option value="Wishlist">Wishlist</option>
                    <option value="Completed">Completed</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
    
}

Book.PropTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    page: PropTypes.number,
}


export default Book
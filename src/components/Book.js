import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Book.css';
import SearchList from './SearchList';

class Book extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        console.log(this.props.parent)
        const mainContent = (
            <React.Fragment> <img src={this.props.bookCover} alt="Cover page" />
            <h1>{this.props.title}</h1>
            <h4>Page# 123</h4></React.Fragment>
            )
        let finalContent;
        switch(this.props.parent){
            case "SearchList":
                finalContent = 
                <React.Fragment>
                    {mainContent}
                    <button onClick={(e) => this.props.onSubmit(e, this.props.key)}>Save</button>
                </React.Fragment>
            break;
            case "BookList":
                finalContent = 
                <React.Fragment>
                    <Link to={`/book/${this.props.bookId}`}>
                    {mainContent}
                    </Link>
                    <button onClick={() => this.props.deleteBook(this.props.bookId)}>Delete</button>
                    <form onSubmit={(e) => this.props.formSubmit(e, this.props.bookId, e.target.bookStatus.value)}>
                        <label>Book Status:</label>
                        <select name="bookStatus" id="user" defaultValue={this.props.status}>
                            <option value="Current">Current</option>
                            <option value="Wishlist">Wishlist</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <input type="submit" value="Submit" />
                    </form>
                </React.Fragment>
            break;
            default:
                finalContent = "Error?"       
        }
        return ( 
            <div className="minorDisplay" key={this.props.key} onClick={this.props.handleActive}>
           {finalContent}
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
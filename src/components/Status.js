import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllBooks } from '../actions/index';
import './Status.css';

class Status extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.dispatch(fetchAllBooks())
    }
    render(){
        return(
            <div className="status-box">
                <Link to="/search">
                    <button>Find New Books</button>
                </Link>
                <h3>Stats</h3>
                <div className="">
                    <h3>Currently Reading</h3>
                    <p>{this.props.bookCount.current} books</p>
                </div>
                <div className="">
                    <h3>Books in Wishlist</h3>
                    <p>{this.props.bookCount.wishlist} books</p>
                </div>
                <div className="">
                    <h3>Completed Books</h3>
                    <p>{this.props.bookCount.completed} books</p>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
  bookCount: state.book.bookCount,
  loading: state.loading,
  error: state.error
} )


export default connect(mapStateToProps)(Status)
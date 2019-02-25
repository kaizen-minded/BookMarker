import React from 'react';
import SearchForm from './SearchForm';
import SearchList from './SearchList'
import { connect } from 'react-redux';
import fetchGoodreads from '../actions/goodReads';
import store from '../store';

import './css/SearchBooks.css';

class SearchBooks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userSearch : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            userSearch: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.userSearch)
        store.dispatch(fetchGoodreads(this.state.userSearch));
    }

    render(){
        return(
            <section className="container" role="region">
                <SearchForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.userSearch}/>
                <SearchList {...this.props.goodreads}/>
            </section>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        goodreads: state.goodreads,
        books: state.books
    }
}

export default connect(mapStateToProps)(SearchBooks)
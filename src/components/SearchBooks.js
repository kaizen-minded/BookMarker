import React from 'react';
import Spinner from 'react-spinkit';
import SearchForm from './SearchForm';
import SearchList from './SearchList'
import { connect } from 'react-redux';
import fetchGoodreads from '../actions/goodReads';
import store from '../store';

import './css/SearchBooks.css';
import './css/BookCards.css';

class SearchBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userSearch: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            userSearch: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        store.dispatch(fetchGoodreads(this.state.userSearch));
        this.setState({
            userSearch: ""
        });
    }

    renderResults() {
        if (this.props.goodreads.loading) {
            return <Spinner spinnerName="circle" noFadeIn />
        }
        if (this.props.error) {
            return <strong>{this.props.goodreads.error}</strong>;
        }
        return <SearchList {...this.props.goodreads} />
    }

    render() {
        return (
            <section className="container" role="region">
                <SearchForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.userSearch} />
                {this.renderResults()}
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
import React from 'react';
import { connect } from 'react-redux';
import { fetchAllBooks } from '../actions/index';
import './css/Status.css';

class Status extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.dispatch(fetchAllBooks())
    }
    render() {
        return (
            <React.Fragment>
                <h2 className="header">Book Stats</h2>

                <div className="status-card">
                    <h3>Currently Reading</h3>
                    <p>
                        <span className="status-number" aria-live="polite">{this.props.bookCount.current} </span>
                    </p>
                </div>
                <div className="status-card">
                    <h3>Books in Wishlist</h3>
                    <p>
                        <span className="status-number" aria-live="polite">{this.props.bookCount.wishlist} </span>
                    </p>
                </div>
                <div className="status-card">
                    <h3>Completed Books</h3>
                    <p>
                        <span className="status-number" aria-live="polite">{this.props.bookCount.completed} </span>
                    </p>
                </div>

            </React.Fragment>
        )
    }

}

const mapStateToProps = state => ({
    bookCount: state.book.bookCount,
    loading: state.loading,
    error: state.error
})


export default connect(mapStateToProps)(Status)
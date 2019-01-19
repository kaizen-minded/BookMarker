import React from 'react';
import { connect } from 'react-redux';
import { fetchOneBook } from '../actions/index'
import Comments from './Comments';
import store from '../store';


class ActiveBook extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        store.dispatch(fetchOneBook(this.props.match.params.id))
    }

    render(){
        console.log(this.props)
        const { title, author, bookCover } = this.props.books.books
        console.log(title)
        return(
            <div className="main-display">
            <section>
                <img src={bookCover} alt="Cover page" />
                <h1>{title}</h1>
                <h3>Author: {author}</h3>
                <h4>Page# 123</h4>
            </section>
            <section>
                <h3>Comments</h3>
                <Comments />
            </section>
            <section>
                <form >
                    <label> Current Page</label>
                    <input type="number" />
                    <label htmlFor="notes">Notes</label>
                    <input type="textarea" />
                    <input type="submit" value="Submit" />
                </form>
            </section>
            <label htmlFor="bookmark">What page are you on?</label>
            <input id="bookmark" type="text" />     
            </div>
            
            )

    }
    
}

//Why is my State Empty?
const mapStateToProps = (state, props) => ({
//     books: state.bookList.books[props.match.params.id],
    books: state.book,
    loading: state.loading,
    error: state.error
} )

export default connect(mapStateToProps)(ActiveBook)
// export default ActiveBook
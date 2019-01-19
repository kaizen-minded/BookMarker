import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import fetchBooksByStatus from '../actions/index'
import store from '../store';

import NavBar from './Navbar';
import BookList from './BookList';
import Status from './Status';
import SearchBooks from './SearchBooks'

import './App.css';
import ActiveBook from './ActiveBook';

class App extends Component {
  constructor() {
    super();
    this.state = {
      routes: [
        {
          path: "/home",
          title: "Currently Reading",
          status: "Current"
        },
        {
          path: "/wishlist",
          title: "Will Read",
          status: "Wishlist"
        },
        {
          path: "/completed",
          title: "Books I have finished",
          status: "Completed"
        }
      ]
    }
  }

  render() {
    const styles = {
      float: "right",
      width: "80%"
    }
    const statusStyles = {
      background: "lightblue",
      "min-height": "100vh",
      float: "left"
    }
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <main style={styles} className="">
              {this.state.routes.map(({ path, status, title }) => (
                <Route
                  path={path}
                  render={(props) => <BookList {...props} status={status} title={title} data={this.state.books} />}
                />
              ))}
              <Route path="/search" component={SearchBooks} />
              <Route path="/book/:id" component={ActiveBook} />
            </main>
            <aside style={statusStyles}>
              <Status current={4} wishlist={3} completed={15} />
            </aside>
          </div>
        </Router>
      </Provider>
    );
  }
}

// const mapStateToProps = state => ({
//   books: state.bookList.books,
//   loading: state.loading,
//   error: state.error
// } )

// export default connect(mapStateToProps)(App);
export default App
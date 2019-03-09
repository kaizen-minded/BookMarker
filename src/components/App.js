import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from '../store';

import Dashboard from './Dashboard';
import LoginForm from './login-form';
import Homepage from './Homepage';

import './css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      routes: [
        {
          path: "/current",
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

    const PrivateRoute = ({ component: Component, ...rest }) => {
      return <Route {...rest} render={(props) => (
        this.props.user !== null
          ? <Component {...props} routes={this.state.routes} />
          : <Redirect to='/' />
      )}
      />
    }

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route path='/login' component={LoginForm} />
            <PrivateRoute path="/view" component={Dashboard} />
          </div>
        </Router>
      </Provider>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.currentUser
})

export default connect(mapStateToProps)(App);
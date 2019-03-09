import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './css/Navbar.css';

import { clearAuthToken } from '../local-storage';
import { clearAuth } from '../actions/auth';


class NavBar extends React.Component {

    logout() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    hamburger() {
        return (
            [<input type="checkbox" id="nav-toggle" />,
            <label htmlFor="nav-toggle" className="burger-menu">
                <div className="white-bar"></div>
                <div className="white-bar"></div>
                <div className="white-bar"></div>
            </label>]
        )
    }
    render() {
        let logoutButton;
        if (this.props.loggedIn) {
            logoutButton = <button className="btn logout" onClick={() => this.logout()}>Log Out</button>
        } else {
            logoutButton = <Link to={'/login'}><button>Log In</button></Link>

        }
        return (
            <nav className="nav-container">
                <h1 className="logo"><i class="fas fa-bookmark"></i> BookMarker</h1>
                <section className="menu">
                    {this.hamburger()}
                    <div className="right-menu">
                        <ul>
                            {
                                this.props.loggedIn ? [
                                    <li className="nav-link"><Link to={"/view/current"}>Current</Link></li>,
                                    <li className="nav-link"><Link to={"/view/wishlist"}>Wishlist</Link></li>,
                                    <li className="nav-link"><Link to={"/view/completed"}>Completed</Link></li>,
                                    <li className="nav-link"><Link to={"/view/search"}>Search</Link></li>,
                                    <li>{logoutButton}</li>
                                ] : null
                            }
                        </ul>
                    </div>
                </section>

            </nav>
        )
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
});

export default withRouter(connect(mapStateToProps)(NavBar))
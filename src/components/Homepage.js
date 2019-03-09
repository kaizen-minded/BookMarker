import React from 'react';
import NavBar from './Navbar';
import RegistrationPage from './registration-page';
import LoginForm from './login-form';

import './css/Homepage.css';


const Homepage = (props) => {
    return (
        <div>
            <header role="banner">
                <NavBar />
            </header>
            <main className="homepage" role="main">
                <section className="homepage-info" role="region">
                    <h1>BookMarker</h1>
                    <ul>
                        <li>BookMarker search engine powered by Goodreads</li>
                        <li>Digitally keep track of where you left off</li>
                        <li>Leave notes for yourself</li>
                    </ul>
                </section>
                <section className="homepage-register" role="region">
                    <RegistrationPage />
                    <LoginForm />
                </section>
            </main>
        </div>
    )
}

export default Homepage;
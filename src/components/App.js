import React, { Component } from 'react';
import NavBar from './Navbar';
import BookMarker from './BookMarker';
import Status from './Status';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: [
        {
          image:"../images/harry.jpg",
          title: "Half Blood Prince",
          author: "J.K Rowling",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          image:"../images/potter.jpg",
          title: "Sorcerer's Stone",
          author: "J.K Rowling",
          summary:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
        },
        {
          image:"../images/harry-potter.jpg",
          title:"Deathly Hallows",
          author:"J.K Rowling",
          summary:"Blah Blah Blah"
        }
      ]
    }
  }
  render() {
    const styles = {
      float:"right",
      width: "80%"
    }
    const statusStyles = {
      background: "lightblue",
      "min-height": "100vh",
      float: "left"
    }
    return (
      <div className="App">
        <NavBar />

        <main style={styles}className="">
          <BookMarker data={this.state.books}/>
        </main>
        <aside style={statusStyles}>
          <Status current={4} wishlist={3} completed={15}/>
        </aside>
        
      </div>
    );
  }
}

export default App;

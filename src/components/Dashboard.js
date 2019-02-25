import React from 'react';
import { Route, withRouter} from 'react-router-dom';
import BookList from './BookList';
import Navbar from './Navbar';
import Status from './Status';
import ActiveBook from './ActiveBook';

import './Dashboard.css';
import SearchBooks from './SearchBooks';

const Dashboard = (props) => {
  console.log(props)
  const routes = [
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
    return (
        <div className="App">
            <Navbar />
            <aside className="aside-container" role="complementary">
              <Status />
            </aside>
            <main className="main-container" role="main">
                <Route 
                path={`${props.match.path}/current`}
                render={(props) => <BookList {...props} status={"Current"} title={"Currently Reading"} />} 
                />
                <Route 
                path={`${props.match.path}/wishlist`}
                render={(props) => <BookList {...props} status={"Wishlist"} title={"Wishlist"} />} 
                />
                <Route 
                path={`${props.match.path}/completed`}
                render={(props) => <BookList {...props} status={"Completed"} title={"Completed"} />} 
                />
                <Route 
                path={`${props.match.path}/book/:id`} 
                render={(props) => <ActiveBook {...props} />}
                 />
                 <Route
                 path={`${props.match.path}/search`}
                 render={(props) => <SearchBooks {...props} />} 
                 />
            </main>
      </div>
    )
}

export default withRouter(Dashboard);
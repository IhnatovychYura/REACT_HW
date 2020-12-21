import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from "./components/home/HomeComponent";
import AllUsersComponent from "./components/all-users/AllUsersComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <Link to={'/home'}> Home </Link>
                        <Link to={'/all-users'}> Users </Link>
                    </header>

                    <Switch>
                        <Route path={'/home'} render={() => {
                            return <HomeComponent/>;
                        }}/>

                        <Route path={'/all-users'} render={() => {
                            return <AllUsersComponent/>;
                        }}/>
                    </Switch>
                </div>
            </Router>
        );
    }

}

export default App;

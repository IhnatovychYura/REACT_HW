import React, {Component} from 'react';
import './App.css';
import logo from "./logo.svg";
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
                    <header className="App-header">
                        <img src={logo} className="App-header-logo" alt="logo"/>
                        <Link to={'/home'} className="link"> Home </Link>
                        <Link to={'/all-users'} className="link"> Users </Link>
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

import React, {Component} from 'react';
import logo from "../../logo.svg";
import './HomeComponent.css'

class HomeComponent extends Component {
    render() {
        return (
                <main className="Home-wrapper">
                    <h2 className="Home-header">React</h2>
                    <div className="Home-body">
                        <img src={logo} className="Home-logo" alt="logo"/>
                    </div>
                </main>
        );
    }
}

export default HomeComponent;
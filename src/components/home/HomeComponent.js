import React, {Component} from 'react';
import logo from "../../logo.svg";

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <main className="App-main">
                    <div className="Block">React</div>
                    <div className="App-home">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                </main>
            </div>
        );
    }
}

export default HomeComponent;
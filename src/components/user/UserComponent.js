import React, {Component} from 'react';
import "./UserComponent.css"
import {
    Link,
    withRouter
} from "react-router-dom";

class UserComponent extends Component {
    render() {

        let {user, match: {url}} = this.props

        return (
            <div className="User-wrapper">
                <div className="User-item">
                    <p className="User-text">{user.id}. {user.name}</p>
                    <div className="User-btns">
                        <Link to={`${url}/user/${user.id}`}>
                            <button className="btn-details">Details</button>
                        </Link>
                        <Link to={`${url}/posts/userId/${user.id}`}>
                            <button className="btn-post">Post</button>
                        </Link>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default withRouter(UserComponent);
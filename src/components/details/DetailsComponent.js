import React, {Component} from 'react';
import UserService from "../../services/UserService";
import "./DetailsComponent.css"


class DetailsComponent extends Component {

    state = {user: null}
    userService = new UserService()

    async componentDidMount() {
        let {id} = this.props
        let user = await this.userService.getUserById(id);
        this.setState({user})
    }

    render() {

        let {user} = this.state

        return (
            <div className="Details-div">
                {user &&
                    <div className="Details-info">
                        <h5>{user.name}</h5>
                        <div>{user.username}</div>
                        <hr/>
                        <p><b>Phone:</b> {user.phone}</p>
                        <hr/>
                        <p><b>E-mail:</b> {user.email}</p>
                        <hr/>
                        <p><b>Website:</b> {user.website}</p>
                    </div>
                }
            </div>
        );
    }
}

export default DetailsComponent;
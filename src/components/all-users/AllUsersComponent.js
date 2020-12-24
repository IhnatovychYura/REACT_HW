import React, {Component} from 'react';
import UserService from "../../services/UserService";
import UserComponent from "../user/UserComponent";
import "./AllUsersComponent.css"
import DetailsComponent from "../details/DetailsComponent";
import UserPostsComponent from "../user-posts/UserPostsComponent";
import {Route, Switch, withRouter} from "react-router-dom";

class AllUsersComponent extends Component {

    userService = new UserService();
    state = {users: []}

    async componentDidMount() {
        let users = await this.userService.getAllUsers()
        this.setState({users: users})
    }

    render() {

        let {users} = this.state
        let {match: {url}} = this.props

        return (
            <div className="AllUsers-wrapper">
                <h2 className="AllUsers-header">Users</h2>
                <div className="AllUsers-info">
                    <div className="AllUsers-div">
                        {users.map(value => (<UserComponent user={value} key={value.id}/>))}
                    </div>
                    <Switch>
                        <Route path={url + '/user/:id'} render={(props) => {
                            let {match: {params: {id}}} = props
                            return <DetailsComponent id={id} key={id}/>;
                        }}/>
                    </Switch>
                </div>
                <div className="AllUsers-posts">
                    <Switch>
                        <Route path={url + `/posts/userId/:id`} render={(props) => {
                            let {match: {params: {id}}} = props
                            return <UserPostsComponent id={id} key={id}/>;
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsersComponent);
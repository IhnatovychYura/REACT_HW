import React, {Component} from 'react';
import UserPostsService from "../../services/UserPostsService";
import PostComponent from "../post/PostComponent";
import "./UserPostsComponent.css"

class UserPostsComponent extends Component {

    state = {userPosts: []};
    userPostsService = new UserPostsService();

    async componentDidMount() {
        let {id} = this.props
        let userPosts = await this.userPostsService.getPostByUserId(id);
        this.setState({userPosts: userPosts})
    }

    render() {

        let {userPosts} = this.state

        return (
            <div className="Posts-div">
                {userPosts.map(value => (<PostComponent post={value} key={value.id}/>))}
            </div>
        );
    }
}

export default UserPostsComponent;
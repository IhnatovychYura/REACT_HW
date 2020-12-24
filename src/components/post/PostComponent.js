import React, {Component} from 'react';
import "./PostComponent.css"

class PostComponent extends Component {
    render() {

        let {post} = this.props

        return (
                <div className="Post-info">
                    <h5>{post.id}.{post.title}</h5>
                    <p>{post.body}</p>
                </div>
        );
    }
}

export default PostComponent;
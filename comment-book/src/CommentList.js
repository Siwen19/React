import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }
    state = {}
    render() {
        console.log(this.props.comments)
        return (
            <div>
                {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
            </div>
        );
    }
}

export default CommentList;

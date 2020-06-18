import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    handleDeleteComment(index) {
        // 将 Comment 里的 index 
        if (this.props.onDeleteComment) {
            // 把从 Comment 传过来的 index 传给 父级 onDeleteComment
            this.props.onDeleteComment(index)
        }
    }
    render() {
        console.log(this.props.comments)
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment
                        comment={comment}
                        key={i}
                        // 将每个 comment 的 index 传给 Comment
                        index={i}
                        onDeleteComment={this.handleDeleteComment.bind(this)} />)}
            </div>
        );
    }
}

export default CommentList; 

import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        this._loadComments();
    }

    _loadComments() {
        const comments = localStorage.getItem('comments');
        if (comments) {
            this.setState({
                comments: JSON.parse(comments)
            })
        }
    }

    _saveComments(comments) {
        // 存储到本地   保留上次记录
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    handleSubmitComment(comment) {
        // if (!comment) return 
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
        // 每次提交评论都会把评论列表数据保存一次
        this._saveComments(this.state.comments);
    }

    handleDeleteComment(index) {
        const comments = this.state.comments;
        // 得到从 CommentList 中传过来的 index 
        comments.splice(index, 1);
        this.setState({ comments });
        // 把更新后的数据同步到 localStorage 中
        this._saveComments(comments);
    }
    render() {
        console.log(this.state)
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList
                    comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment.bind(this)} />
            </div>
        );
    }
}

export default CommentApp;

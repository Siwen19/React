import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }

    componentWillMount() {
        this._loadUsername();
    }

    // 所有私有方法都以 _ 开头
    _loadUsername() {
        const username = localStorage.getItem('username');
        if (username) {
            this.setState({
                username: username
            })
        }
    }

    _saveUsername(username) {
        localStorage.setItem('username', username);
    }

    componentDidMount() {
        this.textarea.focus();
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleUsernameBlur(event) {
        this._saveUsername(event.target.value)
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            const { username, content } = this.state;
            this.props.onSubmit({
                username,
                content,
                // 鼠标点击发布 保存点击的时间
                createdTime: +new Date()
            });
            this.setState({
                content: ''
            })
        }
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名:</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                            onBlur={this.handleUsernameBlur.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容:</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        );
    }
}

export default CommentInput;

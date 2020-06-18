import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
    static propTypes = {
        // 规定 comment 必须是一个对象 且 必填
        comment: PropTypes.object.isRequired,
        // 规定 onDeleteComment 必须是一个函数
        onDeleteComment: PropTypes.func,
        // 规定 index 必须是一个数字
        index: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            timeString: ''
        }
    }

    componentWillMount() {
        this._updateTimeString();
        // 每 5 秒 更新一下时间
        this._timer = setInterval(
            this._updateTimeString.bind(this)
            , 5000);
    }

    _updateTimeString() {
        const comment = this.props.comment;
        // 当前时间 - 点击评论发布时间
        const duration = (+Date.now() - comment.createdTime) / 1000;
        // 将时间以 分钟 秒 划分
        this.setState({
            timeString: duration > 60 ? `${Math.round(duration / 60)} 分钟前` :
                `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    handleDeleteComment() {
        if (this.props.onDeleteComment) {
            // 把 从CommentList 传过来的 index 传给父级 onDeleteComment()
            this.props.onDeleteComment(this.props.index);
        }
    }
    // 这里把所有类似于 < > 的符号都替换掉了
    _getProcessedContent(content) {
        return content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }
    render() {
        const { comment } = this.props;
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.username}</span> :
                </div>
                <p
                    dangerouslySetInnerHTML={{ __html: this._getProcessedContent(comment.content) }}>
                </p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span
                    className='comment-delete'
                    onClick={this.handleDeleteComment.bind(this)}>删除</span>
            </div>
        );
    }
}

export default Comment;

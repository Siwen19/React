import React from 'react';
// 常用的好用的包
import BScroll from 'better-scroll';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './scroll.styl';

class Scroll extends React.Component {
    componentDidMount() {
        this.scrollView = ReactDOM.findDOMNode(
            this.refs.scrollView);
        // console.log(this.scrollView);
        if (!this.bScroll) { // 防止多次渲染 单例
            this.bScroll = new BScroll(this.scrollView, {
                probeType: 3,
                click: this.props.click
            })
            if (this.props.onScroll) {
                this.bScroll.on('scroll', (scroll) => {
                    this.props.onScroll(scroll);
                })
            }
        }
    }
    refresh() {
        if (this.bScroll) {
            this.bScroll.refresh();
        }
    }
    render() {
        console.log(this.props.children);
        return (<div className="scroll-view" ref='scrollView'>
            {/* this.props.children -> 表示组件的所有子节点 */}
            {this.props.children}
        </div>
        )
    }
}

Scroll.defaultProps = {
    click: true,
    onScroll: null,
    refresh: false
}
Scroll.propTypes = {
    click: PropTypes.bool,
    refresh: PropTypes.bool,
    onScroll: PropTypes.func
}

export default Scroll;
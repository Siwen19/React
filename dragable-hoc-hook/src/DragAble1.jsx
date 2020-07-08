import React, { Component } from 'react';

class Drag extends Component {
    state = {
        left: 0,
        top: 0,
        startX: 0,
        startY: 0
    }
    handleDown = (e) => {
        let obj = e.target.getBoundingClientRect();
        var startX = e.clientX;
        var startY = e.clientY;
        // 点击位置距离h2的内部距离
        this.startX = startX - obj.left;
        this.startY = startY - obj.top;
        document.addEventListener('mousemove', this.handleMove);
        document.addEventListener('mouseup', this.handleUp);
    }
    handleMove = (e) => {
        var newX = e.clientX;
        var newY = e.clientY;

        const diffX = newX - this.startX;
        const diffY = newY - this.startY;
        this.setState({
            left: diffX,
            top: diffY,
        })
    }
    handleUp = () => {
        document.removeEventListener('mousemove', this.handleMove);
        document.removeEventListener('mouseup', this.handleUp);
    }
    render() {
        const { left, top } = this.state;
        return (
            <h2 onMouseDown={this.handleDown.bind(this)}
                onMouseUp={this.handleUp.bind(this)}
                style={{ left, top }}
                className="dragable">爱国荣校</h2>
        );
    }
}

class Drag2 extends Component {
    state = {}
    render() {
        return (
            <div>爱国荣校</div>
        );
    }
}

function withDragAble(Com) {
    return class WithDragAble extends Component {
        state = {
            left: 0,
            top: 0,
            startX: 0,
            startY: 0
        }
        handleDown = (e) => {
            let obj = e.target.getBoundingClientRect();
            var startX = e.clientX;
            var startY = e.clientY;
            // 点击位置距离h2的内部距离
            this.startX = startX - obj.left;
            this.startY = startY - obj.top;
            document.addEventListener('mousemove', this.handleMove);
            document.addEventListener('mouseup', this.handleUp);
        }
        handleMove = (e) => {
            var newX = e.clientX;
            var newY = e.clientY;

            const diffX = newX - this.startX;
            const diffY = newY - this.startY;
            this.setState({
                left: diffX,
                top: diffY,
            })
        }
        handleUp = () => {
            document.removeEventListener('mousemove', this.handleMove);
            document.removeEventListener('mouseup', this.handleUp);
        }

        render() {
            const { left, top } = this.state;
            return (
                <div className="dragable" style={{ left, top }}
                onMouseDown={ this.handleDown.bind(this) }
                onMouseUp={ this.handleUp.bind(this) }>
                    <Com />
                </div>
            )
        }
    }  
}
export const WithDragAble2 = withDragAble(Drag2);

export default Drag;
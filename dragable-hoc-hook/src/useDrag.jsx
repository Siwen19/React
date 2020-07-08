import React, { useState } from 'react';
import './App.css';
// useState 之前：组件 class function， 函数组件内部定义 state
// useState 自己定义出来的 hook
function useDrag() {
    // state = {
    //     left: 0,
    //     top: 0,
    //     startX: 0,
    //     startY: 0
    // }
    var [ state, setState ] = useState({
        left: 0,
        top: 0
    }) 
    var handleDown = (e) => {
        let obj = e.target.getBoundingClientRect();
        var startX = e.clientX;
        var startY = e.clientY; 
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleUp);
    }
    var handleMove = (e) => {
        var newX = e.clientX;
        var newY = e.clientY;

        var diffX = newX;
        var diffY = newY;
        setState({
            left: diffX,
            top: diffY,
        })
    }
    var handleUp = () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleUp);
    }
    return {
        left: state.left, top: state.top, handleDown, handleUp
    }
}
function Drag() {
    const { left, top, handleDown, handleUp } = useDrag();
    return (
        <div style={{left, top}} className="dragable"
        onMouseDown={ handleDown }
        onMouseUp={ handleUp }>
            drag1
        </div>
    )
}
export const Drag1 = Drag;
export default useDrag;
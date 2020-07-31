import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';

function Demo() {
    const [ isIn, setIsIn ] = useState(true);
    // 移走 : *-exit ms *-exit-active *-exit-down 移进来 : *-enter ms *-enter-active *-exit-down
    return (
        <>
        <CSSTransition 
        timeout={2000} 
        classNames="msg" 
        in={isIn}>
            <div className="box">
            </div>
        </CSSTransition>
        <button onClick={() => setIsIn(!isIn)}>toggle</button>
        </>
    )
}

export default Demo;

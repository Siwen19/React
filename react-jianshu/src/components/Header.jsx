import React, { Component } from 'react';
import ImmutableComponent from './common'; 
class Header extends ImmutableComponent {
    state = {}

    shallowEqual(objA, objB) { 
        if (typeof objA !== 'object' || typeof objB !== 'object') {
            return false;
        }
        const keysA = Object.keys(objA);
        const keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) return false;
        for (let key of keysA) {
            if (objA[key] !== objB[key]) {
                return false;
            }
        }
        return true;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     let isSame = this.shallowEqual(nextProps, this.props) &&
    //     this.shallowEqual(nextState, this.state);

    //     return !isSame;
    // }
    //  抽离出来了
    // shouldComponentUpdate(nextProps, nextState) {
    //     const thisProps = this.props || {};
    //     const thisState = this.state || {};
    //     nextProps = nextProps || {};
    //     nextState = nextState || {};
    //     if (Object.keys(thisProps).length !== Object.keys(nextProps).length
    //         || Object.keys(thisState).length !== Object.keys(nextState).length) {
    //         return true;
    //     }
    //     for (let propKey of nextProps) {
    //         if (!is(thisProps[propKey], nextProps[propKey])) {
    //             return true;
    //         }
    //     }
    //     for (let stateKey of nextState) {
    //         if (!is(thisState[stateKey], nextState[stateKey])) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    render() {
        const { title } = this.props;
        console.log('header render');
        return (
            <div>
                header { title}
            </div>
        );
    }
}

export default Header;
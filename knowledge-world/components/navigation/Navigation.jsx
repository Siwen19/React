import React, { Component } from 'react';
import search from '../asserts/search.png';
import './Navigation.css';

class Navigation extends Component {
    state = {}
    render() {
        return (
            <div className="navigation">
                <div className="nav-input">
                    <input type="text" placeholder='搜索用户、星球或内容' />
                </div>
                <div className="nav-image">
                    <img className='input-image' src={search} alt="搜索" />
                </div>
            </div>
        );
    }
}

export default Navigation;
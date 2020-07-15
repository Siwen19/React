import React, { Component } from 'react';
import './Header.css';
import plus from '../asserts/plus.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    handleCreatePlanets() {
        window.history.push('/planet')
    }
    render() {
        return (
            <div className="header">
                <div className="header-text">知识星球</div>
                <div className="header-aside">
                    <Link to={'/planet'}><img className='header-image' src={plus} alt="更多"
                    /> </Link>
                </div>
            </div>
        );
    }
}

export default Header;
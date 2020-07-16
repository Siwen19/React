import React from 'react';
import PropTypes, { func } from 'prop-types';
import './Header.css';
import { useReducer } from 'react';

export default function Header(props) {
    const { title, onBack } = props;
    // const [] = useReducer(reducer, {cities})
    return (
        <div className="header">
            <div className="header-back">
                <svg width="42" height="42" onClick={onBack}>
                    <polyline points="25, 13 16, 21 25, 29"
                        stroke="#fff"
                        strokeWidth="2"
                        fill="none" />
                </svg>
            </div>
            <div className="header-title">{title}</div>
        </div>
    )
};
Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired
}

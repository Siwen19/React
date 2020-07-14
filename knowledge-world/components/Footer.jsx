import React, { Component } from 'react';
import planet from '../asserts/planet.png';
import message from '../asserts/message.png';
import find from '../asserts/find.png';
import me from '../asserts/me.png';
import './Footer.css';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="footer">
                <div className="footer-bar">
                    <img src={planet} alt="" />
                    <span className="footer-text">星球</span>
                </div>
                <div className="footer-bar">
                    <img src={message} alt="" />
                    <span className="footer-text">动态</span>
                </div>
                <div className="footer-bar">
                    <img src={find} alt="" />
                    <span className="footer-text">发现</span>
                </div>
                <div className="footer-bar">
                    <img src={me} alt="" />
                    <span className="footer-text">我</span>
                </div>
            </div>
        );
    }
}

export default Footer;

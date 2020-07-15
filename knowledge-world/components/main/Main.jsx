import React, { Component } from 'react';
import './Main.css';
import Header from '../header/Header.jsx';
import Article from '../article/Article';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

class Main extends Component {
    state = {}
    render() {
        return (
            <div className='wrapper'>
                <Header />
                <Navigation />
                <Article />
                <Footer />
            </div>
        );
    }
}

export default Main;

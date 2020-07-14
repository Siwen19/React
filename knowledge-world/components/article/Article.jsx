import React, { Component } from 'react';
import Item from './item/Item';
import axios from 'axios';
import Mock from '../data/Data';
import setup from '../asserts/setup.png';
import './Article.css';
import { Link } from 'react-router-dom';

class Article extends Component {
    constructor() {
        super();
        this.state = {
            initPlanets: [],
            newPlanets: []
        }
    }
    componentDidMount() {
        axios.get('/posts/').then(res => { 
            this.setState({
                initPlanets: res.data.list,
                newPlanets: JSON.parse(localStorage.getItem('info')) || []
            })
        })  
    }
    render() {
        const { initPlanets, newPlanets } = this.state;
        console.log(newPlanets)
        const newItem = newPlanets.map((ele, i) => <Item data={ele} key={i} />)
        const item = initPlanets.map((ele, i) => <Item data={ele} key={i}/>)
        return (
            <div className="article">
                 { item }
                 { newItem }
                 <div>
                <div className="container-wrapper" style={{border: 'dotted', backgroundColor: "transparent"}}>
                    <div className="image-box">
                        <Link to='/planet'>
                        <img src={setup} style={{transform: "scale(0.5)"}} alt=""/>
                        </Link>
                        <figcaption>创建星球</figcaption>
                    </div> 
                </div>
            </div>
            </div>
        );
    }
}

export default Article;
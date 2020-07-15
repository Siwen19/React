import React, { Component } from 'react';
import './planet.css'; 
import { Link } from 'react-router-dom';

class Planet extends Component {
    constructor() {
        super();
        this.state = {
            isDisabled: true
        }
    } 
    handleNextStep() {    
            this.setState({
                isDisabled: false
            }) 
    }
    handleNextPage() { 
        if (this.input.value !== null) {
            let obj = {}; 
            let newObj;
            obj['titles'] = this.input.value;
            obj['names'] = 'Siwen Li'; 
            if (localStorage.getItem('info') !== null) {
                newObj = [...JSON.parse(localStorage.getItem('info')), obj]
            } else {
                newObj = [obj];
            }  
            localStorage.setItem('info', 
            JSON.stringify(newObj));
    }
}
    render() { 
        const { isDisabled } = this.state;
        return ( 
            <div className="planet-wrapper">
            <div className="header-wrapper">
                <Link to="/">
                <span className="cancel-text">取消</span> 
                </Link>
                <Link to="/">
                <button className="next-step-button" 
                disabled={isDisabled} 
                onClick={this.handleNextPage.bind(this)}
                >下一步</button>
                </Link>
            </div>
            <div className="body-wrapper">
                <div className="pic-box">
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2851553266,2395599848&fm=26&gp=0.jpg" 
                    alt=""/>
                </div>
                <input type="text" className="input-box" 
                placeholder={"输入星球名称"}
                onClick={this.handleNextStep.bind(this)}  
                ref={(input) => this.input = input} />
            </div>
            </div>
         );
    }
}
 
export default Planet;